import Image from "next/image";
import Container from "@/components/basic/container";

import ImageHTML5 from "@/public/assets/images/logo/html5.png";
import ImageCSS from "@/public/assets/images/logo/css-3.png";
import ImageJavascript from "@/public/assets/images/logo/javascript.png";
import ImageTailwind from "@/public/assets/images/logo/tailwind.png";
import ImagePHP from "@/public/assets/images/logo/php.png";
import ImageNodeJS from "@/public/assets/images/logo/nodejs.png";
import ImageBulma from "@/public/assets/images/logo/bulma.png";
import ImageBootstrap from "@/public/assets/images/logo/bootstrap.png";
import ImageLaravel from "@/public/assets/images/logo/laravel.png";
import ImageNuxt from "@/public/assets/images/logo/nuxt.png";
import ImageNext from "@/public/assets/images/logo/next.png";
import ImageDrupal from "@/public/assets/images/logo/drupal.png";
import ImageVue from "@/public/assets/images/logo/vue.png";
import ImageReact from "@/public/assets/images/logo/react.png";
import ImageMysql from "@/public/assets/images/logo/mysql.png";
import ImagePostgre from "@/public/assets/images/logo/postgre.png";
import ImageMongo from "@/public/assets/images/logo/mongo.png";
import ImageRedis from "@/public/assets/images/logo/redis.png";
import { useInView } from "react-intersection-observer";

