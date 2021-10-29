import angularjs from "../images/tech-stack/angularjs.svg"
import css from "../images/tech-stack/css.svg"
import html from "../images/tech-stack/html.svg"
import javascript from "../images/tech-stack/javascript.svg"
import nodejs from "../images/tech-stack/nodejs.svg"
import typescript from "../images/tech-stack/typescript.svg"

import stackOverflow from "../images/extra-social/stackOverflow.svg"
import unsplash from "../images/extra-social/unsplash.png"
import wakatime from "../images/extra-social/wakatime.png"
import lastFm from "../images/extra-social/lastFm.png"
import codepen from "../images/extra-social/codepen.png"
import medium from "../images/extra-social/medium.png"
import codeSandBox from "../images/extra-social/codeSandBox.png"
import linkedin from "../images/extra-social/linkedin.png"
import github from "../images/extra-social/github.png"
import twitter from "../images/extra-social/twitter.png"

export const getTechIcon = (tech) => {
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

export const getExtraSocialIcon = (social )=> {
  const socialMapper = {
    'stackOverflow': stackOverflow,
    'unsplash': unsplash,
    'wakatime': wakatime,
    'lastFm': lastFm,
    'codepen': codepen,
    'medium': medium,
    'codeSandBox': codeSandBox,
    'linkedin': linkedin,
    'github': github,
    'twitter': twitter,
  }

  return socialMapper[social]
}