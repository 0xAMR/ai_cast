// React
import { useState } from 'react';

// Styling
import './Global.css';
import styled from 'styled-components';

// Comps
import Nav from './comps/Nav';
import Listen from './comps/Listen';
import Page from './comps/Page';

const StApp = styled.div`
  width: 100%;
  height: 100%;
  max-width: 777px;
  margin: 0 auto;
  padding: 0 1em;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  & footer {
    text-align: center;
    padding: 2em 0 1em 0;

    & a {
      color: inherit;
      text-decoration: none;
      font-size: 0.85em;
      opacity: 0.65;
      letter-spacing: 0.025em;

      &:hover {
        color: #ddd;
        opacity: 1;
      }
    }
  }
`;

export default function App() {
  const [active, setActive] = useState('listen');

  return (
    <StApp>
      <Nav click={setActive} />
      {active === 'listen' && <Listen />}
      {active === 'methodology' && (
        <Page title="Methodology">
          <p>
            <ul>
              <li>GPT-3 was provided with an initial sentence as input</li>
              <li>
                Upon text generation, the result was 'voiced' by AWS Polly
              </li>
              <li>The sound was edited using Audacity</li>
            </ul>
          </p>
        </Page>
      )}
      {active === 'credits' && (
        <Page title="Credits">
          <p>
            <ul>
              <li>Text: GPT-3</li>
              <li>Voices: AWS Polly (Neural)</li>
              <li>Montage: Audacity</li>
              <li>Music: Unminus</li>
            </ul>
          </p>
        </Page>
      )}
      <footer>
        <a href="x">
          © Andrei Racasan {new Date().getFullYear()} | Free & Open Source
        </a>
      </footer>
    </StApp>
  );
}
