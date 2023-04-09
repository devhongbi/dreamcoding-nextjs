import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: '멋진 제품 사이트 | 전체 제품 확인',
  description: '멋진 제품을 확인해보세요.',
}

export default function ProductsLayout({ children }: { children: ReactNode}) {
  return (
    <>
      <nav>대충 네비게이션바..</nav>
      {children}
    </>
  )
}
