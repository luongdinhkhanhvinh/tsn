import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Đăng nhập - Tra Cứu Thần Số Học',
  description: 'Đăng nhập vào hệ thống tra cứu thần số học',
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
