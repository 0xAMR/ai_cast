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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
            quas incidunt officia doloremque nesciunt. Quae corporis
            consequuntur autem aliquam deserunt. Dolorum totam nisi et amet
            voluptatum ea debitis earum ullam, exercitationem officia ad
            delectus nam soluta itaque asperiores dolore pariatur nemo ut harum
            odit voluptates quos doloribus quia quisquam. Perferendis iusto
            itaque alias sint! Expedita consectetur eveniet ipsa exercitationem,
            reprehenderit repellendus. Vel corrupti saepe pariatur labore facere
            sequi aliquam assumenda. Nostrum necessitatibus aperiam esse,
            voluptatibus beatae ullam id! Recusandae voluptate totam hic laborum
            in. Cupiditate, rem hic provident blanditiis ad quo aliquid tempore
            porro, temporibus odio nobis aliquam eaque qui!
          </p>
        </Page>
      )}
      {active === 'credits' && (
        <Page title="Credits">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
            quas incidunt officia doloremque nesciunt. Quae corporis
            consequuntur autem aliquam deserunt. Dolorum totam nisi et amet
            voluptatum ea debitis earum ullam, exercitationem officia ad
            delectus nam soluta itaque asperiores dolore pariatur nemo ut harum
            odit voluptates quos doloribus quia quisquam. Perferendis iusto
            itaque alias sint! Expedita consectetur eveniet ipsa exercitationem,
            reprehenderit repellendus. Vel corrupti saepe pariatur labore facere
            sequi aliquam assumenda. Nostrum necessitatibus aperiam esse,
            voluptatibus beatae ullam id! Recusandae voluptate totam hic laborum
            in. Cupiditate, rem hic provident blanditiis ad quo aliquid tempore
            porro, temporibus odio nobis aliquam eaque qui!
          </p>
        </Page>
      )}
      <footer>
        <a href="x">© Andrei Racasan 2021 | Free & Open Source</a>
      </footer>
    </StApp>
  );
}
