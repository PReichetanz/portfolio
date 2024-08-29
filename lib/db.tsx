export type ProjectType = {
  id: number;
  slug: string;
  name: string;
  descriptions: {
    short: string;
    long: string;
  };
  urls: {
    deployment: string;
    github: string;
  };
  images: {
    main: {
      url: string;
      alt: string;
    };
    other?: {
      url: string;
      alt: string;
    }[];
  };
  techDetails: {
    projectType: string;
    tools: string[];
    previewTools: {
      name: string;
      iconURL: string;
    }[];
  };
  texts: {
    purpose: string[];
    stackExplanation: string[];
    problems: string[];
    lessonsLearned: string[];
  };
};

export const projects: ProjectType[] = [
  {
    id: 1,
    slug: "flachwitzgenerator",
    name: "Flachwitzgenerator",
    descriptions: {
      short: "Eine App, die einen zufällig ausgewählten Flachwitz anzeigt.",
      long: "Der Flachwitzgenerator ist eine React Applikation für Freunde des flachen Witzes. Ich habe dieses Projekt inklusive Design mit Nextjs, TypeScript und Styled-Components gebaut. Das besondere Augenmerk liegt darauf, keinen Witz zu wiederholen, bis alle angezeigt wurden.",
    },
    urls: {
      deployment: "https://wordplay-nu.vercel.app",
      github: "https://github.com/PReichetanz/joke-of-the-day",
    },
    images: {
      main: {
        url: "/joke.png",
        alt: "Startbildschirm der Flachwitz-App",
      },
    },
    techDetails: {
      projectType: "Privates Projekt",
      tools: ["React / Next", "TypeScript", "Styled-Components", "Vercel"],
      previewTools: [
        {
          name: "Next.js",
          iconURL: "/logos/next.svg",
        },
        {
          name: "TypeScript",
          iconURL: "/logos/typescript.svg",
        },
        {
          name: "Vercel",
          iconURL: "/logos/vercel.svg",
        },
      ],
    },
    texts: {
      purpose: [
        "Das Projekt beinhaltete drei Phasen und Iterationen. In Phase 1 wurde dem Nutzenden ein zufälliger Witz angezeigt. Phase 2 fügte die Möglichkeit hinzu, die Anzahl der noch nicht gelesen Witze zu erkennen. Phase 3 war die komplexeste, weil hier das Hinzufügen neuer Witze ermöglicht wurde.",
        "Zur Einteilung der Phase und deren Priorisierung hat mir das Konzept des Lean Startup von Eric Ries sehr geholfen.",
      ],
      stackExplanation: [
        "Next machte am meisten Sinn für diese Applikation, da die Einarbeitungszeit denkbar gering war. TypeScript diente zur Sicherstellung der korrekten Typen und trug damit zur flüssigen Programmierung bei.",
        "React Hooks und Local Storage werden hier verwendet, um sicherzustellen, dass der nutzenden Person nur Witze angezeigt werden, die sie noch nicht gesehen hat. Vercel ist auch wegen seiner Schnelligkeit und Zuverlässigkeit eine naheliegende Wahl für das Deployment.",
      ],
      problems: [
        "Wie in vielen anderen Projekten auch bin ich auf viele Hürden gestoßen, speziell die Organisation und Struktur des Codes. Das Projekt ist nicht besonders groß, und doch wurde mir oft genug klar, wie wichtig eine organisierte Struktur war.",
        "Ich habe mich bemüht, die Komponenten frei von allgemeiner Logik zu halten, und diese in eigene Hooks ausgelagert. Ich habe auch Styled-Components verwendet, weil die Struktur von CSS-in-JS klarer ist und Überschreibungen verhindert.",
      ],
      lessonsLearned: [
        "Meine wichtigsten Erkenntnisse aus diesem Projekt sind das erweiterte Verständnis von eigenen React Hooks und TypeScript. Ich habe außerdem gesehen, wie schnell man bei der Benennung seiner Variablen und Funktionen zu Unklarheiten und Dopplungen kommt. Ich verbringe jetzt viel mehr Zeit mit dem Refactorieren und Verbessern jeder einzelnen Codezeile für bessere Lesbarkeit und weniger Kopfschmerzen.",
      ],
    },
  },
  {
    id: 2,
    slug: "beurteilungsbuddy",
    name: "Beurteilungsbuddy",
    descriptions: {
      short:
        "Eine App, die Lehrer:innen die Bewertung ihrer Schüler:innen erleichtert.",
      long: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem repellat rem recusandae est ratione doloribus corrupti pariatur delectus consequatur repellendus harum minus molestiae assumenda, illo dignissimos facere mollitia id expedita?",
    },
    urls: {
      deployment: "https://beurteilungsbuddy.vercel.app",
      github: "https://github.com/PReichetanz/beurteilungsbuddy",
    },
    images: {
      main: {
        url: "/beurteilungsbuddy-home.png",
        alt: "Startbildschirm der Beurteilungsbuddy-App",
      },
    },
    techDetails: {
      projectType: "Abschlussprojekt",
      tools: ["React", "Styled-Components", "TypeScript", "Vercel"],
      previewTools: [
        {
          name: "Next.js",
          iconURL: "/logos/next.svg",
        },
      ],
    },
    texts: {
      purpose: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, adipisci doloremque corrupti unde sequi impedit, officiis soluta repudiandae ut modi, inventore consequatur quod delectus asperiores tenetur rerum? Explicabo, velit autem?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, adipisci doloremque corrupti unde sequi impedit, officiis soluta repudiandae ut modi, inventore consequatur quod delectus asperiores tenetur rerum? Explicabo, velit autem?",
      ],
      stackExplanation: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, adipisci doloremque corrupti unde sequi impedit, officiis soluta repudiandae ut modi, inventore consequatur quod delectus asperiores tenetur rerum? Explicabo, velit autem?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, adipisci doloremque corrupti unde sequi impedit, officiis soluta repudiandae ut modi, inventore consequatur quod delectus asperiores tenetur rerum? Explicabo, velit autem?",
      ],
      problems: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, adipisci doloremque corrupti unde sequi impedit, officiis soluta repudiandae ut modi, inventore consequatur quod delectus asperiores tenetur rerum? Explicabo, velit autem?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, adipisci doloremque corrupti unde sequi impedit, officiis soluta repudiandae ut modi, inventore consequatur quod delectus asperiores tenetur rerum? Explicabo, velit autem?",
      ],
      lessonsLearned: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, adipisci doloremque corrupti unde sequi impedit, officiis soluta repudiandae ut modi, inventore consequatur quod delectus asperiores tenetur rerum? Explicabo, velit autem?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, adipisci doloremque corrupti unde sequi impedit, officiis soluta repudiandae ut modi, inventore consequatur quod delectus asperiores tenetur rerum? Explicabo, velit autem?",
      ],
    },
  },
  {
    id: 3,
    slug: "star-wars-battle-counter",
    name: "Star Wars Battle Counter",
    descriptions: {
      short: "Diese App hilft dabei, den Spielstand zu tracken.",
      long: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem repellat rem recusandae est ratione doloribus corrupti pariatur delectus consequatur repellendus harum minus molestiae assumenda, illo dignissimos facere mollitia id expedita?",
    },
    urls: {
      deployment: "https://star-wars-battles-counter.vercel.app",
      github: "https://github.com/PReichetanz/star-wars-battles-counter",
    },
    images: {
      main: {
        url: "/swbc-home.png",
        alt: "Startbildschirm der Flachwitz-App",
      },
    },
    techDetails: {
      projectType: "Privates Projekt",
      tools: [
        "React / Next",
        "Styled-Components",
        "MongoDB",
        "mongoose",
        "Vercel",
      ],
      previewTools: [
        {
          name: "Next.js",
          iconURL: "/logos/next.svg",
        },
      ],
    },
    texts: {
      purpose: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, adipisci doloremque corrupti unde sequi impedit, officiis soluta repudiandae ut modi, inventore consequatur quod delectus asperiores tenetur rerum? Explicabo, velit autem?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, adipisci doloremque corrupti unde sequi impedit, officiis soluta repudiandae ut modi, inventore consequatur quod delectus asperiores tenetur rerum? Explicabo, velit autem?",
      ],
      stackExplanation: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, adipisci doloremque corrupti unde sequi impedit, officiis soluta repudiandae ut modi, inventore consequatur quod delectus asperiores tenetur rerum? Explicabo, velit autem?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, adipisci doloremque corrupti unde sequi impedit, officiis soluta repudiandae ut modi, inventore consequatur quod delectus asperiores tenetur rerum? Explicabo, velit autem?",
      ],
      problems: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, adipisci doloremque corrupti unde sequi impedit, officiis soluta repudiandae ut modi, inventore consequatur quod delectus asperiores tenetur rerum? Explicabo, velit autem?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, adipisci doloremque corrupti unde sequi impedit, officiis soluta repudiandae ut modi, inventore consequatur quod delectus asperiores tenetur rerum? Explicabo, velit autem?",
      ],
      lessonsLearned: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, adipisci doloremque corrupti unde sequi impedit, officiis soluta repudiandae ut modi, inventore consequatur quod delectus asperiores tenetur rerum? Explicabo, velit autem?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, adipisci doloremque corrupti unde sequi impedit, officiis soluta repudiandae ut modi, inventore consequatur quod delectus asperiores tenetur rerum? Explicabo, velit autem?",
      ],
    },
  },
];
