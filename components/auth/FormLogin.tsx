"use client";

import { loginSchema, ILoginSchema } from "@/schemas/auth.schema";
import { Field, FieldError } from "@/components/ui/field";
import { PasswordInput } from "@/components/auth/PasswordInput";
import { useTransition } from "react";
import { CustomLink } from "@/components/ui/CustomLink";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/auth-context";
import { useForm } from "@tanstack/react-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { PATH } from "@/constants/path";
import { cn } from "@/lib/utils";

type FormLoginProps = {
  className?: string;
};

export default function FormLogin({ className }: FormLoginProps) {
  const { signIn } = useAuth();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    } as ILoginSchema,
    validators: {
      onSubmit: loginSchema,
    },
    onSubmit: async ({ value }) => {
      startTransition(async() => {
        const { user, error } = await signIn(value);
        if (error) {
          toast.error("Đăng nhập thất bại:", {
            description: error,
            position: "top-right",
          });
          return;
        } else {
          toast.success("Đăng nhập thành công!", {
            position: "top-right",
          });
          setTimeout(() => {
            router.push(PATH.HOME)
          }, 1000);
        }
      });
    },
  });

  return (
    <form
      id="login-form"
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
      className={cn("space-y-6", className)}
    >
      {/* Identifier Input */}
      <form.Field 
        name="email" 
        children={(field) => {
          const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
          return(
            <Field data-invalid={isInvalid}>
              <Input
                type="text"
                placeholder="Địa chỉ email"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                className="w-full h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition"
              />
              {isInvalid && (
                <FieldError errors={field.state.meta.errors} />
              )}
            </Field>
        )}}
      />

      {/* Password Input */}
      <form.Field
        name="password"
        children={(field) => {
          const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
          return(
            <Field data-invalid={isInvalid}>
              <PasswordInput
                placeholder="Mật khẩu"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                className="w-full h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition"
              />
              {isInvalid && (
                <FieldError errors={field.state.meta.errors} />
              )}
            </Field>
        )}} 
      />

      {/* Forgot Password */}
      <div className="flex items-center justify-end text-sm">
        <CustomLink href={PATH.FORGOT_PASSWORD} className="text-white/80 hover:text-white text-nowrap transition">
          Quên mật khẩu?
        </CustomLink>
      </div>

      <Button type="submit" form="login-form" loading={isPending} className="w-full py-3 px-6 bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-full transition shadow-lg shadow-purple-500/30">
        Đăng nhập
      </Button>

      <div className="text-center text-sm">
        <span className="text-white/60">Bạn chưa có tài khoản? </span>
        <CustomLink
          href={PATH.REGISTER}
          className="text-white hover:text-purple-300 transition font-medium"
        >
          Đăng ký ngay
        </CustomLink>
      </div>
    </form>
  );
}
