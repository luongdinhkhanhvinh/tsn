"use client";

import Image from "next/image";
import React from "react";
import { FormResearch } from "@/components/home/FormResearch";
import { introduction } from "@/constants/text";
import { HeroStars } from "@/components/home/HeroStars";
import { Separator } from "@/components/ui/separator";
import { Check } from "lucide-react";

export default function HeroSection() {

  return (
    <section className="relative py-10 md:py-16 bg-[url('/images/hero-banner.png')] bg-cover bg-center">
      <HeroStars />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-y-8 md:gap-8 items-center">
          <div className="flex items-center w-full gap-4">
            <div className="w-[30%] hidden md:block">
              <Image src="/images/louis-nguyen.png" alt="MR.Louis Nguyen" width={350} height={500} className="w-full h-auto" />
            </div>
            <div className="w-full flex-1 text-white">
              <h1 className="text-xl lg:text-4xl text-center font-bold mb-6">
                TRA CỨU THẦN SỐ HỌC
                <br />
                KHÁM PHÁ BẢN THÂN CÙNG THẦY <br />{" "}
                <strong className="text-5xl lg:text-6xl">LOUIS NGUYỄN</strong>
              </h1>

              <ul className="grid md:grid-cols-3 gap-3 lg:gap-6 md:mb-8 border border-2 p-5 mx-2 lg:mx-5">
                {introduction.map((text, idx) => (
                  <React.Fragment key={idx}>
                    <li className="flex items-center gap-3">
                      <div className="text-xl border rounded-full p-1">
                        <Check className="text-[#f78da7]" size={15} strokeWidth={4} />
                      </div>
                      <div className="h-full">
                        <span className="text-justify text-sm lg:text-base">
                          {text}
                        </span>
                      </div>
                      {idx < introduction.length - 1 && (
                        <Separator orientation="vertical" className="hidden md:block" />
                      )}
                    </li>
                    {idx < introduction.length - 1 && (
                      <Separator className="block md:hidden" />
                    )}
                  </React.Fragment>
                ))}
              </ul>
            </div>
          </div>
          <FormResearch />
          <div className="w-full flex justify-center md:hidden">
            <Image src="/images/louis-nguyen.png" alt="MR.Louis Nguyen" width={350} height={500} className="w-[50%] h-auto" />
          </div>
          <div className="max-w-5xl mx-auto">
            <p className="text-sm sm:text-base text-white text-justify">
              Những nghiên cứu về Thần số học Pitago của <strong>Thầy Louis Nguyễn</strong> đang
              mang đến một làn sóng tích cực trong đại chúng Việt Nam. Đây là
              công cụ được lập trình tính toán dựa trên nền logic khoa học của
              thế giới. Không chỉ là các phân tích để giúp mỗi người tìm ra
              những tiềm năng thực sự và trả lời được câu hỏi mình là ai trong
              cuộc đời này, những nghiên cứu sâu và rộng khắp các lĩnh vực của
              thầy còn giúp hàng triệu người lựa chọn được con đường đi đúng
              đắn, giúp cho những người làm kinh doanh tìm ra định hướng phù hợp
              trong chiến lược và trong quản trị doanh nghiệp, quan hệ khách
              hàng.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
