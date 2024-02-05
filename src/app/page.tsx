import { Footer, Header, Navbar } from "../components";
import SplineComponent from "../components/SplineComponent";

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
      <SplineComponent/>
    </div>
  );
}
