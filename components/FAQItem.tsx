"use client";

import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer?: string;
  defaultOpen?: boolean;
}

export default function FAQItem({
  question,
  answer,
  defaultOpen = false,
}: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="flex flex-col justify-center items-start w-full">
      <div
        className={`flex flex-col w-full border-b border-white/30 pb-4 md:pb-6 transition-all duration-500 ease-in-out ${
          isOpen && answer ? "mb-6 md:mb-12" : "mb-0"
        }`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-row justify-between items-center w-full py-1 text-left hover:opacity-80 transition-opacity group"
        >
          <h3 className="text-lg md:text-3xl font-medium">{question}</h3>
          <span
            className={`text-xl md:text-2xl transition-transform duration-500 ${isOpen ? "rotate-0" : "rotate-0"}`}
          >
            {isOpen ? "−" : "+"}
          </span>
        </button>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen && answer
            ? "max-h-[500px] opacity-100 mb-4"
            : "max-h-0 opacity-0 mb-0"
        }`}
      >
        {answer && (
          <p className="text-lg md:text-3xl text-white/50 leading-normal">
            {answer}
          </p>
        )}
      </div>
    </div>
  );
}
