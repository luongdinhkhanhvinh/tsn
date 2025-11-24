"use client";

import { registerSchema, IRegisterSchema } from "@/schemas/auth.schema";
import { Field, FieldError } from "@/components/ui/field";
import { PasswordInput } from "@/components/auth/PasswordInput";
import { useTransition } from "react";
import { CustomLink } from "@/components/ui/CustomLink";
import { useRouter } from "next/navigation";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from "@tanstack/react-form";
import { useAuth } from "@/contexts/auth-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { PATH } from "@/constants/path";
import { cn } from "@/lib/utils";

type FormRegisterProps = {
  className?: string;
};

export default function FormRegister({ className }: FormRegisterProps) {
  const { signUp } = useAuth();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreeTerms: false,
    } as IRegisterSchema,
    validators: {
      onSubmit: registerSchema,
    },
    onSubmit: async ({ value }) => {
      startTransition(async () => {
        const { user, error } = await signUp(value);
        if (error) {
          toast.error("Đăng ký thất bại:", {
            description: error,
            position: "top-right",
          });
          return;
        } else {
          toast.success("Đăng ký thành công!", {
            position: "top-right",
          });
          setTimeout(() => router.push(PATH.LOGIN), 1000);
        }
      });
    },
  });

  return (
    <form
      id="register-form"
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
      className={cn("space-y-4", className)}
    >
      {/* Full Name Input */}
      <form.Field
        name="fullName"
        children={(field) => {
          const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
          return(
          <Field data-invalid={isInvalid}>
            <Input
              type="text"
              placeholder="Họ và tên"
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              className="w-full py-3 px-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition"
            />
            {isInvalid && (
              <FieldError errors={field.state.meta.errors} />
            )}
          </Field>
        )}}
      />

      {/* Email Input */}
      <form.Field name="email" children={(field) => {
        const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
        return(
          <Field data-invalid={isInvalid}>
            <Input
              type="text"
              placeholder="Email"
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              className="w-full py-3 px-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition"
            />
            {isInvalid && (
              <FieldError errors={field.state.meta.errors} />
            )}
          </Field>
        )}}
      />

      {/* Password Input */}
      <form.Field name="password" children={(field) => {
        const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
        return( 
          <Field data-invalid={isInvalid}>
            <PasswordInput
              placeholder="Mật khẩu"
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              className="w-full py-3 px-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition"
            />
            {isInvalid && (
              <FieldError errors={field.state.meta.errors} />
            )}
          </Field>
        )}}
      />

      {/* Confirm Password Input */}
      <form.Field name="confirmPassword" children={(field) => { 
        const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
        return(
          <Field data-invalid={isInvalid}>
            <PasswordInput
              placeholder="Xác nhận mật khẩu"
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              className="w-full py-3 px-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition"
            />
            {isInvalid && (
              <FieldError errors={field.state.meta.errors} />
            )}
          </Field>
        )}}
      />

      {/* Terms Agreement */}
      <form.Field name="agreeTerms" children={(field) => {
        const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
        return(
          <Field>
            <label className="flex items-start gap-2 text-white/80 cursor-pointer text-sm">
              <Checkbox
                id={field.name}
                checked={field.state.value}
                onCheckedChange={(checked) => {
                  const isChecked = !!checked;
                  field.handleChange(isChecked);
                }}
              />
              <span>
                Tôi đồng ý với{" "}
                <CustomLink href={PATH.TERMS_OF_USE} className="text-purple-300 hover:text-purple-200">
                  Điều khoản sử dụng
                </CustomLink>{" "}
                và{" "}
                <CustomLink href={PATH.PRIVACY_POLICY} className="text-purple-300 hover:text-purple-200">
                  Chính sách bảo mật
                </CustomLink>
              </span>
            </label>
            {isInvalid && ( 
              <FieldError errors={field.state.meta.errors} />
            )}
          </Field>
        )}}
      />

      {/* Submit Button */}
      <Button type="submit" form="register-form" loading={isPending} className="w-full py-3 px-6 bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-full transition shadow-lg shadow-purple-500/30">
        Đăng ký
      </Button>

      {/* Login Link */}
      <div className="text-center text-sm">
        <span className="text-white/60">Đã có tài khoản? </span>
        <CustomLink
          href={PATH.LOGIN}
          className="text-white hover:text-purple-300 transition font-medium"
        >
          Đăng nhập ngay
        </CustomLink>
      </div>
    </form>
  );
}
