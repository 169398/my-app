"use client";

import React, { useState } from "react";
import { useToast } from "../hooks/use-toast";
import { XCircle } from "lucide-react";
import axios from "axios";
import { Trash } from "lucide-react";
import { Loader2 } from "lucide-react";

const DeletePostButton = ({
  postId,
  onDelete,
}: {
  postId: string;
  onDelete: () => void;
}) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);
  const { toast } = useToast();

  const handleDelete = async () => {
    try {
      setIsDeleting(true);

      const { data } = await axios.post(`/api/subreddit/deletepost`, {
        postId,
      });
      // Trigger the onDelete callback (passed from the parent component)
      if (onDelete) {
        onDelete();
      }

      toast({
        title: "Post Deleted!",
        description: "The post has been successfully deleted.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Unable to delete post. You are not the owner.",
        variant: "destructive",
      });
    } finally {
      setIsDeleting(false);
      setIsConfirmationVisible(false);
    }
  };

  return (
    <div className="relative inline-block">
      <button
        className={`delete-button ${isDeleting ? "loading" : ""}`}
        onClick={() => setIsConfirmationVisible(true)}
        disabled={isDeleting}
      >
        {isDeleting ? (
          <li className="relative">
            <Loader2 className="w-6 h-6 text-zinc-500 animate-spin" />
          </li>
        ) : (
          "..."
        )}
      </button>

      {isConfirmationVisible && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="bg-white p-4 rounded-md text-center">
            <Trash
              size={20}
              className=" cursor-pointer"
              onClick={handleDelete}
            />

            <XCircle
              size={13}
              className="text-gray-500 cursor-pointer absolute top-2 left-5 right-4"
              onClick={() => setIsConfirmationVisible(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DeletePostButton;
