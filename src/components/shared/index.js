import styled from 'styled-components'

// About Page

export const Presentation = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 30px;
  margin-bottom: 40px;

  color: ${props => props.theme.colors.fonts};
  transition: color .25s linear;

  @media (min-width: 768px) {
    font-size: 70px;
  }

  a {
    color: ${props => props.theme.colors.fonts};
    text-decoration: underline;
  }
`;

export const Box = styled.div`
  margin-bottom: 80px;
`;

export const TitleSection = styled.h2`
  color: ${props => props.theme.colors.fonts};
  border-bottom: 1px solid ${props => props.theme.colors.lines};
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 100;
  letter-spacing: 6px;

  @media (min-width: 768px) {
    font-size: 28px;
  }
`;

export const Paragraph = styled.p`
  font-size: 22px;
  font-weight: 100;
  line-height: 44px;
  font-family: 'Roboto', sans-serif;
  color: ${props => props.theme.colors.fonts};

  a {
    color: ${props => props.theme.colors.fonts};
    text-decoration: underline;
    font-weight: 600;
  }

  @media (min-width: 768px) {
    font-size: 30px;
  }
`

export const ProfileImage = styled.figure`
  img {
    max-width: 100%;
    transition: filter .25s linear 0s;

    &:hover {
      filter: grayscale(1);
    }
  }
`

// ====

// Switch Theme Button

export const SwitchTheme = styled.button`
  position: fixed;
  top: 80px;
  right: 0;
  z-index: 20;
  visibility: hidden; // should be visible when ready
`