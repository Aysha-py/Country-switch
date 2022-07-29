import React,{useState,useEffect} from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import CountryCard from '../components/CountryCard';
import { BsMoon } from 'react-icons/bs';
import { BsMoonFill } from 'react-icons/bs';
import Spinner from 'react-bootstrap/Spinner';




const Countries = ({countries,setCountries}) => {

  const [navLight,setNavLight] = useState(false)
  const [searchdata,setsearchData] = useState("")
  const [details,setDetails] =  useState(true)
  const [newsearch, setNewsearch] = useState("");
  const [information,setInformation]=useState([])


  const switchMode =()=>{
    setNavLight(!navLight)
  }

const displaypage=() =>{
  setDetails(true)

}
useEffect(() => {
  const result = countries?.filter((info) =>
  info?.region?.includes(newsearch)

  );
  setInformation(result);
  }, [newsearch,countries]);

  useEffect(() => {
    const result = countries?.filter((info) =>
    info?.region?.includes(searchdata)
  
    );
    setInformation(result);
    }, [searchdata,countries]);

  return (
    <>
    <div className={navLight ? 'countries-container-lightMode' : 'countries-container'}>
      <div className ={navLight?'nav-tab-lightmode':'nav-tab'}>
          <h1>Where in the world?</h1>
          {navLight?<button onClick={switchMode}>
          <BsMoonFill style={{color:"Black", marginRight:"10px"}}/>Dark Mode</button>: <button onClick={switchMode}>
          <BsMoon style={{color:"white", marginRight:"10px"}}/>Dark Mode</button>
        }
      </div>
      


      {details ? <div className='countries-container-header'>
        <div className={navLight ? 'searchbar-lightmode' : 'searchbar'}>
            <AiOutlineSearch />
            <input type="text" 
            placeholder="Search for a Country"
            defaultValue={newsearch}
            onChange={(e) => setNewsearch(e.target.value)}
            />
        </div> 
        <div className='filter-continer'> 
        {navLight ?
          <div className='filter-light' >
          <select
          value={searchdata}
          onChange={(e) => setsearchData(e.target.value)}>
          <option value=""></option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          
        </select>
              
          </div>

          :

          <div className='filter'>
          {information &&

          <select
          value={searchdata}
          onChange={(e) => setsearchData(e.target.value)}>
          <option value=""></option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          
        </select>
          }
           
          
        </div> 
      }
    
    </div>
             
    </div>: null}
    <CountryCard navLight={navLight} countries={countries} 
    setCountries={setCountries} setDetails={setDetails} details={details} 
    information={information} switchMode={switchMode} displaypage={displaypage} />
      
    </div>
  
  

  
    </>
  )
}

export default Countries