import { CustomLink } from "@/components/ui/CustomLink";

export const metadata = {
  title: "Giới Thiệu Về Tracuuthansohoc",
  description:
    "Tracuuthansohoc là công ty hàng đầu trong lĩnh vực Thần số học và lĩnh vực huyền học khác. Chúng tôi hỗ trợ luận giải Nhân số học chuyên sâu, chính xác",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#fceeff] py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#061729] mb-4">
              Giới Thiệu Về Tracuuthansohoc
            </h1>
            <p className="text-lg max-w-4xl mx-auto">
              <strong>Tracuuthansohoc.com</strong> (Tra Cứu Thần Số Học) là hoạt
              động trong lĩnh vực chính là <strong>Thần số học</strong> và chia
              sẻ một số nội dung khác về các lĩnh vực:{" "}
              <strong>Cung hoàng đạo</strong>, <strong>DISC</strong>,{" "}
              <strong>MBTI</strong>, được sáng lập bởi{" "}
              <CustomLink
                href="/thay-louis-nguyen"
                className="text-primary hover:underline"
              >
                <strong>Thầy Louis Nguyễn</strong>
              </CustomLink>{" "}
              và đội ngũ chuyên môn.
            </p>
          </div>

          {/* Two Column Section */}
          <div className="grid md:grid-cols-2 gap-0 mb-12">
            <div className="bg-[#37324a] text-white p-8">
              <h2 className="text-2xl font-bold mb-4">
                Tại sao chúng tôi tạo ra trang web này?
              </h2>
              <p className="mb-4">
                Thần số học{" "}
                <span className="underline font-bold">
                  Không Phải Là Bói Toán
                </span>
                ! Đây là một môn <strong>huyền học</strong> với cách tính khoa
                học. Các nhà thần học theo trường phái Py-ta-go đã nói rằng:
                "Mỗi một con số là 1 tần sóng rung tương ứng với số vòng quay
                trong 1 giây".
              </p>
              <p className="mb-4">
                Như vậy, mỗi một con số sẽ có vòng rung riêng, trong đó một cành
                cây, ngọn cỏ, một cơ thể con người, một cảm xúc, một ý nghĩ,…
                đều có những tần số rung nhất định tương ứng với những con số
                nhất định.
              </p>
              <p>
                Tracuuthansohoc.com tự tin nói rằng cuộc sống của chúng ta luôn
                luôn liên quan mật thiết đến với các con số. Chúng tôi tạo ra
                công cụ tính toán để giúp bạn hiểu và làm chủ các con số của
                cuộc đời bạn!
              </p>
            </div>

            <div className="bg-white p-8">
              <h2 className="text-2xl font-bold mb-4">Tầm Nhìn</h2>
              <ul className="list-disc pl-5 mb-6 space-y-2">
                <li>
                  Xây dựng hệ thống Tra cứu thần số học lớn nhất, mang lại nhiều
                  giá trị nhất.
                </li>
                <li>
                  Đơn vị hạnh phúc và phụng sự, góp phần giúp con người sống
                  hạnh phúc hơn.
                </li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">Cam Kết</h2>
              <ul className="list-disc pl-5 mb-6 space-y-2">
                <li>
                  Đem đến cho người dùng công cụ tra cứu và luận giải Thần số
                  học chính xác, chi tiết nhất, mang lại sự an tâm, tin tưởng.
                </li>
                <li>
                  Đem đến cho nhân viên một môi trường làm việc thân thiện, có
                  nhiều cơ hội phát triển.
                </li>
                <li>
                  Đem đến cho quản lý một sân chơi công bằng để thể hiện, đảm
                  bảo cuộc sống sung túc.
                </li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">Mục Tiêu</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Tạo giá trị cho cộng đồng</strong>: Hỗ trợ người dùng
                  tận dụng và phát triển hết tiềm năng của bản thân; thấu hiểu
                  những người xung quanh. Xây dựng một cộng đồng Thần số học
                  không MÊ TÍN
                </li>
                <li>
                  <strong>Phát triển cá nhân</strong>: Tạo ra môi trường bình
                  đẳng cho các thành viên phát huy năng lực cá nhân & có một đời
                  sống đầy đủ, sung túc cả về vật chất lẫn đời sống tinh thần.
                </li>
                <li>
                  <strong>Môi trường làm việc</strong>: Xây dựng môi trường làm
                  việc đoàn kết, thương yêu nhau trên giá trị cốt lõi của tình
                  huynh đệ.
                </li>
              </ul>
            </div>
          </div>

          {/* 5 Principles Section */}
          <div className="text-center mb-8">
            <div className="inline-block mb-4">
              <svg
                className="w-14 h-14 mx-auto text-primary"
                viewBox="0 0 512 512"
                fill="currentColor"
              >
                <path d="M256,490.667C126.6,490.667,21.333,385.4,21.333,256S126.6,21.333,256,21.333,490.667,126.6,490.667,256,385.4,490.667,256,490.667Zm0-448c-117.63,0-213.333,95.7-213.333,213.333S138.37,469.333,256,469.333,469.333,373.63,469.333,256,373.63,42.667,256,42.667Z" />
                <path d="M342.646,394.667a10.6,10.6,0,0,1-4.437-.969L256,356.073,173.792,393.7a10.661,10.661,0,0,1-15.031-10.922l10.38-89.807-61.187-66.56a10.666,10.666,0,0,1,5.745-17.674l88.62-17.88L246.708,112.1a10.665,10.665,0,0,1,18.583,0l44.391,78.758,88.62,17.88a10.666,10.666,0,0,1,5.745,17.674l-61.187,66.56,10.38,89.807a10.661,10.661,0,0,1-10.594,11.891Z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-4">
              5 ĐIỀU CHÚNG TÔI NHẮC NHỞ BẠN
            </h2>
            <p className="text-lg">
              Trước khi làm bất cứ điều gì, chúng tôi luôn tự hỏi mình những câu
              hỏi này để đảm bảo mang đến cho bạn trải nghiệm tốt nhất, tuyệt
              vời nhất.
            </p>
          </div>

          {/* 3 Principles Cards */}
          <div className="grid md:grid-cols-3 gap-0 mb-12">
            <div className="bg-[#af1e8d] text-white p-8">
              <h3 className="text-xl font-bold mb-4">TIN CẬY & TOÀN VẸN</h3>
              <p className="mb-4">
                Là công ty Thần số học lớn nhất Việt Nam, chúng tôi cung cấp cho
                bạn thông tin chính xác, rõ ràng và đáng tin cậy nhất hiện có.
              </p>
              <p>
                Vì vậy, với mỗi bài báo, tài nguyên, video, chúng tôi đặt câu
                hỏi: Thông tin này có giá trị cho cộng đồng của chúng tôi không?
                Nó có đến từ các nguồn đáng tin cậy không? Nó có phù hợp với ý
                định của chúng tôi là hỗ trợ tính toàn vẹn của độc giả không?
              </p>
            </div>

            <div className="bg-[#af1e8d] text-white p-8">
              <h3 className="text-xl font-bold mb-4">TRAO QUYỀN</h3>
              <p className="mb-4">
                Làm thế nào chúng ta có thể hỗ trợ mỗi cá nhân khám phá bản thân
                và giúp họ có được trải nghiệm sâu sắc hơn và có ý thức hơn về
                cuộc sống?
              </p>
              <h3 className="text-xl font-bold mb-4">LÃNH ĐẠO & ĐỔI MỚI</h3>
              <p>
                Làm cách nào chúng ta có thể sử dụng công nghệ để cải thiện trải
                nghiệm của khách truy cập trên tracuuthansohoc.com? Làm thế nào
                chúng ta có thể cải thiện khả năng lãnh đạo của chính mình để hỗ
                trợ những người khác trong quá trình phát triển cá nhân, hiểu
                biết bản thân và giáo dục Thần số học?
              </p>
            </div>

            <div className="bg-[#af1e8d] text-white p-8">
              <h3 className="text-xl font-bold mb-4">GIÁO DỤC & CHỦ ĐỘNG</h3>
              <p className="mb-4">
                Làm thế nào chúng tôi có thể mở rộng cơ hội của độc giả để nâng
                cao trình độ học vấn về Thần số học và Trí tuệ của họ? Chúng ta
                cần giáo dục gì thêm để cung cấp thông tin một cách chủ động?
              </p>
              <h3 className="text-xl font-bold mb-4">CỘNG ĐỒNG</h3>
              <p>
                Chúng ta có thể hỗ trợ cộng đồng Thần số học bằng những cách nào
                và mang lại giá trị lớn hơn cho các mối quan hệ của chúng ta
                trong cộng đồng?
              </p>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Tracuuthansohoc trên mạng xã hội
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <ul className="space-y-2">
                <li>
                  <CustomLink
                    href="https://www.facebook.com/tracuuthansohoc"
                    className="text-primary hover:underline"
                    target="_blank"
                  >
                    Tracuuthansohoc trên Facebook
                  </CustomLink>
                </li>
                <li>
                  <CustomLink
                    href="https://www.youtube.com/channel/UCuTD16Y8UfPDKGr0OPgcmAA"
                    className="text-primary hover:underline"
                    target="_blank"
                  >
                    Tracuuthansohoc trên Youtube
                  </CustomLink>
                </li>
                <li>
                  <CustomLink
                    href="https://www.tiktok.com/@tracuuthansohoc"
                    className="text-primary hover:underline"
                    target="_blank"
                  >
                    Tracuuthansohoc trên Tiktok
                  </CustomLink>
                </li>
                <li>
                  <CustomLink
                    href="https://x.com/thansohocPitago"
                    className="text-primary hover:underline"
                    target="_blank"
                  >
                    Tracuuthansohoc trên X
                  </CustomLink>
                </li>
              </ul>

              <ul className="space-y-2">
                <li>
                  <span className="text-gray-600">
                    Tracuuthansohoc trên Linkedin
                  </span>
                </li>
                <li>
                  <CustomLink
                    href="https://about.me/tracuuthansohoc"
                    className="text-primary hover:underline"
                    target="_blank"
                  >
                    Tracuuthansohoc trên About me
                  </CustomLink>
                </li>
                <li>
                  <CustomLink
                    href="https://www.instagram.com/tracuuthansohoconline/"
                    className="text-primary hover:underline"
                    target="_blank"
                  >
                    Tracuuthansohoc trên Instagram
                  </CustomLink>
                </li>
                <li>
                  <CustomLink
                    href="https://www.threads.com/@tracuuthansohoconline"
                    className="text-primary hover:underline"
                    target="_blank"
                  >
                    Tracuuthansohoc trên Threads
                  </CustomLink>
                </li>
              </ul>

              <ul className="space-y-2">
                <li>
                  <span className="text-gray-600">
                    Tracuuthansohoc trên Reddit
                  </span>
                </li>
                <li>
                  <CustomLink
                    href="https://tracuuthansohoc.tumblr.com/"
                    className="text-primary hover:underline"
                    target="_blank"
                  >
                    Tracuuthansohoc trên Tumbr
                  </CustomLink>
                </li>
                <li>
                  <CustomLink
                    href="https://www.behance.net/tracuuthansohoc"
                    className="text-primary hover:underline"
                    target="_blank"
                  >
                    Tracuuthansohoc trên Behance
                  </CustomLink>
                </li>
                <li>
                  <CustomLink
                    href="https://myspace.com/tracuuthansohocofficial"
                    className="text-primary hover:underline"
                    target="_blank"
                  >
                    Tracuuthansohoc trên Myspace
                  </CustomLink>
                </li>
              </ul>
            </div>

            <p className="text-center text-gray-700">
              Để được tư vấn thêm vui lòng{" "}
              <CustomLink
                href="/lien-he"
                className="text-primary hover:underline font-bold"
              >
                liên hệ Tracuuthansohoc
              </CustomLink>{" "}
              hoặc email:{" "}
              <a
                href="mailto:tracuuthansohoc@gmail.com"
                className="text-primary hover:underline font-bold"
              >
                tracuuthansohoc@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
