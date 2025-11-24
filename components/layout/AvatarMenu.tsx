'use client'

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuGroup,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { LogOut, UserRoundCog } from "lucide-react"
import { CustomLink } from "@/components/ui/CustomLink"
import { useAuth } from "@/contexts/auth-context"
import { PATH } from "@/constants/path"

type AvatarMenuProps = {}

export default function AvatarMenu({}: AvatarMenuProps) {
  const { user, signOut } = useAuth();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="font-bold hover:text-primary transition cursor-pointer">
          Tài khoản
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuLabel>{ user?.user_metadata.full_name }</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <CustomLink href={PATH.ACCOUNT} className="flex items-center gap-2">
              <UserRoundCog size={18} />
              Thông tin tài khoản
            </CustomLink>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => signOut()} className="cursor-pointer">
            <LogOut size={18} />
            Đăng xuất
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
