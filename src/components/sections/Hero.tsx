import Link from 'next/link';

const Hero = () => {
  return (
    <section
      className="h-[100vh]   flex flex-col items-center justify-center "
      id="hero"
    >
      <header className="space-y-8">
        <h2 className=" text-center md:leading-[60px] font-semibold  text-3xl lg:text-[48px] ">
          Bravus Jiu-Jitsu
        </h2>
        <p className=" text-base lg:text-xl text-zinc-500 text-center max-w-[700px]">
          A missão da Bravus é forjar homens e mulheres fortes. Não somente fortes em força e
          técnica, para proteger-se e proteger aqueles que amam, mas forjá-los também por dentro.
        </p>
      </header>

      <Link
        target="_blank"
        href=" https://wa.me//556792769576?text=Quero%20agendar%20a%20minha%20aula%20de%20Jiu%20Jitsu"
      >
        <button className="btn-1">COMEÇAR AGORA!</button>
      </Link>
    </section>
  );
};

export default Hero;
