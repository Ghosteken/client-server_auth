import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
    const history = useNavigate()  
    
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function registerUser(event) {
    event.preventDefault(); // Prevent the default form submission
    const response = await fetch('http://localhost:5000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    const data = await response.json()

    if(data.status === 'ok'){
      history.push('/login')   
    }
  }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={registerUser}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
}

export default App;
