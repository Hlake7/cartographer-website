"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItemProps {
  question: string;
  answer: string;
  answerHref?: string;
  answerLinkText?: string;
}

export function AccordionItem({ question, answer, answerHref, answerLinkText }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-5 text-left cursor-pointer"
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-gray-500 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-200 ${
          isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-gray-600 leading-relaxed">
            {answer}
            {answerHref && answerLinkText && (
              <>
                {" "}
                <a href={answerHref} className="text-blue font-medium hover:underline">
                  {answerLinkText}
                </a>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
