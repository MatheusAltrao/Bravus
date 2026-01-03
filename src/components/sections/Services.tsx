import ServiceCard from "../cards/serviceCard/ServiceCard";

const Services = () => {
  return (
    <section id="services">
      <header>
        <h2 className="title text-left md:text-center">Descubra a variedade de treinamentos </h2>
        <p className="description text-left md:text-center">
          Na academia <span className="font-black">Black Ops</span>, oferecemos uma ampla gama de serviços de treinamento de Jiu Jitsu para atender a
          todas as idades e níveis de habilidade.{" "}
        </p>
      </header>

      <div className="flex items-start justify-center md:flex-row md:justify-between gap-8 flex-col">
        <ServiceCard
          title="Kimono"
          subtitle="Jiu-Jitsu tradicional"
          description="O kimono é a armadura e a arma do praticante de Jiu Jitsu. Isso quer dizer
                    que ele pode ser usado como ferramenta de ataque e, também, de defesa.
                    Aprenda técnicas clássicas, consolidadas há milênios, sem deixar de lado a
                    inovação e a modernidade que o Jiu Jitsu criou através dos anos.  "
        />

        <ServiceCard
          title="Nogi"
          subtitle="Treino NO GI (sem kimono):"
          description="NO GI significa ‘’sem kimono’’. Ou seja, o Jiu Jitsu NO GI é a prática da
          arte marcial sem o kimono.
          Você aprenderá técnicas de combate corpo a corpo de maneira mais
          dinâmica, e muitas vezes mais parecida com as situações cotidianas fora do
          tatame. Explore e aprimore sua capacidade física e mental!"
        />

        <ServiceCard
          title="Kids"
          subtitle="Crescendo com confiança e disciplina"
          description="Nada, nem ninguém, pode substituir a educação que é oferecida pela
          família, em casa. Contudo, o Jiu-Jitsu é ótimo para fazer com que as crianças
          aprendam muito sobre o respeito, a disciplina, a coragem, a hierarquia e a
          paciência. Além disso, no cotidiano dos treinos, as crianças desenvolverão
          habilidades capazes de fortificar seus corpos e suas mentes; aprenderão nos
          pequenos ensinamentos os valores da vitória e os aprendizados da derrota. "
        />
      </div>
    </section>
  );
};

export default Services;
