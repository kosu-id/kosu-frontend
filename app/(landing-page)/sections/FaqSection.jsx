"use client";

import faqList from "../data/faq";
import FaqItem from "../components/FaqItem";
import Judul from "../components/Judul";

export default function FaqSection() {
  return (
    <section className="my-5 md:my-20">
      <Judul>FAQ</Judul>
      <div className="space-y-4">
        {faqList.map((faq) => (
          <FaqItem
            key={faq.value}
            value={faq.value}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </section>
  );
}
