import Link from "next/link";
import { Github, Menu, Sunset, User } from "./icons";

export function Navbar() {
  return (
    <div className="flex flex-col mt-3 mx-8">
      <div className="flex justify-between">
        <div className="flex items-center gap-6">
          <h3 className="">08:30 PM</h3>
          <h3 className="hidden md:block">29/1/2024</h3>
        </div>
        <div className="hidden md:block">
          <div className="w-12 h-12">
            <Sunset />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <Link href={"https://github.com/rch-goldsnaker"}>
            <div className="w-6 h-6 hidden md:block">
              <Github />
            </div>
          </Link>
          <div className="w-6 h-6 hidden md:block">
            <User />
          </div>
          <div className="w-6 h-6">
            <Menu />
          </div>
        </div>
      </div>
      <div className="w-full mt-2 h-[2px] bg-gradient-to-r from-transparent via-[#c3cbd8] to-transparent"></div>
    </div>
  );
}
