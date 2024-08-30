import HomeClient from "./page.client";

export const metadata = {
  title: {
    default: "Portfolio",
    template: '%s | PAUL'
  },
  description: "Portfolio der Frontendprojekte von Paul Reichetanz",
};

export default function Home() {
  return <HomeClient />;
}
