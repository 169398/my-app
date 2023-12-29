"use client";

import React, { FC, Suspense } from "react";
import CustomCodeRenderer from "@/components/renderers/CustomCodeRenderer";
import CustomImageRenderer from "@/components/renderers/CustomImageRenderer";

// Using React.lazy for dynamic import
const Output = React.lazy(() => import("editorjs-react-renderer"));

interface EditorOutputProps {
  content: any;
}

const renderers = {
  image: CustomImageRenderer,
  code: CustomCodeRenderer,
};

const style = {
  paragraph: {
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
  },
};

const EditorOutput: FC<EditorOutputProps> = ({ content }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Output
        style={style}
        className="text-sm"
        renderers={renderers}
        data={content}
      />
    </Suspense>
  );
};

export default EditorOutput;
