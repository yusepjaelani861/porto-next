import Image from "next/image";
import Container from "@/components/basic/container";
import ImageSectionIntro from "@/public/yusep.jpg";
import { useInView } from "react-intersection-observer";

export default function Hero() {
  const { ref: refImage, inView: inviewImage } = useInView({
    rootMargin: "-50px",
    threshold: 0,
  });

  const { ref: refText, inView: inviewText } = useInView({
    rootMargin: "-50px",
    threshold: 0,
  });

  return (
    <div className="bg-gray-100">
      <section className="text-white pt-24 pb-24 bg-gradient-black min-h-screen flex items-center clip-section-bottom">
        <Container className="px-8 pl-16 md:px-8 md:pl-8">
          <div className="grid md:grid-cols-2 gap-4 md:gap-0">
            <div
              ref={refImage}
              className={`md:px-8 flex 
            ${inviewImage ? "transition-down" : "opacity-0"}`}
            >
              <div className="w-52 h-52 md:w-96 md:h-96 inline-block md:m-auto m-auto mr-0 relative clip cursor-pointer hover:scale-110 transition-all duration-500 ease-in-out grayscale hover:grayscale-0 overflow-hidden">
                <div className={`w-full h-full block m-auto relative`}>
                  <div className="absolute top-0 left-0 w-full h-full block m-auto bg-orange-1"></div>
                  <Image
                    src={ImageSectionIntro}
                    layout="fill"
                    alt="Yusep Jaelani"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
            <div
              ref={refText}
              className={`text-right ${inviewText ? "transition-up" : "opacity-0"
                }`}
            >
              <h1
                className={`text-5xl md:text-8xl font-thin pb-4 border-b border-orange-1`}
              >
                Yusep Jaelani
              </h1>
              <h3 className="text-3xl my-5 italic font-light">Fullstack Developer</h3>
              <p className="font-light text-justify text-sm md:text-base">
                Experienced as a Fullstack Developer for more than 4 year. I
                would be very happy if the project was created using a component
                based framework such as VueJS or ReactJs. It is my favorite
                Frontend Framework. Somethimes I Could be a Backend Developer,
                {` I've`} used Laravel, Python and NodeJs as the backend
                framework.
                <br />
                <br />
              </p>

              <p className="animate-bounce">
                <a
                  className="text-orange-1 hover:text-white cursor-pointer"
                  href="mailto:yusepjaelani861@gmail.com"
                >
                  <span className="text-sm underline">
                    Available for freelance project!
                  </span>
                </a>
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
