'use client';
import "../../styles/globals.css";
import HomeStyle from "../../styles/home.module.css"

export default function handler() {
  return (
    <div>
      <Top />
      <Content />
      <Footer />
    </div>
  )
}

function Top() {
  return (
    <div>
      <div className={HomeStyle.top}>
        <div>
          <img src="https://www.ba.senac.br/assets/template/images/senac_logo_branco.png" alt="Senac Logo" />
          <h1>Projetos Alunos Senac</h1>
        </div>
      </div>
    </div>
  )
}


function Content() {
  return (
    <>
      <div className={HomeStyle.content}>
        <h2>Sobre nós</h2>
        <div className={HomeStyle.contentBox}>
          <p>
            &#160; A turma Front-End do <strong>SENAC</strong> (2023.29.6) é composta por alunos talentosos e apaixonados por tecnologia. Cada um deles possui habilidades únicas em programação, design, e desenvolvimento web, e estão sempre em busca de novos desafios para aprimorar seus conhecimentos.<br />
            &#160; Ao longo do curso, os alunos desenvolveram projetos, com objetivos claros, metodologias bem estruturadas e resultados surpreendentes. Eles enfrentaram desafios, encontraram soluções criativas e aprenderam lições valiosas ao longo do processo.
          </p>
          <img src="https://iili.io/JCGyYAJ.png" alt="" />
        </div>
      </div>
      <div className={HomeStyle.projectsContent}>
        <h2>Projetos dos Alunos </h2>
        <ProjectList />
      </div>
    </>
  )
}

function ProjectList() {
  const projects = [
    {
      projectName: "Donut Delights",
      author: "Marco Antonio",
      projectUrl: "https://github.com/tonho991/aula-front-senac",
      projectIcon: "https://raw.githubusercontent.com/tonho991/aula-front-senac/main/favicon.ico",
    },
    {
      projectName: "Blog",
      author: "Maria Lara",
      projectUrl: "https://github.com/tainamlara/041023",
      projectIcon: "https://avatars.githubusercontent.com/u/146250293",
    }
  ];

  return (
    <>
      {
        projects.map(data => {
          return (
            <div className={HomeStyle.projectBox} key="notunique" onClick={() => { loadUrl(data.projectUrl) }}>
              <img src={data.projectIcon} alt="Project Icon" />
              <div className={HomeStyle.projectInfo}>
                <h3>{data.projectName}</h3>
                <p>Desenvolvido por: <strong>{data.author}</strong> </p>
              </div>
            </div>
          )
        })
      }
    </>
  );
}

function Footer() {
  return (
    <div className={HomeStyle.footer}>
      <p>
        Desenvolvido por Marco Antonio
      </p>
      <div id="dropmenu" className={HomeStyle.gitUser} onClick={() => { loadUrl("https://github.com/tonho991") }}>
        <img className={HomeStyle.gitProfile} src="https://avatars.githubusercontent.com/u/67771574?s=96&v=4" />
        tonho991
      </div>
    </div>
  )
}

function loadUrl(url: string) {
  window.location.href = url
}