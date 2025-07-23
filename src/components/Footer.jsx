import { ButtonPrimary } from "./Button"
const sitemap = [
  {
    label: 'Inicio',
    href: '#home'
  },
  {
    label: 'Sobre Mí',
    href: '#about'
  },
  {
    label: 'Experiencia',
    href: '#work'
  },
  {
    label: 'Portafolio',
    href: '#portafolio'
  },
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/Jose-Q91'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/joseluisquispe'
  },
  {
    label: 'Twitter X',
    href: '#'
  },
  {
    label: 'Instagram',
    href: '#'
  },
];
const Footer = () => {
  return (
<footer id="contact" className="section">
  <div className="container">

    <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:items-center lg:gap-x-20">
      <div>
        <h2 className="headline-2 mb-6 lg:max-w-[12ch]">
          Contactemos
        </h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          Mi bandeja de entrada siempre está abierta.
          Si tenés alguna pregunta o propuesta, no dudes en escribirme.
          Haré todo lo posible por responderte lo antes posible.
        </p>
        <ButtonPrimary 
          href="mailto:joseluis.quispe_91@hotmail.com"
          label="Escríbeme"
          icon="chevron_right"
        />
      </div>

      <div className="grid grid-cols-2 gap-6 lg:gap-10">
        <div>
          <p className="mb-2 font-medium text-zinc-300">Sitios</p>
          <ul>
            {sitemap.map(({ label, href }, key) => (
              <li key={key}>
                <a 
                  href={href}
                  className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-2 font-medium text-zinc-300">Redes Sociales</p>
          <ul>
            {socials.map(({ label, href }, key) => (
              <li key={key}>
                <a 
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    <div className="flex items-center justify-between pt-10 my-10 border-t border-zinc-800">
      <a href="/">
        <img 
          src="/images/logo.png"
          width={40}
          height={40}
          alt="Logo"
        />
      </a>
      <p className="text-zinc-500 text-sm">
        &copy; 2025 <span className="text-zinc-200">José Luis QS</span>
      </p>
    </div>

  </div>
</footer>

  )
}

export default Footer