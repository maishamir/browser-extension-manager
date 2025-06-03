import React from 'react'
import './ExtCard.scss';


function ExtCard({logo, name, description, isActive, handleDelete, handleToggle}) {
  return (
    <div className='extCard'>
      <div className="extCard__content">
        <img className='extCard__content-img' src={logo} alt={`logo for ${name}`} />
        <div className="extCard__content-text">
          <h3 className="extCard__content--name">
            {name}
          </h3>
          <p className="extCard__content--description">{description}</p>
        </div>
      </div>

      <div className="extCard__buttons">
        <button className="extCard__buttons--remove" id={name}type="button" onClick={handleDelete}>Remove</button>
        
        <input className='extCard__buttons--toggle' type="checkbox" name="toggle" id={`toggle-${name}`} checked={isActive} onChange={() => handleToggle(name)} />
        <label htmlFor={`toggle-${name}`} className='toggle'></label>
      </div>
    </div>
  )
}

export default ExtCard