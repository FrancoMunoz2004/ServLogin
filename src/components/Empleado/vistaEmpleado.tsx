
import { useNavigate, useParams } from 'react-router-dom';
import '../Admin/admin.css'
import Select from 'react-select';
interface Data {
  user: string;
  password: string;
  role: string;
  permisos: string[],
}

function VistaEmpleado() {
  const navigate = useNavigate();

  const handleSubmit = (params: any) => {
    params.preventDefault();
    const select = params.target.permisos.value 
    console.log(select)
    if (select)
      return (navigate(`/Empresa/${user}/${select}`))
    if (select === "") {
      alert(`Escoge una vista`)
    }

  }

  let datos = JSON.parse(localStorage.getItem("user") || '[]');
  const { user } = useParams();
  const result: Data = datos.find((params: Data) => params.user === user);
  return (
    <>
      <header>
        <h3>¡Welcome {user}!</h3>
      </header>
      <nav className="continedor">

        <form onSubmit={handleSubmit}>
          <h4>Aqui tienes las vistas a las que puedes acceder</h4>
          <nav>
            
              <Select
                name="permisos"
                options={result.permisos.map((emp: any) => ({
                  label: emp,
                  value: emp,

                }))}
              />
            
          </nav>
          <br></br>
          <button type="submit">Mostrar</button>
        </form>

      </nav>
    </>
  )

}
export default VistaEmpleado;