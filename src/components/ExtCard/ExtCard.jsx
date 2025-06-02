import React from 'react'
import './ExtCard.scss';


function ExtCard({logo, name, description, isActive}) {
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
        <button type="button">Remove</button>
        <input type="checkbox" name="" id="" checked={isActive} />
      </div>
    </div>
  )
}

export default ExtCard