import React, { useState } from 'react';

const Country = (props) => {
  

  
    const { name, population,region,flag } = props.country
    const handleAddToCountry = props.handleAddToCountry
   

    return (

        <div style={{border:'2px solid red',width:'600px', marginBottom:'20px',borderRadius:'10px',backgroundColor:'#ddd',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',marginBottom:'30px ',margin:'10px',marginLeft:'30%',padding:"10px"}}>

      


            <h2> This is a {name} </h2>
            <img style={{height:'50px'}} src={flag} alt=""/>
            <p>population : {population}</p>
            <h4>Region : {region}</h4>
            <button onClick={ ()=>handleAddToCountry(props.country)}>Add Country</button>
            
        </div>
    );
};

export default Country;