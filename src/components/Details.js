import React,{useEffect} from 'react'
import CountryApi from '../api/CountryApi';


const Details = ({countries,cardLight,cardd,setCountries}) => {
   
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
              
              <div className ={cardd ? 'cardL__details' : "card__details"} key={index}>
               
              <img src={country.flags.png} className="flag" alt='flag'/>

            
              </div>
            ))
            }
        </div>

  )
}

export default Details