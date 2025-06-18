import ScrollNavigation from "@/components/basic/scroll-navigation";
import DefaultLayout from "@/layouts/default-layout";
import { ListScrollNavigation } from "@/constants/list-scroll-navigation";
import Intro from "@/components/sections/home/intro";
import Experiences from "@/components/sections/home/experiences";
import Skills from "@/components/sections/home/skills";
import Projects from "@/components/sections/home/projects";
import Links from "@/components/sections/home/links";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const Home = ({}) => {
  const { ref: refIntro, inView: inviewIntro } = useInView({
    rootMargin: "-50%",
    threshold: 0,
  });

  const { ref: refExperiences, inView: inviewExperiences } = useInView({
    rootMargin: "-50%",
    threshold: 0,
  });

  const { ref: refSkills, inView: inviewSkills } = useInView({
    rootMargin: "-50%",
    threshold: 0,
  });

  const { ref: refProjects, inView: inviewProjects } = useInView({
    rootMargin: "-50%",
    threshold: 0,
  });

  const { ref: refLinks, inView: inviewLinks } = useInView({
    rootMargin: "-50%",
    threshold: 0,
  });

  const [scrolNavigationData, setScrolNavigationData] =
    useState(ListScrollNavigation);

  const scrollToEl = (id) => {
    const element = document.getElementById(id);
    var headerOffset = 140;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
 });
  };

  useEffect(
    (e) => {
      scrolNavigationData.forEach((item) => {
        if (item.title === "Intro") {
          item.active = inviewIntro;
        }

        if (item.title === "Experience") {
          item.active = inviewExperiences;
        }

        if (item.title === "Skills") {
          item.active = inviewSkills;
        }

        if (item.title === "Projects") {
          item.active = inviewProjects;
        }

        if (item.title === "Links") {
          item.active = inviewLinks;
        }
      });

      setScrolNavigationData(scrolNavigationData);
    },
    [
      scrolNavigationData,
      inviewIntro,
      inviewExperiences,
      inviewSkills,
      inviewProjects,
      inviewLinks,
    ]
  );

  return (
    <>
      <div className="text-white pl-7 xl:pl-20 flex items-center fixed left-0 top-0 h-screen z-10">
        <ScrollNavigation
          data={scrolNavigationData}
          onChangeNav={(data) => {
            scrollToEl(data.id);
          }}
        />
      </div>

      <div id="intro" ref={refIntro}>
        <Intro />
      </div>

      <div id="experience" ref={refExperiences}>
        <Experiences />
      </div>

      <div id="skills" ref={refSkills}>
        <Skills />
      </div>

      <div id="projects" ref={refProjects}>
        <Projects />
      </div>

      <div id="links" ref={refLinks}>
        <Links />
      </div>
    </>
  );
};

Home.getLayout = function getLayout(page) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Home;
