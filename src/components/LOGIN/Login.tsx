
import { Usuario } from '../usuario';
import './LoginStyle.css';
import { FaUserAlt } from 'react-icons/fa';
import { RiLockPasswordLine } from 'react-icons/ri';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useState } from 'react';
function Login() {
  const [checkbox, setCheckbox] = useState(undefined as any);
  const [password, setPassword] = useState("" as any);
  const [ checkbox2, setCheckbox2] = useState("" as any);


  const handleSubmit = (params: any) => {
    params.preventDefault();
    Usuario(params.target.user.value, params.target.password.value);
  }

  const Check = (e: any) => {

    if (!checkbox) {
      setCheckbox(true)
    } else if (checkbox){
      setCheckbox(false)
      setCheckbox2(true)
    }
  }

  return (
    <div className="contenedor">
      <h2>Login </h2>
      <form className="form" onSubmit={handleSubmit}>
        <label className="label">
          <div className="ico">
            <FaUserAlt className="icons" />
          </div>
          <input
            name="user"
            type="text"
            placeholder="Enter Username"
          />
        </label>
        <label className="label">
          <div className="ico">
            <RiLockPasswordLine className="icons" />
          </div>
          <input
            type={
              checkbox ? 'text' : 'password'
            }
            name="password"
            placeholder="Enter Password"
            onChange={(e) => {
              e.preventDefault();
              setPassword(e.target.value.length);
              if (e.target.value.length > 0) {
                setCheckbox(false)
              } else {
                setCheckbox(undefined)
              }
            }}
          />

          <div className="container">
            <input type="checkbox" className="checkbox" onChange={Check} />

            <label form="checkbox" className="label2" >
              {checkbox === undefined ? "" : <AiOutlineEye className="pass" onClick={Check}  /> ? !checkbox ? <AiOutlineEyeInvisible className="pass" onClick={Check}/> : <AiOutlineEye className="pass" onClick={Check}/>
             :"" }
             
            </label>

          </div>
        </label>
        <button type="submit" value="Login">Login</button>
      </form>
    </div>
  )

}
export default Login;