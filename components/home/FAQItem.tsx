import type { FAQItem as FAQItemType } from '@/lib/types';

export default function FAQItem({ question, answer }: FAQItemType) {
  return (
    <details className="bg-linear-to-r from-[#092c49] to-[#af3688] text-white rounded-lg overflow-hidden">
      <summary className="px-6 py-4 cursor-pointer font-bold text-lg hover:bg-black/10 transition">
        {question}
      </summary>
      <div className="px-6 py-4 bg-white text-black border-t-2 border-[#092c49]">
        <p className="text-base leading-relaxed">{answer}</p>
      </div>
    </details>
  );
}
