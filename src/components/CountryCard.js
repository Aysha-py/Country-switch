import React, {useEffect}from 'react'
import CountryApi from '../api/CountryApi';


const CountryCard = ({cardLight,cardd,countries,setCountries}) => {
  
  
  useEffect(() => {
    const retrieveCountries = async()=>{

      const response = await CountryApi.get("countries")
      setCountries(response.data)
    }
    retrieveCountries();
  }, [setCountries])
  
 
  

  

  
  
  


  return (
    <div className='cardComponent'>
        
          {
            countries.map((country,index)=>(
              
              <div className ={cardd ? 'cardL' : "card"} key={index}>
                <img src={country.flags.png} className="flag" alt='flag'/>
                <div className={cardLight ? "cardtxtLightMode" :"card-txt" }>
                  <h1 >{country.name}</h1>
                  <h2>Population: {country.population}</h2>
                  <h3>Region: {country.region}</h3>
                  <h4>Capital: {country.capital}</h4>
                </div>
                
              
              </div>
            ))
            }
        </div>
   
  )
}

export default CountryCard