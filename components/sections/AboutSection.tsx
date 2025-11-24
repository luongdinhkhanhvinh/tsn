import { aboutContent } from "@/constants/text";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="relative flex w-full flex-row items-center py-[30px] bg-black pb-[170px] sm:pb-[520px]">
      <div className="fill overflow-hidden about-section-bg">
        <Image
          decoding="async"
          width="1920"
          height="1200"
          src="/images/about-section/bg_banner_1.png"
          className="absolute top-0 left-0 w-full h-full object-cover object-center"
          alt="bg_banner_1"
          title="bg_banner_1"
        />
      </div>
      <div className="relative w-full z-[1]">
        <div className="flex flex-wrap w-full mx-auto my-0 container">
          <div className="relative w-full m-0 px-[15px] pb-0">
            <div className="flex-auto relative w-full mx-auto bg-center bg-no-repeat bg-cover">
              <p className="text-center mt-0 text-5xl leading-[1.6] text-white/10 sm:text-[85px] lg:text-[120px] xl:text-[136px] lg:-mt-[40px]">
                <strong>LOUIS NGUYỄN</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap w-full mx-auto my-0 container justify-center z-[21] relative">
          <div className="relative w-full m-0 px-[15px] pb-0">
            <div className="flex-auto relative w-full mx-auto bg-center bg-no-repeat bg-cover border-[3px] border-[rgb(234,87,147)]">
              <div className="flex flex-wrap w-full items-center">
                <div className="relative w-full m-0 px-[15px] mb-24 lg:mb-0 md:w-full sm:w-full lg:w-[56.33%]">
                  <div className="flex-auto pl-6 pr-4 relative w-full mx-auto bg-center bg-no-repeat bg-cover">
                    <div className="text text-start text-base">
                      <h2 className="mt-[15px]">
                        <span className="text-[#af3689] leading-[1.6] text-lg lg:mt-5 sm:text-[27px] font-bold">
                          NHÀ NGHIÊN CỨU THẦN SỐ HỌC PITAGO{" "}
                        </span>
                      </h2>
                      <h3>
                        <strong className="text-[53px] leading-[1.6] sm:text-[40px] text-white font-bold">THẦY</strong>{" "}
                        <strong className="text-[53px] leading-[1.6] sm:text-[40px] text-white font-bold">LOUIS NGUYỄN</strong>
                      </h3>
                      <ul className="pt-5 text-white text-start">
                        {aboutContent.map((item, index) => (
                          <li key={index} className="list-none ml-0 leading-[1.6] relative pl-[30px] mb-[15px] about-list-item">
                            <strong>{item}</strong>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="relative w-full m-0 px-[15px] pb-0 md:w-full sm:w-full lg:w-[43.67%]">
                  <div className="-mt-24 flex-auto relative w-full mx-auto bg-center bg-no-repeat bg-cover">
                    <div className="relative w-full z-[6] max-w-[300px] sm:max-w-[350px] md:max-w-[450px] mx-auto">
                      <Image
                        decoding="async"
                        width="800"
                        height="1092"
                        src="/images/about-section/bg_banner_0.png"
                        className="w-full h-auto"
                        alt="TRA CỨU THẦN SỐ HỌC - KHÁM PHÁ BẢN THÂN CÙNG THẦY LOUIS NGUYỄN 37"
                      />
                    </div>

                    <div className="absolute will-change-transform will-change-opacity w-[300px] h-[300px] z-[1] bottom-10 -translate-x-1/2 left-1/2 right-auto md:w-[430px] md:h-[430px]">
                      <div className="w-full h-full overflow-hidden pointer-events-none animate-swing">
                        <div 
                          className="bg-no-repeat bg-left-top bg-cover bg-scroll absolute m-auto w-full h-full pointer-events-none"
                          style={{ backgroundImage: 'url("/images/about-section/bg_banner_2.png")' }}
                        />
                      </div>
                    </div>

                    <div className="absolute will-change-transform will-change-opacity w-full h-auto z-[1] bottom-10 -translate-x-1/2 left-1/2 overflow-hidden">
                        <Image src="/images/about-section/bg_banner_3.png" alt="bg_banner_3" width={400} height={300} className="animate-pulse-custom w-full h-auto"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-[-100px] sm:bottom-[-230px] h-[302px] w-full z-[1]">
          <div className="absolute w-full h-full md:bottom-0 sm:bottom-0">
            <div 
              className="bg-no-repeat bg-left-top bg-cover bg-scroll absolute m-auto w-full h-full pointer-events-none"
              style={{ backgroundImage: 'url("/images/about-section/bg_banner_9.png")' }}
            ></div>
          </div>
        </div>

        <div className="absolute w-full h-[170px] sm:h-[595px] z-[2] bottom-[-170px] sm:bottom-[-520px]">
          <div className="absolute w-full h-full">
            <div 
              className="bg-no-repeat bg-left-top bg-cover bg-scroll absolute m-auto w-full h-full pointer-events-none"
              style={{ backgroundImage: 'url("/images/about-section/bg_banner_6.png")' }}
            ></div>
          </div>
        </div>

        <div className="absolute w-[150px] h-[100px] sm:w-[452px] sm:h-[278px] right-10 z-[4] bottom-[-100px] sm:bottom-[-410px]">
          <div className="absolute w-full h-full animate-shake-medium">
            <div
              className="bg-no-repeat bg-left-top bg-cover bg-scroll absolute m-auto w-full h-full pointer-events-none"
              style={{ backgroundImage: 'url("/images/about-section/bg_banner_7.png")' }}
            ></div>
          </div>
        </div>

        <div className="absolute w-[150px] h-[100px] sm:w-[370px] sm:h-[163px] z-[4] bottom-[-100px] sm:bottom-[-310px]">
          <div className="absolute w-full h-full animate-shake-slow">
            <div
              className="bg-no-repeat bg-left-top bg-cover bg-scroll absolute m-auto w-full h-full pointer-events-none"
              style={{ backgroundImage: 'url("/images/about-section/bg_banner_8.png")' }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
