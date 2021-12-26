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

    & li {
      font-size: 1.1em;

      & a {
        text-decoration: none;
        color: #1a85cc;

        &:hover {
          text-decoration: underline;
          color: #0099ff;
        }
      }
    }
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
          <a href="/">Credits</a>
        </li>
      </ul>
    </StNav>
  );
}
