'use client'
import Spline from "@splinetool/react-spline";
import { Footer, Header, Navbar } from "./components";

export default function Home() {
  return (
    <div className="bg-gradient-to-t from-[#111627] to-[#344378] h-[900px] md:h-auto">
      <div className="absolute w-full h-full text-white flex flex-col justify-between">
        <div className="flex flex-col">
          <Navbar />
          <Header />
        </div>
        <Footer />
      </div>
      <div className="h-screen">
        <Spline scene="https://prod.spline.design/r8n9DcRmCAX8oliX/scene.splinecode" />
      </div>
    </div>
  );
}
