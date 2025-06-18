import Link from "next/link";
import { useEffect, useState } from "react";
import IcoFacebook from "@/components/icons/ico-facebook";
import IcoInstagram from "@/components/icons/ico-instagram";
import IcoLinkedin from "@/components/icons/ico-linkedin";
import IcoTwitter from "@/components/icons/ico-twitter";
import IcoYoutube from "@/components/icons/ico-youtube";
import styles from "@/components/headers/css/default-header.module.css";

export default function DefaultHeader() {
  const [open, setOpen] = useState(false);

  function toggle() {
    setOpen(!open);
    toggleBackdrop();
  }

  function toggleBackdrop(remove) {
    const el = document.getElementsByTagName("body");

    if (window.innerWidth >= 1024 || remove) {
      el[0].classList.remove("overflow-hidden");
    } else {
      el[0].classList.toggle("overflow-hidden");
    }
  }

  useEffect(() => {
    window.onresize = () => {
      if (window.innerWidth >= 1024) {
        const el = document.getElementsByTagName("body");
        el[0].classList.remove("overflow-hidden");
        setOpen(false);
      }
    };
  }, [open]);

  return (
    <header className="overflow-hidden text-black uppercase font-light text-lg fixed w-full top-0 left-0 z-40 bg-gradient-black">
      <div className="w-full p-6 lg:w-11/12 m-auto">
        <div className="flex relative z-20">
          <div
            className={`text-white capitalize transition-opacity ease-in-out duration-300`}
          >
            {`<><>`}
          </div>

          <div
            onClick={() => toggle()}
            className={`${styles["menu-icon"]} ${
              open && styles["menu-icon-open"]
            }`}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div
          onClick={() => toggle()}
          className={`fixed w-screen right-0 h-screen-header bg-black bg-opacity-70 top-76 cursor-pointer z-10 ${
            open ? "translate-x-0" : "translate-x-100vw"
          }`}
        ></div>

        <div
          className={`px-8 py-6 text-black font-light text-2xl fixed w-screen md:w-3/4 lg:w-1/2 xl:w-1/3  h-screen-header overflow-y-auto bg-white bg-opacity-95 z-10 top-76 right-0 transform transition-transform duration-200 ease-in-out
        ${open ? "translate-x-0 delay-100" : "translate-x-100vw delay-200"}`}
        >
          <div className="flex flex-wrap w-4">
            <div className="my-2 text-center w-full">Y</div>
            <div className="my-2 text-center w-full">U</div>
            <div className="my-2 text-center w-full">S</div>
            <div className="my-2 text-center w-full">E</div>
            <div className="my-2 text-center w-full mb-8">P</div>
            <div className="my-2 text-center w-full">J</div>
            <div className="my-2 text-center w-full">A</div>
            <div className="my-2 text-center w-full">E</div>
            <div className="my-2 text-center w-full">L</div>
            <div className="my-2 text-center w-full">A</div>
            <div className="my-2 text-center w-full">N</div>
            <div className="my-2 text-center w-full">I</div>
          </div>
        </div>

        <div
          className={`fixed w-screen md:w-3/4 lg:w-1/2 xl:w-1/3 h-screen-header overflow-y-auto top-76 right-0 transform transition-transform z-10 duration-300 ease-in-out pl-16 pr-28 
        ${open ? "translate-x-20 delay-200" : "translate-x-100vw delay-100"}`}
        >
          {/* <div className="absolute w-full h-full block left-0 top-0 opacity-20 grayscale">
            <Image
              src={ImageHeader}
              alt="Yusep Jaelani"
              layout="fill"
              objectFit="cover"
            />
          </div> */}

          <ul className="mt-24 border-t border-black mb-16 px-2 relative">
            <li className="my-5 hover:text-orange-1 cursor-pointer">
              Projects
            </li>
            <li className="my-5 hover:text-orange-1 cursor-pointer">Profile</li>
          </ul>

          <h5 className="border-b border-black py-3 px-2 relative">Links</h5>
          <div className="py-3 text-sm capitalize px-2 relative">
            <ul>
              <li className="my-5 hover:text-orange-1 cursor-pointer">
                <Link href="https://www.facebook.com/yusep.jaelani">
                  <a className="flex items-center" target="_blank">
                    <IcoFacebook className="mr-2 fill-current" /> Facebook
                  </a>
                </Link>
              </li>
              <li className="my-5 hover:text-orange-1 cursor-pointer">
                <Link href="https://www.instagram.com/yusep_jaelani/">
                  <a className="flex items-center" target="_blank">
                    <IcoInstagram className="mr-2 fill-current" /> Instagram
                  </a>
                </Link>
              </li>
              <li className="my-5 hover:text-orange-1 cursor-pointer">
                <Link href="https://www.linkedin.com/in/yusepjaelani/">
                  <a className="flex items-center" target="_blank">
                    <IcoLinkedin className="mr-2 fill-current" /> LinkedIn
                  </a>
                </Link>
              </li>
              <li className="my-5 hover:text-orange-1 cursor-pointer">
                <Link href="#">
                  <a className="flex items-center" target="_blank">
                    <IcoTwitter className="mr-2 fill-current" /> Twitter
                  </a>
                </Link>
              </li>
              <li className="my-5 hover:text-orange-1 cursor-pointer">
                <Link href="#">
                  <a className="flex items-center" target="_blank">
                    <IcoYoutube className="mr-2 fill-current" /> YouTube
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
