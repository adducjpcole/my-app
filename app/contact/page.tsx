'use client';
import { Mail, Github } from 'lucide-react';
import { RefObject, useEffect, useRef, useState } from 'react';

export default function Contact() {
  const divRef = useRef(null) as unknown as RefObject<HTMLDivElement>;
  useEffect(() => {
    divRef.current.classList.remove('opacity-0', '-translate-y-32');
    divRef.current.classList.add('opacity-100');
  });

  const [copied, setCopied] = useState(false);
  const copyEmail = () => {
    navigator.clipboard.writeText('cjpcole@addu.edu.ph');
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div
      ref={divRef}
      className="flex flex-1 flex-col items-center justify-center opacity-0 -translate-y-32 duration-1000 -mt-18"
    >
      <h1 className="text-4xl font-bold">get in touch</h1>
      <p className="text-center text-lg text-zinc-400 max-w-xl my-4">
        I&apos;m always open to questions, collaborations, or internship
        opportunities. Reach me via email or check out my GitHub.
      </p>

      <div className="flex space-x-8 items-center">
        <button
          onClick={copyEmail}
          className="flex items-center space-x-2 bg-zinc-800 px-4 py-2 rounded-lg hover:bg-zinc-700 transition-colors"
        >
          <Mail className="w-6 h-6" />

          <span className="min-w-40">
            {copied ? 'Copied to clipboard!' : 'cjpcole@addu.edu.ph'}
          </span>
        </button>

        <a
          target="_blank"
          href="https://github.com/adducjpcole"
          className={`hover:text-zinc-200 transition-colors`}
        >
          <Github />
        </a>
      </div>
    </div>
  );
}
