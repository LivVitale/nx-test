import styled from 'styled-components';
import NxWelcome from './nx-welcome';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <h1>Test App1</h1>
      <NxWelcome title="app1" />
    </StyledApp>
  );
}

export default App;
