

import { useState } from 'react'
import './admin.css'

import { useParams } from 'react-router-dom';
import Select from 'react-select';


//ARRAY DE LOS PERMISOS
const option: string[] = [

  "WoW", "Porcifenix", "CAE", "OSADO SOFTWARE"
]
function Admin() {
  const [values, setValues] = useState<any>([]);


  const { user } = useParams();

  const handleSubmit = (params: any) => {
    params.preventDefault();
    const user = params.target.user.value;
    const password = params.target.password.value;
    const roles = params.target.roles.value;
    const permisos = [...values];
    let datos = JSON.parse(localStorage.getItem("user") || '[]')
    let object = [...datos,
    {
      user: params.target.user.value,
      password: params.target.password.value,
      roles: params.target.roles.value,
      permisos: [...values],
    }
    ]
    if (!user || !password || !roles || !permisos) {

      return alert("Profavor rellene los campos")
    }
    else {

      localStorage.setItem("user", JSON.stringify(object));

      alert(`Has registrado al usuario  correctamente`)
      window.location.reload();
    }

  }



  return (
    <>
      <header>

        <h3>Welcome {user}</h3>
      </header>
      <div className="continedor">
        <h4>Crear Usuario</h4>
        <form className="form" onSubmit={handleSubmit}>
          <label>

            <input
              name="user"
              type="text"
              placeholder="Enter Username"
            />
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
            />
            <input name="roles" type="text" placeholder="Enter role"></input>
          </label>
          <div className="form-group">

            <h4>Selecciona la empresa</h4>
            <Select className="select-input"
              name="permisos"
              isMulti
              onChange={(params: any) => {
                const arr = params.map((emp: any) => {
                  return emp.value
                });
                setValues(arr)
              }}
              options={option.map((emp) => ({
                label: emp,
                value: emp,
              }))}
            />
          </div>
          <br></br>
          <button type="submit" value="Login">Crear</button>
        </form>

      </div>
    </>
  )
}
export default Admin