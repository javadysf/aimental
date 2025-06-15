"use client"
import Footer from "@/components/common/footer/Footer"
import Header from "@/components/common/header/Header"
import LandingPage from "../../src/components/landing/index"
import Head from "next/head"
export default function Home() {
  return (
      <>
      <Header/>
      <LandingPage/>
      <Footer/>
      </>
  )
}
