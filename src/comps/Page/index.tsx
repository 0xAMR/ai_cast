// Styling
import styled from 'styled-components';

const StPage = styled.div`
  flex-grow: 1;

  & h2 {
    margin: 0;
  }
`;

export default function Listen({ ...props }) {
  return (
    <StPage>
      <h2>{props.title}</h2>
      {props.children}
    </StPage>
  );
}
