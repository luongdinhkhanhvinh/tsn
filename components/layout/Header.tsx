"use client";
import MobileMenu from "@/components/layout/MobileMenu";
import AvatarMenu from "@/components/layout/AvatarMenu";
import Image from "next/image";
import { CustomLink } from "@/components/ui/CustomLink";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@/contexts/auth-context";
import { PATH } from "@/constants/path";

export default function Header() {
  const { loading, user } = useAuth();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <CustomLink href={PATH.HOME} title="Tra Cứu Thần Số Học" className="shrink-0">
            <Image src="/images/logo-color-min.png" alt="Tra Cứu Thần Số Học" width={148} height={63} className="h-auto max-h-16" />
          </CustomLink>
          <nav className="hidden lg:flex items-center space-x-6">
            <CustomLink href={PATH.ABOUT} className="font-bold hover:text-primary transition">
              Giới thiệu
            </CustomLink>
            <CustomLink href={PATH.RESEARCH} className="font-bold hover:text-primary transition">
              Tra Cứu Thần Số Học
            </CustomLink>
            {loading ? (
              <Skeleton className="h-6 w-20" />
            ) : user ? (
              <AvatarMenu />
            ) : (
              <CustomLink href={PATH.LOGIN} className="font-bold hover:text-primary transition">
                Đăng nhập
              </CustomLink>
            )}
          </nav>

          <MobileMenu className="lg:hidden" />
        </div>
      </div>
    </header>
  );
}
