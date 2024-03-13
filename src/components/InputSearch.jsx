import { useRef } from "react"
import "../components/InputSearch.css"

const InputSearch = ({ setLocationSelect }) => {

  const inputSearch = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    setLocationSelect(inputSearch.current.value.trim())
  }

  return (
    <form onSubmit={handleSubmit} className="form">
        <input ref={inputSearch} type="text" className="input" placeholder="Dimension number" />
        <button className="btn-search"><i className="fa fa-search"></i></button>

    </form>
  )
}

export default InputSearch