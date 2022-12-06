import { setDarkMode,setLanguage } from '../stores/site'
import { useDispatch,useSelector } from 'react-redux'

function Footer() {
    const dispatch=useDispatch()
    const {dark,language}=useSelector(state=>state.site)
    const languages=["tr","en"]


  return (
    <div>
        <div> 
        <button onClick={()=>dispatch(setDarkMode())}>{dark ? "light moda geç":"dark moda geç"}</button>
        </div>
        <div>
        {languages.map((lang,index)=>{
            return (
                <button key={index} onClick={()=>dispatch(setLanguage(lang))} className={lang===language?"active":""} >{lang}</button>
            )
        })}
        </div>    
    </div>

    
  )
}

export default Footer