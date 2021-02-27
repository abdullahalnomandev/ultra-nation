import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';
import AnimalData  from './Data/data.json';

function App() {

  const [countries,setCountries]=useState([]);

  const [cart,setCart]=useState([]);
  const [animal,setAnimal]=useState([]);
  useEffect (()=>{
    setAnimal(AnimalData);
    console.log(AnimalData);

  },[]);

  useEffect(()=>{

    fetch('https://restcountries.eu/rest/v2/all')
    .then( res => res.json())
    .then( data => setCountries(data))
    .catch( error => console.log(error))


  },[]);


  const handleAddToCountry = (cun)=> {

   const addCountry=[...cart,cun];
   setCart(addCountry);
}
  return (
    <div className="App">
      
      <h1>countries Loaded: {countries.length}</h1>
      <h4>Country Added:{cart.length} </h4>
      <Cart cart={cart}></Cart>
      {
        countries.map( country => <Country country={country} handleAddToCountry={handleAddToCountry} key={country.name}></Country>)
      
      }

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
