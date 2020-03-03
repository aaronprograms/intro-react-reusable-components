import React from 'react';
import '../App.css';
import Button from '../components/button';

function App() {
  const [name, setName] = React.useState('');

  return (
    <div>
      <h3>Intro to React Reusable Components</h3>
      <label htmlFor='name'>Name:</label>
      <input id='name' value={name} onChange={e => setName(e.target.value)} />
      <Button handleClick={() => alert('Your name is: ' + name)}>Submit</Button>
      <Button classList='green' handleClick={() => setName('')}>
        Reset
      </Button>
    </div>
  );
}

export default App;
