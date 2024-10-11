import React from "react"

//Componente 
export const CountrySelected = ({country, onChange}) => {
  return (
      <select value={country} onChange={onChange}>
        
        <option value="" >Selecciona el pais</option>
        <option value='ar'>Argentina</option>
        <option value='co'>Colombia</option>
        <option value='cr'>Costa Rica</option>
        <option value='es'>España</option>
        <option value='us'>Estados Unidos</option>
        <option value='mx'>Mexico</option>
        <option value='pr'>Peru</option>
        <option value='ve'>Venezuela</option>
      </select>
  )
}
