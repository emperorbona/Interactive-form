import { useState } from 'react'


function App() {
  
    
  const [contact, setContact] = useState({
    fName : "",
    lName : "",
    email : ""
  })
  const [items , setItems] = useState([])

  function handleChange(event){
    const {name, value} = event.target;

    setContact((prevValue) =>{
      return{
        ...prevValue,
        [name] : value
      }

    })
  }

  function handleClick(){
    setItems((prevItem) =>{
      return[...prevItem, contact]
    })
  }

  return (
    <div className="container">
     { items.map((item) => {
        return(
          <div>
            <h1>Welcome {item.fName} {item.lName}</h1>
            <p>{item.email}</p>
          </div> 
        )
      })}
     
      <input 
      onChange={handleChange}
      type="text" 
      placeholder="First Name"
      value={contact.fName}
      name='fName'
       />
      <input 
      onChange={handleChange}
      type="text" 
      placeholder="Last Name"
      value={contact.lName} 
      name='lName'
      />
      <input 
      onChange={handleChange}
      type="email" 
      placeholder="E-Mail"
      value={contact.email}
      name='email'
       />
      <button onClick={handleClick}>Submit</button>
    </div>
  )
}

export default App
