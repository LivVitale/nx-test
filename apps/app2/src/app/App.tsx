import styled from 'styled-components';
import NxWelcome from './nx-welcome';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <h1>APP 2</h1>
      <NxWelcome title="app2" />
    </StyledApp>
  );
}

export default App;
