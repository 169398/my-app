import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { z } from "zod";
import {
  DeletePostValidator as ImportedDeletePostValidator,
  // Assuming the structure of the validator
} from "@/lib/validators/deletepost";

// Local declaration with a different name
const LocalDeletePostValidator = z.object({
  postId: z.string(),
});

export async function POST(req: Request) {
  try {
    const session = await getAuthSession();

    if (!session?.user) {
      return new Response("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { postId } = ImportedDeletePostValidator.parse(body);

    // Check if the user is the owner of the post
    const post = await db.post.findUnique({
      where: {
        id: postId,
      },
      select: {
        authorId: true,
      },
    });

    if (!post || post.authorId !== session.user.id) {
      return new Response("You are not authorized to delete this post.", {
        status: 403,
      });
    }

    // Delete the post
    await db.post.delete({
      where: {
        id: postId,
      },
    });

    return new Response("Post deleted successfully.");
  } catch (error) {
    console.error(error);

    if (error instanceof z.ZodError) {
      return new Response(error.message, { status: 400 });
    }

    return new Response(
      "Could not delete the post at this time. Please try later.",
      {
        status: 500,
      }
    );
  }
}
