import React from 'react'
import ProjectCard from './ProjectCard';
const works = [
  {
    imgSrc: '/images/allhardward.jpg',
    title: 'Full stack allhardward app',
    tags: ['E-commerce', 'MVC', 'Laravel'],
    projectLink: 'https://github.com/Jose-Q91/Tienda-Online-All-Hardward-con-Laravel'
  },
  {
    imgSrc: '/images/healthy.jpg',
    title: 'Full stack healthy app',
    tags: ['E-commerce', 'MVC', 'Flask'],
    projectLink: 'https://github.com/Jose-Q91/HealthyBite-con-Flask'
  },
  {
    imgSrc: '/images/oradores.jpg',
    title: 'Full stack oradores app',
    tags: ['Web-site', 'MVC', 'Java'],
    projectLink: 'https://github.com/Jose-Q91/App-Web-con-Java'
  },
  {
    imgSrc: '/images/ecommerce.jpg',
    title: 'E-Commerce Mario',
    tags: ['E-commerce', 'React + TypeScript'],
    projectLink: 'https://github.com/Jose-Q91/E-commerce-React'
  },
  {
    imgSrc: '/images/startgame.jpg',
    title: 'Startgame website',
    tags: ['API', 'Development', 'NodeJS'],
    projectLink: 'https://github.com/joseluisx10/Proyecto-gameStart-con-NodeJS'
  },
  {
    imgSrc: '/images/appeventos.jpg',
    title: 'Eventos Musicales App',
    tags: ['Web-site', 'MVC', 'PHP'],
    projectLink: 'https://github.com/Jose-Q91/Aplicacion-Web-de-Eventos-Musicales-con-PHP'
  },
  {
    imgSrc: '/images/allhardware.jpg',
    title: 'Full Stack AllHardware App',
    tags: ['E-commerce', 'MVC', 'NodeJS'],
    projectLink: 'https://github.com/matiasniedermaier/grupo_4_AllHardware'
  },
  {
    imgSrc: '/images/app-cajero.jpg',
    title: 'Cajero Automatico',
    tags: ['MVC', 'Java', 'Desktop'],
    projectLink: 'https://github.com/Jose-Q91/Cajero-Autom-tico'
  },
];

const Work = () => {
  return (
    <section 
    id='portafolio'
    className="section"
    >
        <div className="container">
            <h2 className="headline-2 mb-8">
                Mi Portafolio
            </h2>
            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {works.map(({imgSrc, title, tags, projectLink}, key)=> (
                    <ProjectCard 
                    key={key}
                    imgSrc={imgSrc}
                    title= {title} 
                    tags = {tags}
                    projectLink={projectLink}/>
                ))}
            </div>
        </div>

    </section>
  )
}

export default Work