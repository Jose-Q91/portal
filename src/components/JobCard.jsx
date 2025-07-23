import PropTypes from "prop-types"
import { formatDate } from "../utils/date"

const JobCard = ({
    companyLogo, position, companyName, startDate, endDate, description, tags, companyLink
}) => {
    return (
        <div className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative before:absolute before:bottom-0 before:top-[5rem] before:left-10 before:w-[1px] before:h-[calc(100%-70px)] dark:before:bg-zinc-800 before:bg-zinc-800">
            <a href={companyLink} className="grid place-items-center bg-zinc-800/50  border dark:border-zinc-800 border-zinc-800 min-h-[80px] min-w-[80px] p-2 rounded-md overflow-clip relative"
>
                <img
                    src={companyLogo}
                    alt={position}
                    width={50}
                    height={50}
                    className="object-cover duration-300" />
            </a>
            <div className="flex flex-col items-start">
                <h3 className="text-xl font-semibold">{position}</h3>
                <p>{companyName}</p>
                <time className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">
                    {formatDate(startDate)} -{" "}
                    {endDate ? (
                        formatDate(endDate)
                    ) : (
                        <span className="dark:text-primary-color text-sky-400">
                            Actualidad
                        </span>
                    )}
                </time>
                <p className="tracking-tight text-zinc-400 my-4">
                    {description}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="h-8 text-zinc-400 bg-zinc-50/5 text-sm px-2 py-1 rounded-lg"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

JobCard.propTypes = {
    companyLogo: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    companyLink: PropTypes.string.isRequired,
}


export default JobCard