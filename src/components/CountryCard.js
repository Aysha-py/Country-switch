import React, {useEffect,useState}from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Details from './Details';
import { BiArrowBack } from 'react-icons/bi';





const CountryCard = ({countries,setCountries,setDetails,details,
  information,navLight,displaypage,loading,setLoading}) => {
const [index,setIndex] = useState("")
const [error,setError]= useState("")



useEffect(() => {
  fetch('https://restcountries.com/v2/all?')

     .then((response) => response.json())
     .then((data) => {
        setCountries(data);
        setLoading(!loading);
     })
     .catch((err) => {
      setError(err);
   });
}, [setCountries]);

const [informations,setInformations]=useState([])

useEffect(() => {
  const result = countries?.filter((info) =>
  info?.name?.includes(index)

  );
  setInformations(result);
  }, [index,countries]);


const done =() =>{
  setDetails(!details)
}

  return (
    <>
    
   
    {error?  
    <div className='error-alert'>
        Oh snap! You got an error!
  
    </div>: null}

   
    {details ?
    <div className='cardComponent'>
        
          {
            information?.map((country,index)=>(
              
              <div className ={navLight ? 'cardL' : "card"} key={index}>
               
              <img src={country?.flags?.png} className="flag" alt='flag'/>

                <div className={navLight ? "cardtxtLightMode" :"card-txt" } onClick={()=>{
                  done()
                  setIndex(country.name)
 
                }}>
                
                  <h1>{country?.name}</h1>
                  <h2>Population: {country?.population}</h2>
                  <h3>Region: {country?.region}</h3>
                  <AnimationOnScroll animateIn="animate__bounceIn">
                  <h4>Capital: {country?.capital}</h4>
                  </AnimationOnScroll>
            
                </div>

              </div>
            ))
            }
        </div>  : 
        <div className={navLight ? 'countries-container-lightMode' : 'countries-container'}>
          <div className='countries-container-header'>
          <div className={navLight ? 'details-searchbar-lightmode' : 'details-searchbar'} onClick={displaypage}>
              <button><BiArrowBack style={{marginRight:"10px"}}/>Back</button>
          </div> 
        </div>
        
          <Details countries={countries} 
            navLight={navLight} 
            setCountries={setCountries} 
            informations={informations}
          />
      </div>
      }
      </>
   
  )
}

export default CountryCard