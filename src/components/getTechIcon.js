import angularjs from "../images/tech-stack/angularjs.svg"
import css from "../images/tech-stack/css.svg"
import html from "../images/tech-stack/html.svg"
import javascript from "../images/tech-stack/javascript.svg"
import nodejs from "../images/tech-stack/nodejs.svg"
import typescript from "../images/tech-stack/typescript.svg"

const getTechIcon = (tech) => {
  const stackMapper = {
    'angularjs': angularjs,
    'css': css,
    'html': html,
    'javascript': javascript,
    'nodejs': nodejs,
    'typescript': typescript,
  }

  return stackMapper[tech]
}

export default getTechIcon
