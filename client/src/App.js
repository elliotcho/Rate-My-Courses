import React from 'react';

function App() {
  const getUsers = async () => {
      const response = await fetch('http://localhost:8080/api/user', {
        method: 'GET'
      });

      const data = await response.json();

      console.log(data);
  }

  return (
    <div className="App">
      <button onClick={getUsers}>Test</button>
    </div>
  );
}

export default App;
