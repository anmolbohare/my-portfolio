import PropTypes from 'prop-types';

export default function Skill({ IconComponent, text, link }) {
  return (
    <div className="group w-24 mx-3 mt-4 mb-12">
      <a
        className="relative flex flex-col items-center"
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        <div className="bg-white text-black rounded-full p-4 transition-colors duration-300 group-hover:bg-beige">
          <IconComponent className="size-8" />
        </div>

        <div className="absolute -bottom-10 w-24 text-white text-center text-sm leading-tight font-bold transition-colors duration-300 group-hover:text-beige">
          {text}
        </div>
      </a>
    </div>
  );
}

Skill.propTypes = {
  IconComponent: PropTypes.elementType.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};