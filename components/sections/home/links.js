import Image from "next/image";
import { ListLink } from "@/constants/list-links";
import Container from "@/components/basic/container";

export default function Links() {
  return (
    <section className="pb-16 bg-gradient-black min-h-screen flex items-center">
      <Container>
        <div className="w-full m-auto px-8 pl-16 md:px-8 md:pl-8 lg:w-3/4">
          <div className="flex justify-end text-white">
            <h2 className="text-right font-bold text-3xl mb-8 itali border-b border-orange-1 pb-3 w-52">
              Follow Me..
            </h2>
          </div>

          <div className="grid gap-8 grid-cols-3 md:grid-cols-4 text-white font-thin justify-center mt-16 pl-8 md:pl-0">
            {ListLink.map((item, key) => (
              <div key={key} className="block w-full text-center md:text-right">
                <div className="text-xs md:text-lg font-bold">
                  <a
                    className="hover:text-orange-1 inline-flex grayscale hover:grayscale-0 transition-all ease-in-out duration-300"
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="text-center">
                      <div className="h-8 w-8 md:h-16 md:w-16 inline-block m-auto">
                        <Image
                          src={item.image.src}
                          alt={item.image.alt}
                          layout="responsive"
                        />
                      </div>

                      <p className="mt-2">{item.title}</p>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
