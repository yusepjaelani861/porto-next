import { useEffect, useState } from "react";
import styles from "@/components/basic/css/scroll-navigation.module.css";

export default function ScrollNavigation({ data, onChangeNav }) {
  const [navs, setNavs] = useState(data);
  const [scrollPos, setScrollPos] = useState(null);

  const [navColor, setNavColor] = useState("bg-white");

  useEffect(
    (e) => {
      const onScroll = (e) => {
        setScrollPos(window.scrollY);
      };

      data.forEach((item) => {
        if (item.active) {
          setNavColor(item.bgColor);
        }
      });

      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    },
    [scrollPos, data]
  );

  return (
    <ul
      className={`font-light text-xs relative h-full flex flex-col justify-between ${
        styles["scroll-navigation"]
      } ${styles[`scroll-navigation-${navColor}`]}`}
    >
      {navs.map((item, key) => (
        <li
          onClick={() => {
            onChangeNav(item);
          }}
          key={key}
          className={`
          ${
            item.active
              ? `${styles["nav-active"]} ${styles[`nav-active-${navColor}`]}`
              : ""
          } 
          uppercase flex items-center cursor-pointer transition-colors ease-in-out duration-200`}
        >
          <span></span>
          <div className={`${item.active ? `${styles[`nav-label-active-${navColor}`]}`: ''}`}>{item.title}</div>
        </li>
      ))}
    </ul>
  );
}
