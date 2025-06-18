import Image from "next/image";
import Container from "@/components/basic/container";
import { ListExperience } from "@/constants/list-experience";
import { useInView } from "react-intersection-observer";

export default function Experiences() {
  const { ref: contentRef, inView: inviewSection } = useInView({
    rootMargin: "-50px",
    threshold: 0,
  });

  return (
    <div className="bg-gradient-black">
      <section
        ref={contentRef}
        className="pb-20 font-thin bg-gray-100 min-h-screen items-center clip-section-bottom"
      >
        <Container>
          <div
            className={`w-full m-auto px-8 pl-16 md:px-8 md:pl-8 lg:w-3/4 ${
              inviewSection ? "transition-up" : "opacity-0"
            }`}
          >
            <div className="flex justify-end">
              <h2
                className={`text-right font-bold text-3xl mb-20 itali border-b border-black pb-3 w-80`}
              >
                Experiences..
              </h2>
            </div>

            {ListExperience.map((experience, key) => (
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
                    } w-16 h-16 md:w-28 md:h-28 mr-0 inline-flex items-center bg-white mb-4 rounded overflow-hidden`}
                  >
                    <div className="w-full block">
                      <Image
                        src={experience.logo}
                        alt="logo"
                        layout="responsive"
                      />
                    </div>
                  </div>
                  <h5 className="font-bold text-base md:text-xl">
                    {experience.companyName}
                  </h5>
                  <p className="italic text-sm">{experience.time}</p>
                </div>
                <div
                  className={`
                ${
                  key % 2 === 0
                    ? "text-left py-8 md:pr-20"
                    : "text-right pr-4 order-1 border-r border-black py-8 md:pl-20"
                }`}
                >
                  <h5 className="font-bold mb-4 border-b border-black pb-2 inline-block">
                    {experience.jobTitle}
                  </h5>
                  <p
                    className="text-xs md:text-sm"
                    dangerouslySetInnerHTML={{
                      __html: experience.jobDescription,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
