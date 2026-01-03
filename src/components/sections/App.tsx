import AppCard from "../cards/appCard/AppCard";

const App = () => {
  return (
    <section id="app">
      <header>
        <h2 className="title text-left md:text-center ">Nosso aplicativo</h2>
        <p className="description text-left md:text-center">
          Apresentamos o nosso novo aplicativo exclusivo, uma ferramenta completa para elevar sua jornada no mundo do Jiu Jitsu.
        </p>
      </header>
      <div className="flex items-center justify-center flex-col w-full space-y-4 md:space-y-8 max-w-[1000px] mx-auto">
        <div className="flex items-start md:flex-row flex-col justify-between gap-4 w-full">
          <AppCard
            title="Notícias e atualizações da Black Ops"
            description="Fique por dentro de tudo o que está acontecendo na nossa escola de Jiu-Jitsu. Receba as últimas notícias, anúncios de eventos, atualizações de horários e muito mais, tudo diretamente no seu dispositivo."
          />

          <AppCard
            title="Evolução na palma da sua mão"
            description="Com o aplicativo da Academia Black Ops, a evolução está literalmente em suas mãos. Acompanhe cada passo, desde o treinamento até a graduação, e experimente uma nova maneira de se envolver com nossa escola de Jiu-Jitsu."
          />
        </div>

        <div className="flex items-start md:flex-row flex-col justify-between gap-4 w-full">
          <AppCard
            title="Monitoramento de evolução e graduação"
            description="Mantenha-se no topo do seu progresso no Jiu-Jitsu com nosso aplicativo revolucionário! Acompanhe suas conquistas, registre suas sessões de treinamento e esteja sempre um passo à frente em sua jornada de evolução."
          />

          <AppCard
            title="Loja de kimonos e rash guards"
            description="Encontre os melhores equipamentos para elevar seu treinamento no nosso aplicativo. Explore uma variedade de kimonos de alta qualidade, rash guards estilosas e acessórios essenciais. Compras simplificadas e entregas diretamente na sua academia."
          />
        </div>
      </div>
    </section>
  );
};

export default App;
