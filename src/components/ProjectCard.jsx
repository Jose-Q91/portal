import PropTypes from "prop-types"
const ProjectCard = ({
    imgSrc,
    title,
    tags,
    projectLink,
    githubLink,
    videoLink,
    classes
}) => {
    return (
        <div className={"relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors"}>
            <figure className="relative img-box aspect-square rounded-lg mb-4">
                <img
                    src={imgSrc}
                    alt={title}
                    loading="lazy"
                    className="img-cover" />
                    {videoLink &&  <a
                    href={videoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-2 right-2 bg-white text-black rounded-full w-9 h-9 grid place-items-center shadow-lg hover:bg-zinc-600 hover:text-red-400 transition"
                    title="Ver video del proyecto"
                    >
                        <span className="material-symbols-rounded">video_library</span>

                    </a>}
                  
            </figure>

            <div className="flex items-center justify-between gap-4">
                <div>
                    <h3 className="title-1 mb-3">{title}</h3>
                    <div className="flex flex-wrap items-center gap-2">
                        {tags.map((label, key) => (
                            <span
                                key={key}
                                className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg">
                                {label}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-2 shrink-0">
                    <a
                        href={projectLink}
                        target="_blank"
                        className="w-11 h-11 rounded-lg grid place-items-center bg-sky-400 text-zinc-950">
                        <span className="material-symbols-rounded" aria-hidden="true">
                            arrow_outward
                        </span>
                    </a>
                    <a
                        href={githubLink}
                        target="_blank"
                        className="w-11 h-11 rounded-lg grid place-items-center bg-neutral-100 text-zinc-900">
                        <span className="material-symbols-rounded" aria-hidden="true">
                            code
                        </span>
                    </a>
                </div>
            </div>
        </div>

    )
}

ProjectCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    projectLink: PropTypes.string,
}

export default ProjectCard