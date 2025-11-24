import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chính sách bảo mật - Tra cứu thần số học',
  description: 'Chính sách bảo mật này nhằm mục đích giúp bạn hiểu rõ những thông tin chúng tôi thu thập, lý do chúng tôi thu thập và cách bạn có thể cập nhật',
  openGraph: {
    title: 'Chính sách bảo mật - Tra cứu thần số học',
    description: 'Chính sách bảo mật này nhằm mục đích giúp bạn hiểu rõ những thông tin chúng tôi thu thập, lý do chúng tôi thu thập và cách bạn có thể cập nhật',
    url: 'https://tracuuthansohoc.com/chinh-sach-bao-mat/',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#f8e8f3] flex-grow">
      {/* Breadcrumb */}
      <div className="bg-[#f0d4e8] py-3">
        <div className="container mx-auto px-4">
          <nav aria-label="breadcrumbs" className="text-sm">
            <a href="/" className="text-[#af3689] hover:underline">Trang chủ</a>
            <span className="mx-2 text-gray-500">»</span>
            <span className="text-gray-700">Chính sách bảo mật</span>
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
              Chính Sách Bảo Mật
            </h1>

            <div className="prose prose-base max-w-none text-gray-700">
              <p className="leading-relaxed mb-4">
                Khi sử dụng dịch vụ của <strong><a href="/" className="text-[#af3689] hover:underline">Tra Cứu Thần Số Học</a></strong>, bạn tin tưởng cung cấp thông tin của bạn cho chúng tôi. Chúng tôi hiểu rằng đây là một trách nhiệm lớn và chúng tôi nỗ lực bảo vệ thông tin của bạn cũng như để bạn nắm quyền kiểm soát.
              </p>

              <p className="leading-relaxed mb-4">
                Chính sách bảo mật này nhằm mục đích giúp bạn hiểu rõ những thông tin Tracuuthansohoc thu thập, lý do chúng tôi thu thập và cách bạn có thể cập nhật, quản lý, xuất và xóa thông tin của mình.
              </p>

              <p className="text-sm text-gray-600 italic mb-6">
                Có hiệu lực từ 4 tháng 2, 2021, chỉnh sửa mới nhất ngày 3 tháng 4, 2024
              </p>

              {/* Section 1 */}
              <h2 className="text-xl font-bold text-[#061729] mt-8 mb-3">
                1. Phạm Vi
              </h2>
              <p className="leading-relaxed mb-3">
                Chính sách Bảo mật thông tin cá nhân này áp dụng đối với mọi thiết bị, trang web hoặc ứng dụng trực tuyến của Tracuuthansohoc tham chiếu đến hoặc liên kết đến Chính sách Bảo mật thông tin cá nhân (gọi chung là "Dịch vụ").
              </p>
              <p className="leading-relaxed mb-6">
                Chính sách Bảo mật thông tin cá nhân áp dụng bất kể bạn sử dụng máy vi tính, điện thoại di động, máy tính bảng, TV hay thiết bị khác để truy cập Dịch vụ của chúng tôi.
              </p>

              {/* Section 2 */}
              <h2 className="text-xl font-bold text-[#061729] mt-8 mb-3">
                2. Phương thức
              </h2>
              <p className="leading-relaxed mb-3">
                Trang web Tracuuthansohoc.com thu thập thông tin cá nhân theo các phương thức sau:
              </p>
              <ul className="list-none space-y-2 mb-6 ml-4">
                <li className="leading-relaxed">
                  • <strong>Thông tin cung cấp trực tiếp</strong>: Khi người dùng nhập thông tin cá nhân vào trang web, như họ tên khai sinh và ngày tháng năm sinh để sử dụng dịch vụ thần số học.
                </li>
                <li className="leading-relaxed">
                  • <strong>Thông tin thu thập khi sử dụng dịch vụ</strong>: Trang web có thể thu thập thông tin về cách người dùng tương tác với dịch vụ, bao gồm cả các thông tin kỹ thuật như địa chỉ IP, thông tin thiết bị, và lịch sử truy cập.
                </li>
                <li className="leading-relaxed">
                  • <strong>Thông tin từ nguồn thứ ba</strong>: Trang web có thể nhận thông tin từ các nguồn khác, nếu người dùng đã cho phép hoặc thông tin đó được chia sẻ công khai.
                </li>
              </ul>

              {/* Section 3 */}
              <h2 className="text-xl font-bold text-[#061729] mt-8 mb-3">
                3. Sử dụng và chia sẻ thông tin
              </h2>
              <p className="leading-relaxed mb-3">
                Chúng tôi sử dụng thông tin mà chúng tôi thu thập (và có thể kết hợp chúng với các thông tin khác về bạn), trong số những thứ khác, để:
              </p>
              <ul className="list-none space-y-2 mb-6 ml-4">
                <li className="leading-relaxed">
                  • Cung cấp Dịch vụ mà bạn yêu cầu.
                </li>
                <li className="leading-relaxed">
                  • Hiểu cách bạn sử dụng Dịch vụ để chúng tôi có thể cải thiện trải nghiệm của bạn.
                </li>
                <li className="leading-relaxed">
                  • Cung cấp nội dung và quảng cáo theo đối tượng khách hàng.
                </li>
                <li className="leading-relaxed">
                  • Chúng tôi cũng sử dụng thông tin mà chúng tôi thu thập theo các cách được mô tả cho bạn tại thời điểm thu thập hoặc với sự đồng ý của bạn
                </li>
              </ul>

              {/* Section 4 */}
              <h2 className="text-xl font-bold text-[#061729] mt-8 mb-3">
                4. Cam kết bảo mật
              </h2>
              <p className="leading-relaxed mb-6">
                Chúng tôi cam kết bảo mật thông tin của bạn là ưu tiên hàng đầu. Chúng tôi sử dụng các biện pháp bảo mật tiên tiến để bảo vệ thông tin cá nhân của bạn khỏi mọi sự truy cập trái phép, sử dụng không đúng mục đích hoặc tiết lộ. Chúng tôi không bao giờ chia sẻ thông tin của bạn với bên thứ ba mà không có sự đồng ý của bạn trước. Đồng thời, chúng tôi liên tục cập nhật và kiểm tra hệ thống bảo mật của mình để đảm bảo rằng nó luôn đáp ứng được những tiêu chuẩn cao nhất. Quý khách có thể yên tâm về việc sử dụng dịch vụ của chúng tôi mà không phải lo lắng về vấn đề bảo mật.
              </p>

              <p className="leading-relaxed">
                <strong>Liên hệ:</strong> Email: thông qua phần "<strong><a href="/lien-he" className="text-[#af3689] hover:underline">Liên hệ với chúng tôi</a></strong>" trên trang web.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