export default function Skills() {
  const { ref: contentRef, inView: inviewSection } = useInView({
    rootMargin: "-50px",
    threshold: 0,
  });

  return (
    <div className="bg-gray-100">
      <section className="bg-gradient-black pb-16 text-white min-h-screen flex items-center clip-section-bottom">
        <Container>
          <div
            ref={contentRef}
            className={`w-full m-auto px-8 pl-16 md:px-8 md:pl-8 lg:w-3/4 ${
              inviewSection ? "transition-up" : "opacity-0"
            }`}
          >
            <div className="flex justify-end">
              <h2 className="text-right font-bold text-3xl mb-8 itali border-b border-orange-1 pb-3 w-52">
                Skills..
              </h2>
            </div>
            <div
              className={`gap grid grid-cols-2 md:grid-cols-3 font-thin mt-16 gap-2 `}
            >
              <div className="flex justify-end">
                <div>
                  <h5 className="text-sm md:text-base font-bold mb-4 text-right border-b border-orange-1">
                    Frontend Basic Skills:
                  </h5>
                  <div className="flex flex-wrap w-full text-xs justify-end">
                    <div className="mb-4 ml-4 h-10 w-10 bg-white rounded p-1 border border-orange-1">
                      <Image src={ImageHTML5} alt="html" layout="responsive" />
                    </div>
                    <div className="mb-4 ml-4 h-10 w-10 bg-white rounded p-1 border border-orange-1">
                      <Image src={ImageCSS} alt="css" layout="responsive" />
                    </div>
                    <div className="mb-4 ml-4 h-10 w-10 bg-white rounded p-1 border border-orange-1">
                      <Image
                        src={ImageJavascript}
                        alt="javascript"
                        layout="responsive"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="mb-8">
                  <h5 className="text-sm md:text-base font-bold mb-4 text-right border-b border-orange-1">
                    CSS Framework Skills:
                  </h5>
                  <div className="flex flex-wrap w-full text-xs justify-end">
                    <div className="mb-4 ml-4 h-10 w-10 bg-white rounded p-1 border border-orange-1 flex items-center">
                      <div className="block w-full">
                        <Image
                          src={ImageTailwind}
                          alt="tailwind"
                          layout="responsive"
                        />
                      </div>
                    </div>
                    <div className="mb-4 ml-4 h-10 w-10 bg-white rounded p-1 border border-orange-1 flex items-center">
                      <div className="block w-full">
                        <Image
                          src={ImageBulma}
                          alt="Bulma"
                          layout="responsive"
                        />
                      </div>
                    </div>
                    <div className="mb-4 ml-4 h-10 w-10 bg-white rounded p-1 border border-orange-1">
                      <Image
                        src={ImageBootstrap}
                        alt="Bootstrap"
                        layout="responsive"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <div className="mb-8">
                  <h5 className="text-sm md:text-base font-bold mb-4 text-right border-b border-orange-1">
                    SPA Framework Skills:
                  </h5>
                  <div className="flex flex-wrap w-full text-xs justify-end">
                    <div className="mb-4 ml-4 h-10 w-10 bg-white rounded p-1 border border-orange-1">
                      <Image src={ImageVue} alt="Vue" layout="responsive" />
                    </div>
                    <div className="mb-4 ml-4 h-10 w-10 bg-white rounded p-1 border border-orange-1">
                      <Image src={ImageReact} alt="React" layout="responsive" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <div className="mb-8">
                  <h5 className="text-sm md:text-base font-bold mb-4 text-right border-b border-orange-1">
                    Backend Basic Skills:{" "}
                  </h5>
                  <div className="flex flex-wrap w-full text-xs justify-end">
                    <div className="mb-4 ml-4 h-10 w-10 bg-white rounded p-1 border border-orange-1">
                      <Image src={ImagePHP} alt="php" layout="responsive" />
                    </div>
                    <div className="mb-4 ml-4 h-10 w-10 bg-white rounded p-1 border border-orange-1">
                      <Image
                        src={ImageNodeJS}
                        alt="nodejs"
                        layout="responsive"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <div className="mb-8">
                  <h5 className="text-sm md:text-base font-bold mb-4 text-right border-b border-orange-1">
                    SSR Framework:{" "}
                  </h5>
                  <div className="flex flex-wrap w-full text-xs justify-end">
                    <div className="mb-4 ml-4 h-10 w-10 bg-white rounded p-1 border border-orange-1">
                      <Image
                        src={ImageLaravel}
                        alt="Laravel"
                        layout="responsive"
                      />
                    </div>
                    <div className="mb-4 ml-4 h-10 w-10 bg-white rounded p-1 border border-orange-1 flex items-center">
                      <div className="w-full block">
                        <Image src={ImageNuxt} alt="Nuxt" layout="responsive" />
                      </div>
                    </div>
                    <div className="mb-4 ml-4 h-10 w-10 bg-white rounded p-1 border border-orange-1 flex items-center">
                      <div className="block w-full">
                        <Image src={ImageNext} alt="Next" layout="responsive" />
                      </div>
                    </div>
                    <div className="mb-4 ml-4 h-10 w-10 bg-white rounded p-1 border border-orange-1">
                      <Image
                        src={ImageDrupal}
                        alt="Drupal"
                        layout="responsive"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <div className="mb-8">
                  <h5 className="text-sm md:text-base font-bold mb-4 text-right border-b border-orange-1">
                    Database Skills:{" "}
                  </h5>
                  <div className="flex flex-wrap w-full text-xs justify-end">
                    <div className="mb-4 ml-4 h-10 w-10 bg-white rounded p-1 border border-orange-1">
                      <Image src={ImageMysql} alt="Mysql" layout="responsive" />
                    </div>
                    <div className="mb-4 ml-4 h-10 w-10 bg-white rounded p-1 border border-orange-1">
                      <Image
                        src={ImagePostgre}
                        alt="Postgre"
                        layout="responsive"
                      />
                    </div>
                    <div className="mb-4 ml-4 h-10 w-10 bg-white rounded p-1 border border-orange-1">
                      <Image src={ImageMongo} alt="Mongo" layout="responsive" />
                    </div>
                    <div className="mb-4 ml-4 h-10 w-10 bg-white rounded p-1 border border-orange-1">
                      <Image src={ImageRedis} alt="Redis" layout="responsive" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
