import FormRegister from "@/components/auth/FormRegister";
import Image from "next/image";

export default function RegisterPage() {
  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center py-12">
      <div className="absolute inset-0 bg-[url('/images/bg-auth.jpg')] bg-cover bg-center" />
      <div className="relative z-10 w-full max-w-md px-6">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Image src="/images/logo-white.png" alt="Logo" width={45} height={45} className="h-7 w-auto" />
            <h1 className="text-white text-xl font-semibold">
              Tra cứu thần số học
            </h1>
          </div>
          <h2 className="text-white text-lg">Đăng ký tài khoản</h2>
        </div>

        {/* Register Form */}
        <FormRegister />
      </div>
    </div>
  );
}
