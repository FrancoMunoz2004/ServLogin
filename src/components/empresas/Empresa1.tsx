/* import { useParams } from "react-router-dom"; */
import './Empresa.css'
import { useEffect, useState } from "react"
function Empresa1() {
  const [monedas, setMonedas] = useState([] as any);
  const [moneda2, setMoneda2] = useState([] as any);
  const [resultado, setResultado] = useState([] as any);


  const onClick = (e: any) => {
    e.preventDefault();
    const valor: number = e.target.valor.value;
    const moneda1: number = e.target.moneda1.value;
    const moneda2: number = e.target.moneda2.value;
    setMoneda2(moneda2)
    if (moneda1 !== moneda2) {
      const host = "api.frankfurter.app";
      fetch(
        `https://${host}/latest?amount=${valor}&from=${moneda1}&to=${moneda2}`
      )
        .then((resp) => resp.json())
        .then((data) => {
          setResultado(data.rates[moneda2]);
          console.log(data);
        });
    }
  }
  useEffect(() => {
    const host = "api.frankfurter.app";
    fetch(`https://${host}/currencies`)
      .then((resp) => resp.json())
      .then((data) => {
        const arr = [];
        for (const i in data) {
          arr.push(i);
        }
        setMonedas(arr);
      });
  }, []);

  return (
    <>
      <header>
        <h3>Bienvenido a WOW Desarrollos Digitales</h3>
      </header>
      <div className="Convertidor">
      <h4>¡Convertidor de Moneda!</h4>
        <p>
          Escoge lo que quieres cambiar
        </p>
        <form onSubmit={onClick}>
          <label className="label">

            <select name="moneda1">
              <option value={monedas}>COP</option>
              {monedas.map((moneda: any) => (
                <option value={moneda}>{moneda}</option>
              ))}
            </select>
            <input name="valor" type="number" placeholder="valor"></input>

          </label>
          <label className="label">

          <select name="moneda2">
            <option value={moneda2}>COP</option>
            {monedas.map((moneda: any) => (
              <option value={moneda}>{moneda}</option>
              ))}
          </select>
          
            <b>
              {resultado}
            </b>
              </label>
          
          <button type="submit" >CONVERTIR</button>
          <br />
        </form>
      </div>
    </>
  );
};

export default Empresa1;