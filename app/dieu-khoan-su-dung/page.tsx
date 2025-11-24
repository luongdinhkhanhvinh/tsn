import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Điều khoản sử dụng - Tra cứu thần số học',
  description:
    'Điều khoản dịch vụ quy định các điều kiện ràng buộc về mặt pháp lý giữa bạn và Tra Cứu Thần Số Học',
  openGraph: {
    title: 'Điều khoản sử dụng - Tra cứu thần số học',
    description:
      'Điều khoản dịch vụ quy định các điều kiện ràng buộc về mặt pháp lý giữa bạn và Tra Cứu Thần Số Học',
    url: 'https://tracuuthansohoc.com/dieu-khoan-su-dung/',
  },
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-[#f8e8f3] grow">
      {/* Breadcrumb */}
      <div className="bg-[#f0d4e8] py-3">
        <div className="container mx-auto px-4">
          <nav aria-label="breadcrumbs" className="text-sm">
            <a href="/" className="text-[#af3689] hover:underline">
              Trang chủ
            </a>
            <span className="mx-2 text-gray-500">»</span>
            <span className="text-gray-700">Điều khoản sử dụng</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          {/* Content */}
          <div className="max-w-4xl mx-auto bg-[#fef5fb] rounded-lg p-6 md:p-10">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-[#061729] mb-6 text-center uppercase">
              Điều Khoản Sử Dụng
            </h1>

            <div className="prose prose-base max-w-none text-gray-700">
              <p className="leading-relaxed mb-4 text-lg font-semibold">
                Chào mừng bạn đến với Tracuuthansohoc.com!
              </p>

              <p className="leading-relaxed mb-4">
                Vui lòng đọc kỹ Điều khoản dịch vụ ("Điều khoản") này trước khi sử dụng website của
                chúng tôi tại{' '}
                <a href="https://tracuuthansohoc.com/" className="text-[#af3689] hover:underline">
                  https://tracuuthansohoc.com/
                </a>
                . Điều khoản này quy định các điều kiện ràng buộc về mặt pháp lý giữa bạn và Tra Cứu
                Thần Số Học, liên quan đến việc bạn truy cập và sử dụng website và dịch vụ của chúng
                tôi.
              </p>

              <p className="leading-relaxed mb-6">
                Bằng việc sử dụng công cụ tra cứu, bạn xác nhận rằng đã đọc, hiểu và đồng ý bị ràng
                buộc bởi các Điều khoản này. Nếu bạn không đồng ý với bất kỳ nội dung nào dưới đây,
                vui lòng không tiếp tục sử dụng phần mềm tra cứu.
              </p>

              {/* Section 1 */}
              <h2 className="text-xl font-bold text-[#061729] mt-8 mb-3">1. Quyền sử dụng</h2>
              <p className="leading-relaxed mb-6">
                Chúng tôi cấp cho bạn một quyền truy cập có giới hạn, không độc quyền và không thể
                chuyển nhượng để sử dụng công cụ tra cứu vì mục đích cá nhân, phi thương mại. Mọi
                hình thức sao chép, tái sử dụng, tích hợp vào hệ thống khác hoặc khai thác dữ liệu từ
                phần mềm đều bị nghiêm cấm nếu không có sự đồng ý bằng văn bản từ chúng tôi.
              </p>

              {/* Section 2 */}
              <h2 className="text-xl font-bold text-[#061729] mt-8 mb-3">
                2. Quyền sở hữu trí tuệ
              </h2>
              <p className="leading-relaxed mb-6">
                Toàn bộ nội dung, thuật toán, dữ liệu, thiết kế giao diện, kết quả tra cứu, mã nguồn
                và mọi thành phần kỹ thuật khác của phần mềm là tài sản trí tuệ của Công ty cổ phần
                công nghệ MystechX hoặc các đối tác được ủy quyền và được pháp luật bảo vệ. Việc bạn
                sử dụng phần mềm không đồng nghĩa với việc được cấp bất kỳ quyền sở hữu nào đối với
                các tài sản này.
              </p>

              {/* Section 3 */}
              <h2 className="text-xl font-bold text-[#061729] mt-8 mb-3">
                3. Quy tắc ứng xử của người dùng
              </h2>
              <p className="leading-relaxed mb-3">
                Khi truy cập sử dụng các phần mềm tra cứu, bạn đồng ý không:
              </p>
              <ul className="list-none space-y-2 mb-6 ml-4">
                <li className="leading-relaxed">• Vi phạm bất kỳ luật hoặc quy định nào.</li>
                <li className="leading-relaxed">
                  • Xâm phạm quyền riêng tư, quyền sở hữu trí tuệ hoặc bất kỳ quyền nào khác của
                  người khác.
                </li>
                <li className="leading-relaxed">
                  • Đăng tải, truyền bá hoặc phân phối bất kỳ nội dung bất hợp pháp, gây hại, đe dọa,
                  lạm dụng, quấy rối, phỉ báng, tục tĩu, thù hận, phân biệt đối xử hoặc gây khó chịu
                  nào.
                </li>
                <li className="leading-relaxed">
                  • Mạo danh bất kỳ cá nhân hoặc tổ chức nào.
                </li>
                <li className="leading-relaxed">
                  • Giả mạo tiêu đề hoặc thao túng các thông tin nhận dạng khác để che giấu nguồn gốc
                  của bất kỳ nội dung nào được truyền tải thông qua website.
                </li>
                <li className="leading-relaxed">
                  • Can thiệp hoặc gián đoạn website hoặc các máy chủ hoặc mạng được kết nối với
                  website.
                </li>
                <li className="leading-relaxed">
                  • Cung cấp thông tin giả mạo hoặc sử dụng công cụ để phục vụ cho mục đích lừa đảo,
                  mạo danh, xuyên tạc kết quả.
                </li>
                <li className="leading-relaxed">
                  • Thu thập hoặc lưu trữ thông tin cá nhân của người dùng khác mà không có sự đồng ý
                  của họ.
                </li>
              </ul>

              {/* Section 4 */}
              <h2 className="text-xl font-bold text-[#061729] mt-8 mb-3">
                4. Chính sách thanh toán
              </h2>
              <p className="leading-relaxed mb-6">
                Bạn xem thêm tại:{' '}
                <a
                  href="https://xem.tracuuthansohoc.com/p_chinh-sach-thanh-toan"
                  className="text-[#af3689] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://xem.tracuuthansohoc.com/p_chinh-sach-thanh-toan
                </a>
              </p>

              {/* Section 5 */}
              <h2 className="text-xl font-bold text-[#061729] mt-8 mb-3">
                5. Chính sách giao nhận
              </h2>
              <p className="leading-relaxed mb-6">
                Bạn xem thêm tại:{' '}
                <a
                  href="https://xem.tracuuthansohoc.com/p_chinh-sach-giao-nhan"
                  className="text-[#af3689] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://xem.tracuuthansohoc.com/p_chinh-sach-giao-nhan
                </a>
              </p>

              {/* Section 6 */}
              <h2 className="text-xl font-bold text-[#061729] mt-8 mb-3">
                6. Chính sách hoàn tiền
              </h2>
              <p className="leading-relaxed mb-6">
                Bạn xem thêm tại:{' '}
                <a
                  href="https://xem.tracuuthansohoc.com/p_chinh-sach-hoan-huy-tien"
                  className="text-[#af3689] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://xem.tracuuthansohoc.com/p_chinh-sach-hoan-huy-tien
                </a>
              </p>

              {/* Section 7 */}
              <h2 className="text-xl font-bold text-[#061729] mt-8 mb-3">7. Sửa đổi Điều khoản</h2>
              <p className="leading-relaxed mb-6">
                Chúng tôi có quyền thay đổi hoặc cập nhật Điều khoản bất kỳ lúc nào bằng cách công bố
                trên website. Việc bạn tiếp tục sử dụng phần mềm sau khi có cập nhật được xem là đồng
                ý với các thay đổi đó. Bạn có trách nhiệm theo dõi thường xuyên để cập nhật nội dung
                mới.
              </p>

              {/* Section 8 */}
              <h2 className="text-xl font-bold text-[#061729] mt-8 mb-3">
                8. Miễn trừ trách nhiệm
              </h2>
              <p className="leading-relaxed mb-3">
                Phần mềm tra cứu được cung cấp dưới hình thức "nguyên trạng" và "sẵn có". Chúng tôi
                không đảm bảo rằng:
              </p>
              <ul className="list-none space-y-2 mb-4 ml-4">
                <li className="leading-relaxed">
                  • Kết quả tra cứu là hoàn toàn chính xác hoặc phù hợp tuyệt đối với từng cá nhân.
                </li>
                <li className="leading-relaxed">
                  • Phần mềm sẽ luôn hoạt động liên tục, không lỗi hoặc không bị gián đoạn.
                </li>
              </ul>
              <p className="leading-relaxed mb-6">
                Tất cả dữ liệu và kết quả tra cứu chỉ mang tính chất tham khảo, trải nghiệm cá nhân và
                chiêm nghiệm. Bạn tự chịu trách nhiệm với mọi quyết định được đưa ra dựa trên kết quả
                từ công cụ này. Chúng tôi từ chối mọi trách nhiệm pháp lý đối với bất kỳ thiệt hại nào
                phát sinh từ việc sử dụng phần mềm, bao gồm nhưng không giới hạn: tổn thất dữ liệu,
                mất lợi nhuận, hoặc tác động đến sức khỏe, tài chính, công việc và các mối quan hệ cá
                nhân.
              </p>

              {/* Section 9 */}
              <h2 className="text-xl font-bold text-[#061729] mt-8 mb-3">
                9. Luật áp dụng và giải quyết tranh chấp
              </h2>
              <p className="leading-relaxed mb-6">
                Điều khoản này được điều chỉnh và giải thích theo pháp luật Việt Nam. Mọi tranh chấp
                phát sinh từ việc sử dụng phần mềm sẽ ưu tiên giải quyết thông qua thương lượng. Nếu
                không đạt được thỏa thuận, tranh chấp sẽ được giải quyết tại tòa án có thẩm quyền tại
                Việt Nam.
              </p>

              {/* Section 10 */}
              <h2 className="text-xl font-bold text-[#061729] mt-8 mb-3">10. Thông tin liên hệ</h2>
              <p className="leading-relaxed mb-4">
                Nếu bạn có bất kỳ câu hỏi nào về Điều khoản này, vui lòng liên hệ với chúng tôi tại:
              </p>
              <ul className="list-none space-y-2 mb-6 ml-4">
                <li className="leading-relaxed">
                  • Email:{' '}
                  <a
                    href="mailto:tracuuthansohoc.com@gmail.com"
                    className="text-[#af3689] hover:underline"
                  >
                    tracuuthansohoc.com@gmail.com
                  </a>
                </li>
                <li className="leading-relaxed">
                  • Hotline/Zalo:{' '}
                  <a href="tel:0962984269" className="text-[#af3689] hover:underline">
                    0962.984.269
                  </a>
                </li>
              </ul>

              <p className="text-sm text-gray-600 italic mt-8">Cập nhật lần cuối: 19/05/2025</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
