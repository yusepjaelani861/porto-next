import Image from "next/image";
import Container from "@/components/basic/container";
import { ListProject } from "@/constants/list-project";
import { useInView } from "react-intersection-observer";

export default function Projects() {
  const { ref: contentRef, inView: inviewSection } = useInView({
    rootMargin: "-50px",
    threshold: 0,
  });

  return (
    <div className="bg-gradient-black">
      <section className="pb-24 font-thin bg-gray-100 min-h-screen items-center clip-section-bottom">
        <Container>
          <div
            ref={contentRef}
            className={`w-full m-auto px-8 pl-16 md:px-8 md:pl-8 lg:w-3/4 ${
              inviewSection ? "transition-up" : "opacity-0"
            }`}
          >
            <div className="flex justify-end">
              <h2 className="text-right font-bold text-3xl mb-20 itali border-b border-black pb-3 w-80">
                Projects..
              </h2>
            </div>

            {ListProject.map((experience, key) => (
              <div key={key} className="gap-4 grid grid-cols-2">
                <div
                  className={`${
                    key % 2 === 0
                      ? "text-right pr-4 border-r border-black py-8"
                      : "text-left order-2 py-8"
                  }`}
                >
                  <div
                    className={`${
                      key % 2 === 0 ? "justify-end" : "justify-start"
                    } w-20 h-20 mr-0 inline-flex items-center ${
                      experience.bgColor
                    } mb-2 rounded overflow-hidden p-2`}
                  >
                    <div className="w-full block">
                      <Image
                        src={experience.logo}
                        alt="logo pina"
                        layout="responsive"
                      />
                    </div>
                  </div>
                  <h5
                    className="font-bold text-base md:text-lg"
                    dangerouslySetInnerHTML={{
                      __html: experience.companyName,
                    }}
                  />

                  {experience.links.map(
                    (link, k) =>
                      link && (
                        <a
                          key={k}
                          className={`text-xs ${
                            key % 2 === 0 ? "ml-2" : "mr-2"
                          } md:text-sm italic max-w-full bg-blue-1 bg-opacity-5 hover:bg-orange-1 hover:bg-opacity-5 transition-colors duration-300 ease-out break-words text-blue-1 inline-block border border-blue-1 rounded-md p-2 mt-2 hover:text-orange-1 hover:border-orange-1`}
                          href={link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {link}
                        </a>
                      )
                  )}
                </div>
                <div
                  className={`${
                    key % 2 === 0
                      ? "text-left py-8 md:pr-20"
                      : "text-right pr-4 order-1 border-r border-black py-8 md:pl-20"
                  }`}
                >
                  <h5
                    className="font-bold italic text-xs md:text-base mb-2 border-b border-black pb-2 inline-block"
                    dangerouslySetInnerHTML={{
                      __html: experience.jobTitle,
                    }}
                  ></h5>
                  <p className="italic text-xs mb-4">{experience.time}</p>
                  <div
                    className="text-xs md:text-sm"
                    dangerouslySetInnerHTML={{
                      __html: experience.jobDescription,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
