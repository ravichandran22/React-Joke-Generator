import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.css"; 
import Button from "react-bootstrap/Button"; 


const Joke = () => {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    fetchJoke();
  }, []);

  const fetchJoke = async () => {
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      const data = await response.json();
      setJoke(`${data.setup} \n ${data.punchline}`);
    } catch (error) {
      console.error('Error fetching joke:', error);
    }
  };

  return (
        <div style={{margin: '0 auto',
        textAlign: 'center',
        paddingTop: '40px'
        }}>
            <Button style={{marginBottom: '30px'}} onClick={fetchJoke}>Get Joke</Button>
            {joke && <p>{joke}</p>}
        </div>
  );
};

export default Joke;