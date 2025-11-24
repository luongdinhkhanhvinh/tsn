'use client';

import { CustomLink } from '@/components/ui/CustomLink';
import { useState } from 'react';

export default function TraCuuThanSoHocPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    name: '',
    gender: '0',
    day: '01',
    month: '01',
    year: '',
    checkCamp: false,
    fullName2: '',
    day2: '01',
    month2: '01',
    year2: '',
    checkPhone: false,
    phones: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <main className="min-h-screen bg-linear-to-b from-[#1a0b2e] via-[#2d1b4e] to-[#1a0b2e] grow">
      {/* Hero Section with Form */}
      <section className="container mx-auto px-4 py-12 min-h-[calc(100vh-100px)] flex items-center">
        <div className="w-full max-w-2xl mx-auto">
          {/* Icon/Logo */}
          <div className="text-center mb-6">
            <div className="inline-block w-48 h-48 rounded-full bg-linear-to-br from-purple-500/20 to-pink-500/20 items-center justify-center mb-4">
              <div className="w-32 h-32 rounded-full bg-linear-to-br from-purple-600 to-pink-600" />
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-6">
            <p className="text-yellow-300 text-lg font-bold mb-2">DỰ ĐOÁN CHÍNH XÁC</p>
            <p className="text-white text-base leading-relaxed">
              Thành công đường đời, điểm mạnh yếu, tiềm năng sự nghiệp, các giai đoạn thuận lợi -
              khó khăn, tương hợp tình duyên, hôn nhân,...
            </p>
          </div>

          {/* Form */}
          <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-white text-sm font-bold mb-2">
                  Nhập họ tên khai sinh:
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Nhập đầy đủ họ tên khai sinh"
                  className="w-full px-4 py-3 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              {/* Name & Gender */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-white text-sm font-bold mb-2">
                    Tên thường dùng nếu có (VD: Ngọc Anna, Nhím,...)
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Nhập tên thường dùng nếu có"
                    className="w-full px-4 py-3 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-bold mb-2">Giới tính:</label>
                  <select
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="0">Giới tính</option>
                    <option value="1">Nam</option>
                    <option value="2">Nữ</option>
                    <option value="3">Khác</option>
                  </select>
                </div>
              </div>

              {/* Birth Date */}
              <div>
                <label className="block text-white text-sm font-bold mb-2">
                  Ngày/tháng/năm sinh dương lịch
                </label>
                <div className="grid grid-cols-3 gap-4">
                  <select
                    value={formData.day}
                    onChange={(e) => setFormData({ ...formData, day: e.target.value })}
                    className="px-4 py-3 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                      <option key={day} value={day.toString().padStart(2, '0')}>
                        Ngày {day.toString().padStart(2, '0')}
                      </option>
                    ))}
                  </select>
                  <select
                    value={formData.month}
                    onChange={(e) => setFormData({ ...formData, month: e.target.value })}
                    className="px-4 py-3 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                      <option key={month} value={month.toString().padStart(2, '0')}>
                        Tháng {month.toString().padStart(2, '0')}
                      </option>
                    ))}
                  </select>
                  <input
                    type="number"
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    placeholder="Năm sinh"
                    className="px-4 py-3 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
              </div>

              {/* Compatibility Check */}
              <div className="border border-gray-400 rounded-lg p-4 bg-white/5">
                <label className="flex items-center gap-2 text-white font-bold cursor-pointer mb-3">
                  <input
                    type="checkbox"
                    checked={formData.checkCamp}
                    onChange={(e) => setFormData({ ...formData, checkCamp: e.target.checked })}
                    className="w-4 h-4"
                  />
                  Xem tương hợp tình duyên, hôn nhân
                </label>

                {formData.checkCamp && (
                  <div className="space-y-3 text-white">
                    <input
                      type="text"
                      value={formData.fullName2}
                      onChange={(e) => setFormData({ ...formData, fullName2: e.target.value })}
                      placeholder="Nhập họ tên của người yêu/vợ/chồng"
                      className="w-full px-4 py-2 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <div className="grid grid-cols-3 gap-3">
                      <select
                        value={formData.day2}
                        onChange={(e) => setFormData({ ...formData, day2: e.target.value })}
                        className="px-4 py-2 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                          <option key={day} value={day.toString().padStart(2, '0')}>
                            Ngày {day.toString().padStart(2, '0')}
                          </option>
                        ))}
                      </select>
                      <select
                        value={formData.month2}
                        onChange={(e) => setFormData({ ...formData, month2: e.target.value })}
                        className="px-4 py-2 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                          <option key={month} value={month.toString().padStart(2, '0')}>
                            Tháng {month.toString().padStart(2, '0')}
                          </option>
                        ))}
                      </select>
                      <input
                        type="number"
                        value={formData.year2}
                        onChange={(e) => setFormData({ ...formData, year2: e.target.value })}
                        placeholder="Năm sinh"
                        className="px-4 py-2 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Phone Check */}
              <div className="border border-gray-400 rounded-lg p-4 bg-white/5">
                <label className="flex items-center gap-2 text-white font-bold cursor-pointer mb-3">
                  <input
                    type="checkbox"
                    checked={formData.checkPhone}
                    onChange={(e) => setFormData({ ...formData, checkPhone: e.target.checked })}
                    className="w-4 h-4"
                  />
                  Xem cả số điện thoại hợp
                </label>

                {formData.checkPhone && (
                  <textarea
                    value={formData.phones}
                    onChange={(e) => setFormData({ ...formData, phones: e.target.value })}
                    rows={3}
                    placeholder="Nhập tối đa 5 số điện thoại, mỗi dòng là 1 số"
                    className="w-full px-4 py-2 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-6 rounded-lg shadow-lg transition text-lg"
              >
                🔍 Tra cứu ngay
              </button>
            </form>

            {/* Notes */}
            <div className="mt-6 p-4 bg-white/90 rounded-lg text-sm text-gray-800 leading-relaxed">
              <p className="mb-3">
                We have added more new languages for numerology reports.
                <br />
                <em className="text-xs">
                  Chúng tôi đã cập nhật thêm nhiều ngôn ngữ mới cho các báo cáo thần số học.
                </em>
              </p>
              <p className="font-bold mb-2">CHÚ THÍCH:</p>
              <p className="mb-2">
                - Nếu ngày sinh trên giấy tờ (chứng minh thư, bằng lái, khai sinh,...) và ngày sinh
                dương lịch thật của bạn khác nhau thì cuộc đời bạn sẽ có xáo trộn của cả 2 ngày sinh
                này. Bạn nên tra cứu cả hai để biết thêm, tuy nhiên kết quả sẽ thiên về ngày sinh
                dương lịch!
              </p>
              <p className="mb-2">
                - Tên thường dùng là tên mọi người thường dùng để gọi bạn hoặc một danh xưng mà bạn
                thường dùng, tên này sẽ bù trừ vào biểu đồ ngày sinh của bạn.
              </p>
              <p>
                Bạn có thể tải lại các file báo cáo thần số học đã tra cứu tại{' '}
                <CustomLink href="/account?a=history&type=1" className="text-primary hover:underline">
                  Lịch sử tra cứu
                </CustomLink>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h1 className="text-2xl font-bold text-[#11173d] mb-4">
                Tạo báo cáo thần số học cho riêng bạn | Tra cứu online hoàn toàn miễn phí
              </h1>
              <p className="text-lg text-[#11173d] mb-4">
                Bạn ở đây vì bạn khao khát được biết mình <em>thực sự</em> là ai, người khác nhìn
                nhận bạn như thế nào, bạn nắm bắt được cơ hội gì để trở nên GIÀU CÓ và HẠNH PHÚC
                hơn…
              </p>
              <p className="text-base text-[#11173d] mb-4">
                Hoặc có lẽ đó là để hiểu những "sự trùng hợp" kỳ lạ đã và đang xuất hiện trong cuộc
                sống của bạn gần đây, như <strong>việc lặp lại các số 11:11</strong> hoặc 333 xuất
                hiện ở những nơi kỳ lạ nhất.
              </p>
              <p className="text-base text-[#11173d] mb-4">
                Thần số học là 1 ngành khoa học 4000 năm tuổi dựa trên toán học của vũ trụ, bằng cách
                xem xét <strong>ý nghĩa của tên và ngày sinh của bạn</strong>, chúng tôi có thể khám
                phá ra nhiều sự thật ngạc nhiên ẩn dấu trong{' '}
                <strong>3 biểu đồ và hơn 20 chỉ số</strong> của riêng bạn.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-md aspect-square bg-linear-to-br from-purple-500/20 to-pink-500/20 rounded-lg" />
            </div>
          </div>

          {/* Quote */}
          <div className="max-w-4xl mx-auto mt-12 p-6 bg-gray-100 rounded-2xl">
            <p className="text-sm text-gray-800 italic leading-relaxed">
              Bạn lưu ý, thần số học giống như một tấm bản đồ để chỉ cho bạn những điểm mạnh điểm
              yếu trong bản ngã của bạn, những con đường bạn nên đi theo để có được hạnh phúc và cuộc
              đời viên mãn. Khi đọc những luận giải về kết quả tra cứu của bạn, bạn nên đặt câu hỏi
              cho chính mình để hiểu mình hơn và biết cần làm gì để đạt được hạnh phúc và thành công
              trong cuộc đời nhé. Chúc bạn và người thân luôn an lành!
            </p>
            <p className="text-right mt-2 font-bold">- Louis Nguyen -</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-linear-to-b from-purple-900 to-indigo-900 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-white text-lg mb-6">
              Trong <strong>Các Chỉ Số Thần Số Học</strong> được tính toán cho riêng bạn, chúng tôi
              tính toán <strong>Chỉ Số Đường Đời</strong>,{' '}
              <strong>Kim Tự Tháp Thần Số Học</strong>, <strong>Biểu Đồ Sức Mạnh Của Bạn</strong>,
              &amp; <strong>26 chỉ số khác</strong> để tìm ra:
            </p>
            <ul className="space-y-3 text-white">
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 text-xl">●</span>
                <span>Tại sao những sự việc thường xảy ra với bạn.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 text-xl">●</span>
                <span>
                  Những khía cạnh tiềm ẩn trong tính cách của bạn, cơ hội trong tương lai, tài năng
                  bẩm sinh và những món quà bí mật ẩn trong biểu đồ thần số học của bạn...
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 text-xl">●</span>
                <span>Con đường hứa hẹn nhất để đi trong cuộc đời bạn...</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 text-xl">●</span>
                <span>
                  Mong muốn sâu sắc nhất của bạn và những gì bạn có thể làm để cuối cùng đạt được
                  nhận thức sâu sắc hơn về bản thân...
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 text-xl">●</span>
                <span className="font-bold">Và còn nhiều nữa ...</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
