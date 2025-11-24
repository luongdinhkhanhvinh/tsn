import type { Metadata } from "next";
import ConditionalLayout from "@/components/layout/ConditionalLayout";
import Providers from "@/components/providers/provider";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Tra Cứu Thần Số Học Louis Nguyễn - Xem Thần Số Học Số 1 Việt Nam",
  description: "Công cụ tra cứu thần số học online miễn phí được thầy Louis Nguyễn nghiên cứu sáng lập. Nhập tên, ngày sinh của bạn để khám phá con người và năng lực tiềm ẩn.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body suppressHydrationWarning className="antialiased">
        <Providers>
          <ConditionalLayout>{children}</ConditionalLayout>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
