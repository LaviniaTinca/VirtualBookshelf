import React from 'react'
import FormInput from '../formInput/formInput';

const AddForm = () => {
    const handleChange = (event) => {
        console.log(event.target.value);
      };
      
      const handleCkick = () => {
        console.log("element clicked");
      };
      
      
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log("form submitted");
      };
      
      const handleFocus = () => {
        console.log("field focused");
      };
      
      const handleBlur = () => {
        console.log("field blurred");
      };
  return (
    <>
    {/* start add form */}
    <hr />
      <h1 onClick={handleCkick}>Adauga o carte</h1>
      <form onSubmit={handleSubmit}>
        <div className="rendered-form">
        <FormInput name="titlu" type= "text" required={true} handleChange={handleChange} handleFocus={handleFocus} handleBlur={handleBlur} />

        <FormInput name="autor" required={true} handleChange={handleChange} handleFocus={handleFocus} handleBlur={handleBlur} />

        <FormInput name="an" required={true} maxLength="4" handleChange={handleChange} handleFocus={handleFocus} handleBlur={handleBlur} />

        <FormInput name="rating" type="number" required={true} min="0.1" max="5.0" step="0.1" handleChange={handleChange} handleFocus={handleFocus} handleBlur={handleBlur} />

          
          <div className="formbuilder-button form-group field-submit">
            <button
              type="submit"
              className="btn-default btn"
              name="submit"
              access="false"
              id="submit"
            >
              Adauga cartea
            </button>
          </div>
        </div>
      </form>
      {/* end add form */}
    </>
  )
}

export default AddForm