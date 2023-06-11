import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [errors, setErrors] = useState('');
  
  const onGenerateResult = (event) => {

    let result = checkEmptyFields(event);

    if (result == true) return;

    console.log("Vamos a generar el resultado: ", result);
    
    getMediaTeamPoints(result);

    
  };

  const checkEmptyFields = (event) =>{
    event.preventDefault();
    const fields = Object.fromEntries(new FormData(event.target));

    if (fields.team1 === '') {
      console.log('Error en el nombre del equipo 1');
      setErrors('El el nombre del equipo 1 no puede estar vacío');
      return true;
    }

    if (fields.team2 === '') {
      console.log('Error en el nombre del equipo 2');
      setErrors('El el nombre del equipo 2 no puede estar vacío');
      return true;
    }

    if (fields.mediaTeam1 === '') {
      console.log('Error en la media del equipo 1');
      setErrors('La media del equipo 1 no puede estar vacía');
      return true;
    }

    if (fields.mediaTeam2 === '') {
      console.log('Error en la media del equipo 2');
      setErrors('La media del equipo 2 no puede estar vacía');
      return true;
    }

    setErrors('');

    let result = {
      "team1": fields.team1,
      "mediaTeam1": fields.mediaTeam1,
      "pointsTeam1": {
        "media" : "",
        "luck": "",
        "local": "",
        "motivation": "",
        "money": ""
      },
      "team2": fields.team2,
      "mediaTeam2": fields.mediaTeam2,
      "pointsTeam2": {
        "media" : "",
        "luck": "",
        "local": "",
        "motivation": "",
        "money": ""
      },
      "resultTeam1": 0,
      "resultTeam2": 0,
    }

    return result;


  }

  const getMediaTeamPoints = (result) =>{


    let differenceBetweenTeams = Math.abs(result.mediaTeam1 - result.mediaTeam2);

    console.log("La diferencia de la media de los equipos es: ", differenceBetweenTeams);


  }

  

  return (
    <>
      <h3>Result simulator matches</h3>
      <form onSubmit={onGenerateResult}>
        <label> Equipo 1 <input type="text" name="team1" /> Media <input type="text" name="mediaTeam1" maxLength={2} /> </label>
        <label> Equipo 2 <input type="text" name="team2" /> Media <input type="text" name="mediaTeam2" /></label>
        {errors != '' && <h5 style={{color: 'indianred'}}> {errors }</h5>}
        <button type='submit'>Generate result</button>
      </form>
      
      
    </>
  )
}

export default App
