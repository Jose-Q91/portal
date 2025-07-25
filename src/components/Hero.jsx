import { ButtonOutline, ButtonPrimary } from './Button'

const Hero = () => {
  return (
    <section 
    id='home'
    className='pt-28 lg:pt-36'
    >
        <div className='container lg:grid lg:grid-cols-2 items-center lg:gap-10'>
            <div>
                <div className='flex items-center gap-3'>
                    <figure className='img-box w-9 h-9 rounded-lg'>
                        <img 
                        src="/images/jose.jpg"
                        width={40}
                        height={40} 
                        alt="Jose" />
                    </figure>
                    <div className='flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide'>
                        <span className='relative w-2 h-2 rounded-full bg-emerald-400'>
                            <span className='absolute inset-0 rounded-full bg-emerald-400 animate-ping'></span>
                        </span>
                        Disponible
                    </div>
                </div>
                <h2 className='headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10'>
                    Quispe Surculento José Luis
                </h2>
                <div className='flex items-center gap-3'>
                    <ButtonPrimary
                    href="/cv/Jose-Luis-Quispe-Curriculum.pdf"
                    label= "Descargar CV"
                    icon= "download" />

                    <ButtonOutline
                    href="#about"
                    label="Ir hacia abajo"
                    icon= "arrow_downward" />
                </div>
            </div>

            <div className='hidden lg:block'>
                <figure className='w-full max-w-[480px] ml-auto rounded-[60px] overflow-hidden'>
                    <img 
                    src="/images/joseperfil6.png"
                    width={656}
                    height={800}
                    alt="Jose Luis Quispe"
                    className='w-full' />
                </figure>
            </div>
        </div>

    </section>
  )
}

export default Hero
