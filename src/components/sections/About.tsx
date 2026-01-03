"use client";
import Image from "next/image";
import { useRef } from "react";
import "swiper/css";
import Logo from "../../../public/logoCircle.png";

const About = () => {
  const swiperMobile = useRef<any>(null);

  return (
    <section id="about">
      <div className="flex  justify-between md:flex-row flex-col-reverse gap-8">
        <div className=" space-y-4 lg:space-y-8">
          <h2 className="title">Sobre nós</h2>
          <div className="space-y-3">
            <p className="description max-w-[500px]">
              A academia <span className="font-black">Black Ops</span> foi fundada em abril de 2020, no auge de uma pandemia que deixaria sequelas por
              todo o mundo. Foi com muita fibra e vontade que seus professores, e poucos alunos à época, cresceram em meio à adversidade que se
              estendia, naquele momento, elevando o nível do Jiu Jitsu na cidade de Três Lagoas e região.
            </p>

            <p className="description max-w-[500px]">
              Nosso compromisso está sedimentado no profissionalismo e na metodologia de ensino que se volta a esclarecer quaisquer dúvidas de nossos
              alunos, no que diz respeito às técnicas aprendidas, virtudes desenvolvidas e graduações alcançadas.
            </p>

            <p className="description max-w-[500px]">
              Os professores e instrutores da Black Ops irão ajudá-lo a trilhar o verdadeiro Bushido (caminho do guerreiro), mediante as técnicas de
              combate e filosofia de vida de uma arte marcial milenar que, até os dias atuais, se prova eficiente em todas as áreas de nossas vidas: o
              Jiu Jitsu!
            </p>
          </div>
        </div>
        <div>
          <Image src={Logo} alt="Logo Black Ops Jiu Jitsu - Academia de artes marciais em Três Lagoas" priority />
        </div>
        {/*  <div className="grid grid-cols-2 w-full max-w-[500px] grid-rows-4 gap-4">
          <div className="rounded-lg col-span-2 row-span-2 bg-muted-foreground w-full object-cover"></div>
          <div className="rounded-lg col-span-1  row-span-2 bg-muted-foreground w-full object-cover"></div>
          <div className="rounded-lg col-span-1   row-span-2 bg-muted-foreground w-full object-cover"></div>
        </div> */}
        {/*  <Swiper
          ref={swiperMobile}
          onSwiper={(setSwiper) => (swiperMobile.current = setSwiper)}
          modules={[Navigation, Scrollbar, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          cssMode={true}
          spaceBetween={16}
          slidesPerView={1}
          className="w-full h-full select-none relative flex items-center justify-center mySwiper"
        >
          <SwiperSlide className="w-full  flex items-center justify-center">
            <div className="flex items-center h-[400px] w-full justify-center overflow-hidden border-inputs rounded-md ">
              <Image
                width={300}
                height={300}
                src={Logo}
                alt={`logo`}
                sizes="100vw"
                className="select-none"
                style={{
                  objectFit: 'cover',
                }}
              />
            </div>
          </SwiperSlide>

          <SwiperSlide className="w-full  flex items-center justify-center">
            <div className="flex items-center h-[400px] w-full justify-center overflow-hidden border-inputs rounded-md ">
              teste1
            </div>
          </SwiperSlide>
        </Swiper> */}
      </div>
    </section>
  );
};

export default About;
