import { useState } from 'react';

function NewBoxForm({addBox}){
  const INITIAL_STATE = {
  backgroundColor: "",
  width: "",
  height: ""}
  const [formData, setFormData] = useState({
    backgroundColor: "",
    width: "",
    height: ""
  });

  const handleSubmit = evt => {
    evt.preventDefault();
    addBox(formData);
    setFormData(INITIAL_STATE);
  }



  const handleChange = evt => {
    const {name, value} = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };

return(
<form onSubmit={handleSubmit}>
  <label htmlFor="backgroundColor">Background Color:</label>
  <input 
    name="backgroundColor"
    value={formData.backgroundColor}
    onChange={handleChange}
  />

<label htmlFor="width">Width:</label>
  <input 
    name="width"
    value={formData.width}
    onChange={handleChange}
  />

<label htmlFor="height">Height:</label>
  <input 
    name="height"
    value={formData.height}
    onChange={handleChange}
  />

  <button>Add box</button>
</form>
);
}

export default NewBoxForm;