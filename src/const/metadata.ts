import { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL as string;
export const keywordsMetadata = [
  "black ops jiu jitsu",
  "black ops jiu jitsu tres lagoas",
  "black ops jiu jitsu três lagoas",
  "aulas de jiu jitsu",
  "aulas de jiu-jitsu",
  "jiu jitsu tres lagoas",
  "jiu jitsu três lagoas",
  "defesa pessoal",
  "kickboxing",
  "jiu jitsu crianças",
  "jiu jitsu feminino",
];

export const categoryMetadata = "jiu-jitsu, jiu jitsu, artes marciais, defesa pessoal, kickboxing, crianças, feminino, três lagoas";

export const METADADATA_TAGS: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    template: "Black Ops Jiu Jitsu | %s",
    default: "Black Ops Jiu Jitsu - Três Lagoas",
  },

  description: "Black Ops Jiu Jitsu em Três Lagoas: aulas de jiu-jitsu, defesa pessoal, kickboxing e turmas para crianças e feminino.",
  icons: {
    icon: [
      {
        url: "/favicon.jpg",
      },
    ],
  },
  authors: [
    {
      name: "Black Ops Jiu Jitsu",
      url: BASE_URL,
    },
  ],
  twitter: {
    card: "summary_large_image",
    title: "Black Ops Jiu Jitsu - Três Lagoas",
    description: "Aulas de jiu-jitsu, defesa pessoal, kickboxing e turmas para crianças e feminino.",
    images: ["/logoCircle.png"],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: BASE_URL,
    title: "Black Ops Jiu Jitsu - Três Lagoas",
    description: "Aulas de jiu-jitsu, defesa pessoal, kickboxing e turmas para crianças e feminino.",
    siteName: "Black Ops Jiu Jitsu",
    images: [
      {
        url: "/logoCircle.png",
        width: 512,
        height: 512,
        alt: "Black Ops Jiu Jitsu - Três Lagoas",
      },
    ],
  },
  robots: "index, follow",
  alternates: {
    canonical: BASE_URL,
    languages: {
      "pt-BR": "/",
    },
  },
  keywords: keywordsMetadata,
  category: categoryMetadata,
};
