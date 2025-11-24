'use client';

import Image from 'next/image';
import { CustomLink } from '@/components/ui/CustomLink';
import { useState } from 'react';
import { PATH } from '@/constants/path';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Reset password for:', email);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-[url('/images/bg-auth.jpg')] bg-cover bg-center">

        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-md px-6">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Image src="/images/logo-white.png" alt="Logo" width={45} height={45} className="h-7 w-auto" />
            <h1 className="text-white text-xl font-semibold">
              Tra cứu thần số học
            </h1>
          </div>
          <h2 className="text-white text-lg font-bold">Quên mật khẩu</h2>
          <p className="text-white/60 text-sm mt-2">
            Nhập email của bạn để nhận link đặt lại mật khẩu
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Email hoặc số điện thoại"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full py-3 px-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-full transition shadow-lg shadow-purple-500/30"
            >
              Gửi link đặt lại mật khẩu
            </button>

            <div className="text-center text-sm">
              <CustomLink href={PATH.LOGIN} className="text-white/80 hover:text-white transition">
                ← Quay lại đăng nhập
              </CustomLink>
            </div>
          </form>
        ) : (
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 text-center">
            <div className="text-4xl mb-4">✉️</div>
            <h3 className="text-white text-lg font-semibold mb-2">Kiểm tra email của bạn</h3>
            <p className="text-white/80 text-sm mb-6">
              Chúng tôi đã gửi link đặt lại mật khẩu đến <strong>{email}</strong>
            </p>
            <CustomLink
              href={PATH.LOGIN}
              className="inline-block py-2 px-6 bg-white/20 hover:bg-white/30 text-white rounded-full transition"
            >
              Quay lại đăng nhập
            </CustomLink>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }

        .animate-twinkle {
          animation: twinkle linear infinite;
        }
      `}</style>
    </div>
  );
}
