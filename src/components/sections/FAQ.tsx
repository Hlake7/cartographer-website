import { AccordionItem } from "@/components/ui/Accordion";
import { FAQ_ITEMS } from "@/lib/constants";

export default function FAQ() {
  return (
    <section id="faq" className="bg-gray-50 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <h2 className="font-serif text-4xl text-navy md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to know about Cartographer.
          </p>
        </div>

        <div className="mt-12">
          {FAQ_ITEMS.map((item) => (
            <AccordionItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              answerHref={item.answerHref}
              answerLinkText={item.answerLinkText}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
