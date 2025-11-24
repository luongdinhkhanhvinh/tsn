# Tra Cứu Thần Số Học

Website tra cứu thần số học được xây dựng với Next.js, TypeScript và Tailwind CSS.

## Cấu trúc dự án

```
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Homepage
│   └── [routes]/                # Dynamic routes
├── components/
│   ├── layout/                  # Layout components (Header, Footer)
│   ├── sections/                # Page sections (Hero, About, Services, etc.)
│   └── ui/                      # Reusable UI components
├── lib/
│   ├── constants/               # Constants & data
│   └── types/                   # TypeScript type definitions
└── public/
    └── images/                  # Static images
```

## Công nghệ sử dụng

- **Next.js 16** - React framework với App Router
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS
- **React 19** - UI library

## Cài đặt

```bash
npm install
# hoặc
yarn install
```

## Chạy development server

```bash
npm run dev
# hoặc
yarn dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem kết quả.

## Build production

```bash
npm run build
npm start
```

## Tính năng

- ✅ Responsive design
- ✅ SEO optimized
- ✅ Component-based architecture
- ✅ Type-safe với TypeScript
- ✅ Modern UI với Tailwind CSS
