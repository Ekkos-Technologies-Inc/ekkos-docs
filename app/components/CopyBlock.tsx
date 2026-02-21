'use client';

import { Check, Copy } from 'lucide-react';
import { useState } from 'react';

interface CopyBlockProps {
  code: string;
  className?: string;
}

export default function CopyBlock({ code, className = '' }: CopyBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = code;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <pre className={`bg-[#0d0d14]/60 backdrop-blur-md clip-md p-4 overflow-x-auto text-sm font-mono text-[#e8e8f0]/90 ${className}`}>
        {code}
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 p-2 bg-[#111118]/60 backdrop-blur-xl clip-sm hover:bg-[#111118]/80 transition-colors"
      >
        {copied ? (
          <Check className="w-4 h-4 text-green-400" />
        ) : (
          <Copy className="w-4 h-4 text-[#7a7a8e]" />
        )}
      </button>
    </div>
  );
}
