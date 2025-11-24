import Image from 'next/image';
import { CustomLink } from '@/components/ui/CustomLink';
import { PATH } from '@/constants/path';

const footerLinks = {
  info: [
    { name: 'Chính sách bảo mật', href: '/chinh-sach-bao-mat' },
    { name: 'Điều khoản sử dụng', href: '/dieu-khoan-su-dung' },
    { name: 'Liên hệ', href: '/lien-he' },
    { name: 'Về chúng tôi', href: '/ve-chung-toi' },
  ],
  social: [
    { name: 'Instagram', href: 'https://www.instagram.com/tracuuthansohoconline/', icon: '📷' },
    { name: 'TikTok', href: 'https://www.tiktok.com/@tracuuthansohoc', icon: '🎵' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#15143e] text-white">
      <div className="py-14">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <CustomLink href={PATH.HOME} className="block mb-6 max-w-xs">
                <Image
                  src="/images/logo-color-min.png"
                  alt="Tra cứu thần số học"
                  width={300}
                  height={100}
                  className="w-full h-auto"
                />
              </CustomLink>
              <div className="flex gap-3 mt-6">
                {footerLinks.social.map((item) => (
                  <CustomLink
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border-2 border-white/50 flex items-center justify-center hover:bg-white hover:text-primary transition"
                    aria-label={item.name}
                  >
                    {item.icon}
                  </CustomLink>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Thông tin chung</h3>
              <ul className="space-y-2 text-sm">
                {footerLinks.info.map((item) => (
                  <li key={item.name}>
                    <CustomLink href={item.href} className="hover:text-primary transition">
                      {item.name}
                    </CustomLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Liên hệ với chúng tôi</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span>📞</span>
                  <span>
                    Điện thoại:{' '}
                    <CustomLink href="tel:0962604394" className="hover:text-primary transition">
                      0962.604.394
                    </CustomLink>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span>✉️</span>
                  <span>
                    Email:{' '}
                    <CustomLink href="mailto:tracuuthansohoc@gmail.com" className="hover:text-primary transition">
                      tracuuthansohoc@gmail.com
                    </CustomLink>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#333] py-4 text-center text-xs text-white/80">
        <div className="container mx-auto px-4">
          <p className="mb-2">
            Mọi thông tin và sản phẩm được cung cấp trên website này mang tính giải trí, tham khảo và hỗ trợ định hướng phát triển bản thân.
          </p>
          <p>© 2025 Tracuuthansohoc.com | All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
