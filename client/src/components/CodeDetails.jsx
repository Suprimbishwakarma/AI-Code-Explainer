import React, { useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const CodeDetails = ({ details }) => {
  const [copied, isCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(details);
      isCopied(true);
    } catch (error) {
      console.error("failed to copy:", error);
    }
  };
  return (
    <div className="w-full max-w-4xl mt-6 bg-gray-50 p-6 rounded-2xl shadow-lg">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold mb-2">Explanation:</h2>
        <button
          onClick={handleCopy}
          className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-900 transition disabled:opacity-50"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <Markdown remarkPlugins={[remarkGfm]}>{details}</Markdown>
    </div>
  );
};

export default CodeDetails;
