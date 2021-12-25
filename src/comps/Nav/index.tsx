import styled from 'styled-components';

const StNav = styled.nav`
  & h1 {
    margin: 1em 0 0.25em 0;
  }

  & span {
    display: block;
    font-size: 1.2em;
  }

  & ul {
    margin: 1em 0;
    width: 100%;
  }
`;

export default function Nav({ ...props }) {
  return (
    <StNav>
      <h1>AI Cast</h1>
      <span>GPT3-generated podcasts via OpenAI's API</span>
      <ul>
        <li>
          <a href="/">Listen</a>
        </li>
        <li>
          <a href="/">Methodology</a>
        </li>
        <li>
          <a href="/">API</a>
        </li>
      </ul>
    </StNav>
  );
}
