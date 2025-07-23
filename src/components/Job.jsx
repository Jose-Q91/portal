import React from 'react'
import JobCard from './JobCard'

const jobs = [
  {
    companyLogo: '/images/codoacodo.png',
    position: 'Desarrollador Full Stack Java - Proyecto Final Codo a Codo 4.0',
    companyName: 'Codo a Codo 4.0 (Agencia de Aprendizaje a lo largo de la vida)',
    startDate: "Mar 2023",
    endDate: 'Jul 2023',
    description: 'Durante el Proyecto Final de Codo a Codo 4.0, desarrollé una plataforma interactiva para la gestión de oradores especializados. Poseo habilidades en la ',
    tags: ['Java', 'Maven', 'MySql', 'Servlets', 'HTML5', ' CSS3', 'Bootstrap', 'JavaScript', 'Vue.js'],
    companyLink: 'https://www.linkedin.com/in/joseluisquispe/overlay/1723872521762/single-media-viewer/?'
  },
  {
    companyLogo: '/images/digitalhouse.png',
    position: 'Desarrollador Full Stack - Proyecto Final Digital House',
    companyName: 'Digital House',
    startDate: "Mar 2020",
    endDate: 'Aug 2020',
    description: 'Desarrollo de e-commerce de insumos para computadoras - All Hardware',
    tags: ['React', 'Node.js', 'MySql', 'Express', 'JavaScript', 'Sequelize'],
    companyLink: 'https://techsolutions.com'
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