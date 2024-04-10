import React from 'react';

// Button component
const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
};

// Example usage
const App = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div>
      <h1>Button Example</h1>
      <Button onClick={handleClick}>Click me</Button>
    </div>
  );
};

export default App;
