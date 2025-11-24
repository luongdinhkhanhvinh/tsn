import type { Service } from '@/lib/types';
import { CustomLink } from '@/components/ui/CustomLink';

export default function ServiceCard({ title, features, link }: Service) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
      <div className="p-6">
        <div className="w-24 h-32 bg-linear-to-br from-purple-500/20 to-pink-500/20 rounded mb-4 mx-auto" />
        <h3 className="text-xl font-bold text-primary mb-4">{title}</h3>
        <ul className="space-y-2 mb-6 text-sm text-[#061729]">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-primary">●</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <CustomLink
          href={link}
          className="inline-block bg-primary hover:bg-[#8d2b6e] text-white font-bold py-2 px-6 rounded-full transition text-sm"
        >
          Tìm hiểu thêm
        </CustomLink>
      </div>
    </div>
  );
}
