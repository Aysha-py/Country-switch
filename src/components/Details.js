import React,{useEffect} from 'react'

const Details = ({informations,navLight,setCountries}) => {

  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
       .then((response) => response.json())
       .then((data) => {
        
          setCountries(data);
       });
  }, [setCountries]);
  console.log(informations) 
    
  return (
    <main> 
  <div className={navLight?'cardComponent-detailsLight':'cardComponent-details'}>
    
    {
      informations?.map((info,index)=>(
              
      <div className ={navLight ? 'cardL__details' : "card__details"} key={index}>
        <div className="detailflag" >
          <img src={info.flags.png} alt='flag'/>
        </div>
        <div className={navLight ? 'moreL-details':'more-details'}>
          <h1>{info.name}</h1>
          <div className='extra-details'>
            <div className='country-info'>
              <p>Native Name: {info.nativeName}</p>
              <p>Population: {info.population}</p>
              <p>Region: {info.region}</p>
              <p>SubRegion: {info.subregion}</p>
              <p>Capital: {info.capital}</p>
            </div>
            <div className='country-infotwo'>
              <p>Top Level Domain: {info?.topLevelDomain}</p>
              <div className='border'>
                <p>Currencies: </p>
                {info?.currencies?.map((currency,i)=><p style={{marginLeft:"10px"}} key={i}>{currency.code}</p>)}
              </div>
              <div className='border'>
                <p>Languages: </p>
                {info?.languages?.map((language,i)=><p style={{marginLeft:"10px"}}key={i}>{language.name}</p>)}
              </div>
            </div>
          </div>
          <div className='border' id="detilborder">
            <p>Border Countries: </p>
            <div className='borderlist__list'>
            {info?.borders?.map((border,i)=>(
              <p key={i} style={{marginLeft:"10px"}} className="borderlist">{border}</p>
            )
            )
            }
            </div>
        </div>
      </div>
                

            
    </div>
  ))
    }
  
</div>
</main>

  )
}

export default Details