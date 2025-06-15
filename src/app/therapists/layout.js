"use client";
import Header from "@/components/common/header/Header";
import Footer from "@/components/common/footer/Footer";



export default function MainLayout({ children }) {

  return (
    <>
    <title>Therapists</title>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
