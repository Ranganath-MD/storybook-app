import './App.css'
import { Button } from './stories/Button';

function App() {
  return (
    <>
      <h1 className="text-5xl font-bold font-mono">Vite + React + Storybook</h1>
      <Button label='Hello Storybook' size='small' />
    </>
  );
}

export default App
