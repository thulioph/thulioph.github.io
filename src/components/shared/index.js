import styled from 'styled-components'

// About Page

export const Presentation = styled.h1`
  font-family: var(--ff-default);
  font-size: 30px;
  margin-bottom: 40px;

  @media (min-width: var(--medium-devices)) {
    font-size: 70px;
  }

  a {
    color: var(--black);
    text-decoration: underline;
  }
`;

export const Box = styled.div`
  margin-bottom: 80px;
`;

export const TitleSection = styled.h2`
  border-bottom: 1px solid var(--gray-darker);
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 100;
  letter-spacing: 6px;

  @media (min-width: var(--medium-devices)) {
    font-size: 28px;
  }
`;

export const Paragraph = styled.p`
  font-size: 22px;
  font-weight: 100;
  font-family: var(--ff-default);

  a {
    color: var(--black);
    text-decoration: underline;
    font-weight: 600;
  }

  @media (min-width: var(--medium-devices)) {
    font-size: 30px;
  }
`

// ====