import React, {useEffect}from 'react'
import CountryApi from '../api/CountryApi';
import { AnimationOnScroll } from 'react-animation-on-scroll';




const CountryCard = ({cardLight,cardd,countries,setCountries,setDetails,details,information}) => {
  
  // const showDetails =()=>{
    
  //     setDetails(!details)
    
  // }
  console.log(information)

  useEffect(() => {
    const retrieveCountries = async()=>{

      const response = await CountryApi.get("countries")
      setCountries(response.data)
    }
    retrieveCountries();
  }, [setCountries])

  return (
    <>

    
    <div className='cardComponent'>
        
          {
            information.map((country,index)=>(
              
              <div className ={cardd ? 'cardL' : "card"} key={index}>
               
              <img src={country.flags.png} className="flag" alt='flag'/>

                <div className={cardLight ? "cardtxtLightMode" :"card-txt" } onClick={()=>{
                  
                    setDetails(!details)
  
                }}>
                
                  <h1>{country.name}</h1>
                  <h2>Population: {country.population}</h2>
                  <h3>Region: {country.region}</h3>
                  <AnimationOnScroll animateIn="animate__bounceIn">
                  <h4>Capital: {country.capital}</h4>
                  </AnimationOnScroll>
            
                </div>

              </div>
            ))
            }
        </div>
        
        
       
        </>
   
  )
}

export default CountryCard