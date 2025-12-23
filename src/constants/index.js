import project1 from "../assets/projects/reactgram.png";
import project2 from "../assets/projects/miniblog.png";
import project3 from "../assets/projects/gym.png";
import project4 from "../assets/projects/cine.png";
import project5 from "../assets/projects/jm.png";

export const HERO_CONTENT = `Sou um desenvolvedor full stack apaixonado por tecnologia e busco adquirir mais conhecimento cada dia. Aprimoro cada dia mais minhas habilidades em tecnologias front-end, como React, assim como em tecnologias back-end, como JavaScript (foco em Node.js) e Java (foco em Spring Boot). Meu objetivo é evoluir cada dia mais para criar soluções inovadoras que impulsionem o crescimento dos negócios e proporcionem uma boa experiência aos usuários.`;

export const ABOUT_TEXT = ``;

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
    title: "JM Locações",
    image: project5,
    description:
      "Projeto de conclusão de curso de um sistema de gestão de locação de veículos. A aplicação inclui login e gerenciamento de clientes, controle de locações, multas e pedágios, gestão de pagamentos, emissão de comprovantes e aplicação de boas práticas de segurança e conformidade com a LGPD.",
    technologies: ["React", "Spring Boot", "MySQL"],
    git: "https://github.com/MarcoViniciusCunha/PFC_SI_JMLOCACOES.git",
    video:
      "https://drive.google.com/file/d/1yiE0LehDyiJBIO_ob6VSzRCrrpwIZ4Gb/view?usp=drive_link",
  },
  {
    title: "ReactGram Website",
    image: project1,
    description:
      "Projeto de uma rede social. O sistema inclui funcionalidades como autenticação de usuários, criação de postagens, interações sociais (curtir, comentar) e integração com APIs.",
    technologies: ["React", "Node.js", "MongoDB"],
    git: "https://github.com/MarcoVCunha/Rede-social",
  },
  {
    title: "MiniBlog Website",
    image: project2,
    description:
      "Projeto de um blog. O sistema inclui funcionalidades como autenticação de usuários, criação de postagens, edição de postagem, página do usuário, Home, DashBoard e pesquisa.",
    technologies: ["React", "Firebase", "Node.js"],
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
  {
    title: "Biblioteca de filmes",
    image: project4,
    description:
      "Projeto de uma biblioteca de filmes usando a api TMDB e react.js. Funcionalidades de pesquisa e ver detalhes de um filme.",
    technologies: ["React"],
    git: "https://github.com/MarcoVCunha/MovieLib",
    link: "https://cinelib-three.vercel.app",
  },
];

export const CONTACT = {
  address: "Mogi das Cruzes - SP",
  phoneNo: "+55 11 97999-5695",
  zapvizual: "+55 11 93077-2138",
  zap: "5511930772138",
  email: "marcoviniciuscunha@gmail.com",
};
