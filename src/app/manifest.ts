import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Miloš Dimitrijević Portfolio",
    short_name: "MD Portfolio",
    description:
      "Portfolio of Miloš Dimitrijević, a full-stack web developer from Serbia.",
    start_url: "/",
    display: "standalone",
    background_color: "#070806",
    theme_color: "#d7ff38",
  };
}