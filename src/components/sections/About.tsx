import Image from 'next/image';
import Logo from '../../../public/logoCircle.png';

const About = () => {
  return (
    <section id="about">
      <div className="flex items-center justify-between md:flex-row flex-col-reverse gap-8">
        <div className=" space-y-4 lg:space-y-8">
          <h2 className="title">Sobre nós</h2>
          <div className="space-y-3">
            <p className="description max-w-[500px]">
              A escola <span className="font-black">Bravus</span> foi fundada em abril de 2020, no
              auge de uma pandemia que deixaria sequelas por todo o mundo. Foi com muita fibra e
              vontade que seus professores, e poucos alunos à época, cresceram em meio à adversidade
              que se estendia, naquele momento, elevando o nível do Jiu Jitsu na cidade de Três
              Lagoas e região.
            </p>

            <p className="description max-w-[500px]">
              Os professores e instrutores da Bravus irão ajudá-lo a trilhar o verdadeiro Bushido
              (caminho do guerreiro), mediante as técnicas de combate e filosofia de vida de uma
              arte marcial milenar que, até os dias atuais, se prova eficiente em todas as áreas de
              nossas vidas: o Jiu Jitsu!
            </p>
          </div>
        </div>

        <Image
          className="about-image  object-contain w-full max-w-[500px] h-[427px] "
          width={400}
          height={380}
          alt=""
          src={Logo}
          objectFit="contain"
        />
      </div>
    </section>
  );
};

export default About;
