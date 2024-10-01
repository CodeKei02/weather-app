import { useState } from "react";
export const Formulario = () => {
  const [inputValue, setInputValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if(inputValue.trim().length <= 1) return;

    setInputValue('');
  }

  const onChange = ({target}) => {
    setInputValue(target.value);
  }

  return (
    <form onSubmit={onSubmit}>
      <input id="text" type="text" name="text" value={inputValue} onChange={onChange} />
      <select name="select" id="country">
        <option disabled  defaultValue value="">Selecciona el pais</option>
        <option value="AR" >Argentina</option>
        <option value="CO">Colombia</option>
        <option value="CR">Costa Rica</option>
        <option value="ES">España</option>
        <option value="US">Estados Unidos</option>
        <option value="MX">Mexico</option>
        <option value="PE">Peru</option>
        <option value="VE">Venezuela</option>
      </select>
      <input type="submit" value="Get weather"/>
    </form>
  );
};
