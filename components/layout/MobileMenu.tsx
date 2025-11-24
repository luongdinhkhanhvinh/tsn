'use client'
import {
  Sheet,
  SheetTitle,
  SheetClose,
  SheetHeader,
  SheetContent,
  SheetTrigger,
  SheetDescription,
} from "@/components/ui/sheet";
import { CustomLink } from "@/components/ui/CustomLink";
import { Menu, Plus } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@/contexts/auth-context";
import { PATH } from "@/constants/path";
import { cn } from "@/lib/utils";

export interface IMobileMenuProps {
  className?: string;
}

export default function MobileMenu({ className }: IMobileMenuProps) {
  const { loading, user, signOut } = useAuth();

  return (
    <Sheet>
      <SheetTrigger className={cn(className)}>
        <Menu className="w-8 h-8 text-primary cursor-pointer" />
      </SheetTrigger>
      <SheetContent
        side="right"
        className="bg-[url('/images/bg-mobile-menu.jpg')] bg-cover bg-center px-6 sm:px-10 py-16 border-0"
      >
        <SheetHeader className="sr-only">
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription>Navigation menu</SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-4 px-2 sm:px-4 text-white mt-2">
          <SheetClose asChild>
            <CustomLink href={PATH.ABOUT} className="flex items-center justify-between">
              <p className="font-bold sm:text-lg">Giới thiệu</p>
              <Plus className="w-6 h-6" />
            </CustomLink>
          </SheetClose>
          <Separator />
          <SheetClose asChild>
            <CustomLink href={PATH.RESEARCH} className="flex items-center justify-between">
              <p className="font-bold sm:text-lg">Tra Cứu Thần Số Học</p>
              <Plus className="w-6 h-6" />
            </CustomLink>
          </SheetClose>
          <Separator />
          {loading ? (
            <Skeleton className="h-7 w-full" />
          ) : user ? (
            <>
              <SheetClose asChild>
                <CustomLink href={PATH.ACCOUNT} className="flex items-center justify-between">
                  <p className="font-bold sm:text-lg">Tài khoản</p>
                  <Plus className="w-6 h-6" />
                </CustomLink>
              </SheetClose>
              <Separator />
              <SheetClose asChild onClick={() => signOut()} className="cursor-pointer">
                <div className="flex items-center justify-between">
                  <p className="font-bold sm:text-lg">Đăng xuất</p>
                  <Plus className="w-6 h-6" />
                </div>
              </SheetClose>
            </>
          ) : (
            <SheetClose asChild>
              <CustomLink href={PATH.LOGIN} className="flex items-center justify-between">
                <p className="font-bold sm:text-lg">Đăng nhập</p>
                <Plus className="w-6 h-6" />
              </CustomLink>
            </SheetClose>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
