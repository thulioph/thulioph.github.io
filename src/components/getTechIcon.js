import angularjs from "../images/tech-stack/angularjs.svg"
import css from "../images/tech-stack/css.svg"
import html from "../images/tech-stack/html.svg"
import javascript from "../images/tech-stack/javascript.svg"
import nodejs from "../images/tech-stack/nodejs.svg"
import typescript from "../images/tech-stack/typescript.svg"

import openProcessing from '../images/extra-social/openProcessing.png'
import stackOverflow from "../images/extra-social/stackOverflow.svg"
import soundCloud from "../images/extra-social/soundCloud.png"
import unsplash from "../images/extra-social/unsplash.png"
import wakatime from "../images/extra-social/wakatime.svg"
import lastFm from "../images/extra-social/lastFm.png"
import genius from "../images/extra-social/genius.jpg"
import strava from "../images/extra-social/strava.svg"
import goodReads from "../images/extra-social/goodReads.png"
import codepen from "../images/extra-social/codepen.png"
import medium from "../images/extra-social/medium.png"
import codeSandBox from "../images/extra-social/codeSandBox.png"

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
    'openProcessing': openProcessing,
    'stackOverflow': stackOverflow,
    'soundCloud': soundCloud,
    'unsplash': unsplash,
    'wakatime': wakatime,
    'lastFm': lastFm,
    'genius': genius,
    'strava': strava,
    'goodReads': goodReads,
    'codepen': codepen,
    'medium': medium,
    'codeSandBox': codeSandBox
  }

  return socialMapper[social]
}