
/* import Swal from 'sweetalert2' */
export const Usuario = (user: string, password: string) => {

  /*   const Swal = require('sweetalert2') */
    let datos = JSON.parse(localStorage.getItem("user") || '[]')
    let confirm1 = false;
     let confirmEmpleado= false; 
    for (let i = 0; i < datos.length; i++) {
        if (datos[i].user === user && datos[i].password === password && datos[i].roles === "admin") {
            confirm1 = true;
        }
        if(datos[i].user === user && datos[i].password === password && datos[i].roles === "empleado") {
            confirmEmpleado = true;
            
        }
    }
    console.log(confirm1)
    console.log(confirmEmpleado)

    if (confirm1 && !confirmEmpleado) {
        alert(`Has iniciado correctamente ${user}`)

        window.location.href=`/Admin/${user}` ;
        

    }
    if(!confirm1 && confirmEmpleado) {
        alert(`Has iniciado correctamente ${user}`)

        window.location.href = `/Empleado/${user}`;
    }if(!confirm1 && !confirmEmpleado){
        alert(`No estas registrado`) 
    }
}
