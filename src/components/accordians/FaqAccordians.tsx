import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

// TypeScript interface for FAQ item
interface FAQItem {
  question: string;
  answer: string;
}

// Props interface for the accordion component
interface FAQAccordionProps {
  faqData: FAQItem[];
  className?: string;
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({
  faqData,
  className = "",
}) => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className={`w-full max-w-4xl mx-auto space-y-3  ${className}`}>
      {faqData.map((item, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded-lg"
            aria-expanded={openItems.has(index)}
            aria-controls={`faq-content-${index}`}
          >
            <h3 className="text-lg font-semibold text-gray-900 pr-4 leading-relaxed">
              {item.question}
            </h3>
            <div className="flex-shrink-0 ml-2">
              {openItems.has(index) ? (
                <ChevronUp className="w-5 h-5 text-gray-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-600" />
              )}
            </div>
          </button>

          <div
            id={`faq-content-${index}`}
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openItems.has(index)
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-6 pb-4 pt-0">
              <div className="text-gray-700 leading-relaxed">{item.answer}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
