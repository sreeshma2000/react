import { useState } from 'react'
import reactLogo from './assets/icon1.png'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container1">
        <form action="" method="get">
            <img src={reactLogo} alt=""/>
             <div className="text">Join Us </div>
            <div className="div1"> <p>Subscribe Easy Youtube Channel to <br/>watch more videos</p>
            </div>
            <input type="submit" className="button-primary" value="About us"/>
        </form>
    </div>
<form action="" method="get">
    <div className="container2">
        <div className="heading"><h3 className='re'>Register Here</h3></div>
            <div className="register-form">
                    <label for="Name"><b>Name</b></label>
                    <input type="text" name=""id="Name" className="form-group" placeholder="name" pattern="[A-Za-z\s]{2,}" title="name can only be a alphabet" required />
                    <label for="username"><b>Username</b></label>
                    <input type="text" name="" id="username" className="card-box" placeholder="username" required/>
                     <label for="phone number"><b>Phone number</b></label>
                     <input type="tel" name="" id="phone number" className="card-box" placeholder="phone no" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                     title="enter 10 digit phone number" required/>
                    <label for="email"><b>Email</b></label>
                    <input type="email" name="" id="email" placeholder="email" className="card-box" pattern="[a-zA-Z0-9\-]{4,10}[@][a-z]+[\.][a-z]{2,3}" 
                    title="enter valid email format" required />
                    <label for="Pswd"><b>Password</b></label>
                    <input type="password" name="" id="Pswd" placeholder="password" className="card-box"pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                     title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required/>
                    <input type="submit"  value="Register" className="button-secondary"/>
            </div>
        </div>
    </form>
    </>
  )
}

export default App
