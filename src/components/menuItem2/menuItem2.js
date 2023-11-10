import React from 'react'
import { Link } from 'react-router-dom'

const MenuItem = ({image, label, alt, path}) => {
  const handleClick = () =>{
    console.log(label)
  }
  return (
    <div className="menu_item">
      <Link to={path}>
        <img src={image} alt={alt} onClick={handleClick}/>
          <span>{label}</span>
      </Link>
        
    </div>
  )
}

export default MenuItem