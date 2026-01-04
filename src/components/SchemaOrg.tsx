export default function SchemaOrg() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    "@id": "https://blackopsjj.com.br/#organization",
    name: "Black Ops Jiu Jitsu",
    description: "Academia de Jiu Jitsu em Três Lagoas: aulas de jiu-jitsu, defesa pessoal, kickboxing e turmas para crianças e feminino.",
    url: "https://blackopsjj.com.br",
    telephone: "+55-67-92769576",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Dr. Eloy Chaves, 1463",
      addressLocality: "Três Lagoas",
      addressRegion: "MS",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-20.7818128",
      longitude: "-51.6993147",
    },
    priceRange: "$$",
    sport: "Jiu-Jitsu",
    sameAs: ["https://www.instagram.com/blackopsjiujitsu/"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Wednesday", "Friday"],
        opens: "05:00",
        closes: "20:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Thursday"],
        opens: "05:00",
        closes: "20:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "16:00",
        closes: "17:30",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Modalidades",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Jiu Jitsu Kimono",
            description: "Aulas de Jiu-Jitsu tradicional com kimono para todos os níveis",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Jiu Jitsu No-Gi",
            description: "Treino de Jiu-Jitsu sem kimono, mais dinâmico e voltado para MMA",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Kickboxing",
            description: "Aulas de kickboxing para condicionamento físico e defesa pessoal",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Jiu Jitsu Kids",
            description: "Aulas de Jiu-Jitsu para crianças de 4 a 12 anos",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Jiu Jitsu Feminino",
            description: "Turmas exclusivas de Jiu-Jitsu para mulheres",
          },
        },
      ],
    },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />;
}
