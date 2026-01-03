import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Black Ops Jiu Jitsu - Três Lagoas",
    short_name: "Black Ops",
    description: "Aulas de jiu-jitsu em Três Lagoas: defesa pessoal, kickboxing e turmas para crianças e feminino.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#111111",
  };
}
