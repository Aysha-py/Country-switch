import React,{useState,useEffect} from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';
import CountryCard from '../components/CountryCard';
import { BsMoon } from 'react-icons/bs';
import { BsMoonFill } from 'react-icons/bs';



const Countries = ({countries,setCountries}) => {

  const searchKeyword = ["Africa","America","Asia","Europe","Oceania"]

  const [navLight,setNavLight] = useState(false)
  const [containerLight,setcontainerLight] = useState(false)
  const [searchBarLight,setsearchBarLight] = useState(false)
  const [filterLight,setFilterLight] = useState(false)
  const [buttonStyle,setButtonStyle] = useState(false)
  const [cardLight,setCardLight]= useState(false)
  const [cardd,setCardd]= useState(false)
  const [displayList,setDisplayList] =useState(false)
  const[listLight,setListLight]=useState(false)
  const [searchdata,setsearchData] = useState("")
 
 
  
  

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

useEffect(() => {

    const searchdisplay = countries.filter((object)=>{
      return JSON?.stringify(object)?.toString()?.includes(searchdata);
   })
     setCountries(searchdisplay)

 
}, [searchdata])

 
  return (
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
          <input type="text" placeholder="Search for a Country"/>
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
    <CountryCard cardLight={cardLight} cardd={cardd} countries={countries} setCountries={setCountries}/>
      
    </div>
  )
}

export default Countries