import React from 'react'

const MenuItem = ({image, label, alt}) => {
  const handleClick = () =>{
    console.log(label)
  }
  return (
    <div className="menu_item">
        <img src={image} alt={alt} onClick={handleClick}/>
        <span>{label}</span>
    </div>
  )
}

export default MenuItem