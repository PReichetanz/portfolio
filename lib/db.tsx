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
    other?: [
      {
        url: string;
        alt: string;
      }
    ];
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
      long: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem repellat rem recusandae est ratione doloribus corrupti pariatur delectus consequatur repellendus harum minus molestiae assumenda, illo dignissimos facere mollitia id expedita?",
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
