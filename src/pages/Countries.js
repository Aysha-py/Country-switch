import React,{useState,useEffect} from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';
import CountryCard from '../components/CountryCard';
import { BsMoon } from 'react-icons/bs';
import { BsMoonFill } from 'react-icons/bs';
import { BiArrowBack } from 'react-icons/bi';
import Details from '../components/Details';



const Countries = ({countries,setCountries}) => {

  const searchKeyword = ["Africa","America","Asia","Europe","Oceania"]

  const [navLight,setNavLight] = useState(false)
  const [containerLight,setcontainerLight] = useState(false)
  const [searchBarLight,setsearchBarLight] = useState(false)
  const [filterLight,setFilterLight] = useState(false)
  const [buttonStyle,setButtonStyle] = useState(false)
  const [cardLight,setCardLight]= useState(false)
  const [cardd,setCardd]= useState(false)
  const [displayList,setDisplayList] = useState(false)
  const[listLight,setListLight]=useState(false)
  const [searchdata,setsearchData] = useState("")
  const [details,setDetails] =  useState(true)
  const [newsearch, setNewsearch] = useState("");
  const [information,setInformation]=useState([])

  
  console.log(countries)

  const switchMode =()=>{
    setcontainerLight (!containerLight)
    setNavLight(!navLight)
    setButtonStyle(!buttonStyle)
    setsearchBarLight(!searchBarLight)
    setFilterLight(!filterLight)
    setCardLight(!filterLight)
    setCardd(!cardd)
    setListLight(!listLight)
    
  }

const displayfilterlist =()=>{
  setDisplayList(!displayList)
}

const displaypage=() =>{
  setDetails(true)
  console.log("hello")
}

useEffect(() => {
  const result = countries.filter((info) =>
  info?.name?.toLowerCase()?.includes(newsearch)
  );
  console.log(result)
  setInformation(result);
  }, [newsearch,countries]);

 
  return (
    <>{details ?
    <div className={containerLight ? 'countries-container-lightMode' : 'countries-container'}>
      <div className ={navLight?'nav-tab-lightmode':'nav-tab'}>
          <h1>Where in the world?</h1>
          {buttonStyle?<button onClick={switchMode}>
          <BsMoonFill style={{color:"Black", marginRight:"10px"}}/>Dark Mode</button>: <button onClick={switchMode}>
          <BsMoon style={{color:"white", marginRight:"10px"}}/>Dark Mode</button>
        }
      </div>


      <div className='countries-container-header'>
      <div className={searchBarLight ? 'searchbar-lightmode' : 'searchbar'}>
          <AiOutlineSearch />
          <input type="text" 
          placeholder="Search for a Country"
          value={newsearch}
          onChange={(e) => setNewsearch(e.target.value)}
          />
      </div> 
    <div className='filter-continer'> 
      {filterLight ?
        <div className='filter-light' >
          <input type="text" placeholder="Filter By Region"/>
          <MdKeyboardArrowDown onClick={displayfilterlist} style={{color:"black"}}/> 
            
        </div>

        :

        <div className='filter'>
          <input type="text" 
          placeholder="Filter By Region"
          value={searchdata}
          />
          <MdKeyboardArrowDown onClick={displayfilterlist} style={{color:"white"}}/>
          
        </div> 
      }
      {displayList ? <div className={listLight ?'listitemLight':'listitem'}>
              <ul>
              { 
                searchKeyword.map((keyword,index)=>(
                  <li key ={index} onClick={()=>{
                    setsearchData(keyword)
                    setDisplayList(false)
                  }}>{keyword}</li>
                ))
               
              }
              </ul>
            </div>:null
      }   
    </div>        
    </div>    
    <CountryCard cardLight={cardLight} cardd={cardd} countries={countries} 
    setCountries={setCountries} setDetails={setDetails} details={details} 
    information={information}/>
      
    </div>:
    
    
    <div className={containerLight ? 'countries-container-lightMode' : 'countries-container'}>
      <div className ={navLight?'nav-tab-lightmode':'nav-tab'}>
          <h1>Where in the world?</h1>
          {buttonStyle?<button onClick={switchMode}>
          <BsMoonFill style={{color:"Black", marginRight:"10px"}}/>Dark Mode</button>: <button onClick={switchMode}>
          <BsMoon style={{color:"white", marginRight:"10px"}}/>Dark Mode</button>
        }
      </div>

      <div className='countries-container-header'>
        <div className={searchBarLight ? 'details-searchbar-lightmode' : 'details-searchbar'} onClick={displaypage}>
            <button><BiArrowBack style={{marginRight:"10px"}}/>Back</button>
        </div> 
      </div>
      
      <Details countries={countries} cardLight={cardLight} cardd={cardd} setCountries={setCountries}/>
    </div>
  
  
  
  }
    </>
  )
}

export default Countries