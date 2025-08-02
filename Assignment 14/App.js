import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Counter App</h1>
      <div style={styles.counter}>{count}</div>
      <div style={styles.buttons}>
        <button onClick={() => setCount(count - 1)} style={styles.button}>-</button>
        <button onClick={() => setCount(0)} style={styles.reset}>Reset</button>
        <button onClick={() => setCount(count + 1)} style={styles.button}>+</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: '100px',
    fontFamily: 'Arial',
    backgroundColor: '#f4f4f4',
    height: '100vh'
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '20px'
  },
  counter: {
    fontSize: '4rem',
    marginBottom: '30px',
    color: '#333'
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px'
  },
  button: {
    padding: '10px 20px',
    fontSize: '1.5rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px'
  },
  reset: {
    padding: '10px 20px',
    fontSize: '1.2rem',
    backgroundColor: '#ff4d4d',
    color: '#fff',
    border: 'none',
    borderRadius: '5px'
  }
};

export default App;
