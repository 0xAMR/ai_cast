import styled from 'styled-components';

const StNav = styled.nav`
  & h1 {
    margin: 0.5em 0 0.25em 0;
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

      & button {
        text-decoration: none;
        border: none;
        color: #1a85cc;

        &:hover {
          text-decoration: underline;
          color: #0099ff;
          border: none;
        }
      }
    }
  }
`;

export default function Nav({ ...props }) {
  return (
    <StNav>
      <h1>AI Cast</h1>
      <span>GPT3-Generated Podcasts Voiced by AWS Polly Neural</span>
      <ul>
        <li>
          <button onClick={() => props.click('listen')}>Listen</button>
        </li>
        <li>
          <button onClick={() => props.click('methodology')}>
            Methodology
          </button>
        </li>
        <li>
          <button onClick={() => props.click('credits')}>Credits</button>
        </li>
      </ul>
    </StNav>
  );
}
