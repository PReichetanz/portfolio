"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <h2>Lass&apos; uns was zusammen bauen!</h2>
        <p>
          Kontaktiere mich gern, wenn Du nach einem Entwickler suchst, eine
          Frage hast oder Dich ganz einfach vernetzen möchtest!
        </p>
        <a href="mailto:hallo@paulreichetanz.de">hallo@paul.reichetanz.de</a>
      </main>
      <Footer />
    </>
  );
}
