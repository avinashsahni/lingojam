"use client";

import { useState, useCallback } from "react";
import { Translator } from "@/lib/types";
import { translate } from "@/lib/translate";

export default function TranslatorBox({ translator }: { translator: Translator }) {
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState(false);

  const output = translate(input, translator);

  const handleCopy = useCallback(async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [output]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Input */}
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-1">Your Text</label>
        <textarea
          className="w-full h-48 p-3 border border-gray-200 rounded-xl resize-none
                     focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-800
                     placeholder:text-gray-400 text-base"
          placeholder="Type something here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <span className="text-xs text-gray-400 mt-1 text-right">
          {input.length} characters
        </span>
      </div>

      {/* Output */}
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-1">
          {translator.title} Output
        </label>
        <div
          className="w-full h-48 p-3 border border-gray-200 rounded-xl bg-gray-50
                     text-gray-800 text-base overflow-y-auto whitespace-pre-wrap break-words"
        >
          {output || (
            <span className="text-gray-400">Translation will appear here...</span>
          )}
        </div>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          disabled={!output}
          className="mt-2 w-full py-2 rounded-lg text-sm font-medium transition-all
                     bg-indigo-600 text-white hover:bg-indigo-700
                     disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {copied ? "✅ Copied!" : "Copy to Clipboard"}
        </button>
      </div>
    </div>
  );
}