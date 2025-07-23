import React from 'react'
import SkillCard from './SkillCard';

const skillItem = [
  {
    imgSrc: '/images/css3.svg',
    label: 'CSS',
    desc: 'Estilos web'
  },
  {
    imgSrc: '/images/expressjs.svg',
    label: 'ExpressJS',
    desc: 'Framework para Node'
  },
  {
    imgSrc: '/images/html.svg',
    label: 'HTML',
    desc: 'Estructura web'
  },
  {
    imgSrc: '/images/java.svg',
    label: 'Java',
    desc: 'Lenguaje OOP'
  },
  {
    imgSrc: '/images/javascript.svg',
    label: 'JavaScript',
    desc: 'Interactividad web'
  },
  {
    imgSrc: '/images/jquery.svg',
    label: 'Jquery',
    desc: 'DOM fácil'
  },
  {
    imgSrc: '/images/mysql.svg',
    label: 'MySQL',
    desc: 'Base de datos'
  },
  {
    imgSrc: '/images/nodejs.svg',
    label: 'NodeJS',
    desc: 'JS en servidor'
  },
  {
    imgSrc: '/images/php.svg',
    label: 'PHP',
    desc: 'Web backend'
  },
  {
    imgSrc: '/images/powerbi.svg',
    label: 'Power BI',
    desc: 'Visualización datos'
  },
  {
    imgSrc: '/images/python.svg',
    label: 'Python',
    desc: 'Multipropósito'
  },
  {
    imgSrc: '/images/react.svg',
    label: 'React',
    desc: 'UI dinámica'
  },
  {
    imgSrc: '/images/sqlserver.svg',
    label: 'SQL Server',
    desc: 'BD de Microsoft'
  },
  {
    imgSrc: '/images/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'CSS utilitario'
  },
  {
    imgSrc: '/images/ts.svg',
    label: 'TypeScript',
    desc: 'JS tipado'
  }
];



const Skill = () => {
  return (
    <section className='section'>
        <div className='container'>
            <h2 className='headline-2'>
                Herramientas esenciales que domino
            </h2>
            <p className='text-zinc-400 mt-3 mb-8 max-w-[50ch]'>
                Descubre las potentes herramientas y tecnologías que utilizo para crear sitios web y aplicaciones excepcionales y de alto rendimiento.
            </p>
            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {
                    skillItem.map(({imgSrc, label, desc}, key)=>(
                        <SkillCard
                        key={key}
                        imgSrc={imgSrc}
                        label={label}ç
                        desc={desc}/>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Skill