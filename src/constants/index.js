import project1 from "../assets/projects/reactgram.png";
import project2 from "../assets/projects/miniblog.png";
import project3 from "../assets/projects/gym.png";

export const HERO_CONTENT = `Sou um desenvolvedor full stack apaixonado por tecnologia e busco adquirir mais conhecimento cada dia. Aprimoro cada dia mais minhas habilidades em tecnologias front-end, como React, assim como em tecnologias back-end, como Node.js, java, MySQL e MongoDB. Meu objetivo é evoluir cada dia mais para criar soluções inovadoras que impulsionem o crescimento dos negócios e proporcionem uma boa experiência aos usuários.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "",
    role: "",
    company: "",
    description: `Estudante em busca da primeira oportunidade de estágio na área de TI para mostrar meus conhecimentos e evoluir.`,
    technologies: [],
  },
];

export const PROJECTS = [
  {
    title: "ReactGram Website",
    image: project1,
    description:
      "Projeto de uma rede social. O sistema inclui funcionalidades como autenticação de usuários, criação de postagens, interações sociais (curtir, comentar) e integração com APIs.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    git: "https://github.com/MarcoVCunha/Rede-social",
  },
  {
    title: "MiniBlog Website",
    image: project2,
    description:
      "Projeto de um blog. O sistema inclui funcionalidades como autenticação de usuários, criação de postagens, edição de postagem, página do usuário, Home, DashBoard e pesquisa.",
    technologies: ["HTML", "CSS", "React", "Firebase"],
    git: "https://github.com/MarcoVCunha/Blog",
  },
  {
    title: "Gestão de academia",
    image: project3,
    description:
      "Projeto acadêmico de gestão de uma academia. O sistema inclui funcionalidades como autenticação (para alunos e instrutores) criar (apenas instrutores podem acessar), editar (apenas instrutores podem acessar), consultar e excluir (apenas instrutores podem) treinos. ",
    technologies: ["Java", "NetBeans", "mySQL"],
    git: "https://github.com/MarcoVCunha/Gestao-de-academia-",
  },
];

export const CONTACT = {
  address: "Rua Joaquim Martins Coelho 117, Mogi das Cruzes, SP",
  phoneNo: "+55 11 94046-3072 ",
  email: "marcoviniciuscunha@gmail.com",
};
