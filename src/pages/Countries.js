import React,{useState} from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';
import CountryCard from '../components/CountryCard';
import { BsMoon } from 'react-icons/bs';
import { BsMoonFill } from 'react-icons/bs';


const Countries = () => {
  const [navLight,setNavLight] = useState(false)
  const [containerLight,setcontainerLight] = useState(false)
  const [searchBarLight,setsearchBarLight] = useState(false)
  const [filterLight,setFilterLight] = useState(false)
  const [buttonStyle,setButtonStyle] = useState(false)
  const [cardLight,setCardLight]= useState(false)
  const [cardd,setCardd]= useState(false)

  const switchMode =()=>{
    setcontainerLight (!containerLight)
    setNavLight(!navLight)
    setButtonStyle(!buttonStyle)
    setsearchBarLight(!searchBarLight)
    setFilterLight(!filterLight)
    setCardLight(!filterLight)
    setCardd(!cardd)
  }

 
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

          <div className={filterLight ?'filter-light':'filter'}>
              <input type="text" placeholder="Filter By Region"/>
              <MdKeyboardArrowDown style={{color:"white"}}/> 
          </div>
        
    </div>    
    <CountryCard cardLight={cardLight} cardd={cardd}/>
      
    </div>
  )
}

export default Countries