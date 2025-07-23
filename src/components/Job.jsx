import React from 'react'
import JobCard from './JobCard'

const jobs = [
    {
    companyLogo: '/images/escuela-da-vinci.png',
    position: 'Tesis Final - Analista en Sistemas',
    companyName: 'Escuela Da Vinci',
    startDate: "Ene 2025",
    endDate: '',
    description: 'El proyecto se está desarrollando en equipo e incluye planificación, gestión, documentación, diseño y desarrollo de un e-commerce multiplataforma para una tienda de perfumes - Eterea Parfums.',
    tags: ['C#', '.Net', 'Sql Server', 'HTML5', ' CSS3', 'Bootstrap', 'JavaScript', 'jquery', 'Android', 'Jira'],
    companyLink: 'https://davinci.edu.ar/'
  },
  {
    companyLogo: '/images/codoacodo.png',
    position: 'Desarrollador Full Stack Java - Proyecto Integrador',
    companyName: 'Codo a Codo 4.0 (Agencia de Aprendizaje a lo largo de la vida)',
    startDate: "Mar 2023",
    endDate: 'Jul 2023',
    description: 'Durante el Proyecto Integrador de Codo a Codo 4.0, desarrollé una plataforma interactiva para la gestión de oradores especializados en tecnología.',
    tags: ['Java', 'Maven', 'MySql', 'Servlets', 'HTML5', ' CSS3', 'Bootstrap', 'JavaScript', 'Vue.js'],
    companyLink: 'https://buenosaires.gob.ar/noticias/inscribite-codo-codo'
  },
  {
    companyLogo: '/images/digitalhouse.png',
    position: 'Desarrollador Full Stack - Proyecto Integrador',
    companyName: 'Digital House',
    startDate: "Mar 2020",
    endDate: 'Aug 2020',
    description: 'Desarrollo de e-commerce de insumos para computadoras - All Hardware',
    tags: ['Node.js', 'MySql', 'Express', 'JavaScript', 'Sequelize', 'Trello'],
    companyLink: 'https://www.digitalhouse.com/ar'
  },
]

const Job = () => {
  return (
    <section className="section"
    id='work'>
      <div className="container">
        <h2 className="headline-2 mb-8">
          Experiencia Laboral
        </h2>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-12 gap-y-10">
          {jobs.map(({ companyLogo, position, companyName, startDate, endDate, description, tags, companyLink }, key) => (
            <JobCard
            key={key}
            companyLogo={companyLogo}
            position={position}
            companyName={companyName}
            startDate={startDate}
            endDate={endDate}
            description={description}
            tags={tags}
            companyLink={companyLink} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Job