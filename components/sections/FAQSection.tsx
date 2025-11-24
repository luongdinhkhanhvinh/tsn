import FAQItem from '@/components/home/FAQItem';
import { faqItems } from '@/lib/constants/faq';

export default function FAQSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#061729]">
          ĐÔI LỜI CHIA SẺ VỀ THẦN SỐ HỌC MIỄN PHÍ
        </h2>
        <div className="max-w-4xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
