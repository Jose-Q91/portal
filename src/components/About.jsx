const About = () => {

    const aboutItems = [
        {
            label: 'Proyectos Hechos',
            number: 25
        },
    ];
    return (
        <section
            id='about'
            className='section'>
            <div className="container">
                <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
                    <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                        Soy Técnico en Analista en Sistemas y Desarrollador Full Stack con experiencia en el desarrollo de aplicaciones web y móviles. Me apasiona crear soluciones tecnológicas robustas, funcionales y centradas en el usuario, combinando tanto el diseño como la lógica de negocio.
                        Trabajo con tecnologías modernas y buenas prácticas de desarrollo para garantizar productos escalables, seguros y de alto rendimiento. Me considero una persona proactiva, en constante aprendizaje, orientada a la calidad y a la mejora continua.
                        Mi objetivo es aportar valor real a cada proyecto en el que participo, ya sea de manera individual o en equipo.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 md:gap-7">
                        {
                            aboutItems.map(({ label, number }, key) => {
                                return (<div key={key}>
                                    <div className='flex items-center md:mb-2'>
                                        <span className='text-2xl font-semibold md:text-4xl'>{number}</span>
                                        <span className='text-sky-400 font-semibold md:text-3xl'>+</span>
                                    </div>
                                    <p className='text-sm text-zinc-400'>{label}</p>
                                </div>)
                            })
                        }
                    </div>
                    <img
                        src="/images/logo.png"
                        alt="Logo"
                        width={30}
                        height={30}
                        className='ml-auto md:w-[40px] md:h-[40px]' />
                </div>
            </div>
        </section>
    )
}

export default About