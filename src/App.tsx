// Styling
import './Global.css';
import styled from 'styled-components';

// Comps
import Nav from './comps/Nav';

const StApp = styled.div`
  width: 100%;
  max-width: 777px;
  margin: 0 auto;
`;

export default function App() {
  return (
    <StApp>
      <Nav />
    </StApp>
  );
}
