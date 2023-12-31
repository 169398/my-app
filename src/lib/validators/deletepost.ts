import { z } from "zod";

export const DeletePostValidator = z.object({
  postId: z.string(),
});
export type DeletePostRequest = z.infer<typeof DeletePostValidator>;
