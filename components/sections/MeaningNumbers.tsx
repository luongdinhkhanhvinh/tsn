'use client';

import { useState } from 'react';
import { numerologyNumbers } from '@/lib/constants/numbers';

export default function MeaningNumbers() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#061729] mb-4">
            Ý NGHĨA CÁC CON SỐ TRONG THẦN SỐ HỌC Pitago
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5">
            <div className="grid grid-cols-4 gap-3 max-w-md mx-auto">
              {numerologyNumbers.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`aspect-square rounded-lg font-bold text-2xl transition-all ${activeTab === index
                      ? 'bg-linear-to-br from-[#092c49] to-[#af3688] text-white shadow-lg scale-105'
                      : 'bg-[#0a1e36] text-white/80 hover:scale-105'
                    }`}
                >
                  {item.num}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl md:text-3xl font-bold text-[#061729] mb-4">
                {numerologyNumbers[activeTab].title}
              </h3>
              <p className="text-[#092c49] text-base leading-relaxed mb-6">
                {numerologyNumbers[activeTab].desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
