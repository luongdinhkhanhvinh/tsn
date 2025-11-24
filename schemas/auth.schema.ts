import z from "zod";

export const loginSchema = z.object({
  email: z.string().min(1, "Vui lòng nhập email").regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Email không hợp lệ"),
  password: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
});

export const registerSchema = z
  .object({
    fullName: z.string().min(2, "Họ và tên phải có ít nhất 2 ký tự"),
    email: z
      .string()
      .min(1, "Vui lòng nhập email")
      .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Email không hợp lệ"),
    password: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
    confirmPassword: z.string().min(1, "Vui lòng xác nhận mật khẩu"),
    agreeTerms: z.boolean().refine((val) => val === true, {
      message: "Bạn phải đồng ý với điều khoản sử dụng",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Mật khẩu xác nhận không khớp",
    path: ["confirmPassword"],
  });

export interface ILoginSchema extends z.infer<typeof loginSchema> {}
export interface IRegisterSchema extends z.infer<typeof registerSchema> {}
