import {useSelector} from "react-redux"

function Header() {
    const {dark,language}=useSelector(state=>state.site)
  return (
    <div>
        <div>
          <h2>  Dark mod={dark?"evet":"hayır"}</h2>
          <br></br>
          <h2>Mevcut dil={language}</h2>
        </div>
    </div>
  )
}

export default Header