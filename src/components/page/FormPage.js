import React from 'react'
import "./page.scss";
import AddForm from '../addForm';


const FormPage = ({pageTitle}) => {
  return (
    <div id="page">
      <h1>{pageTitle}</h1>
      <AddForm/>
    </div>
      )
}

export default FormPage