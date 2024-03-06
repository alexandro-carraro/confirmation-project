import { useState } from 'react'
import './Confirmation.css'
import cnIMG from './assets/connection.jpg'
import React from 'react';

function Confirmation() {
  const[user, setName] = useState("")


  return(
    <div className='container'>
      <div className='container-confirmation'>
        <div className='wrap-confirmation'>
          <form className='confirmation-form'>
          <span className='confirmation-form-title'>
              <img src={cnIMG} alt="Connection Camboriú" />
            </span>
            <span className='confirmation-form-title'>Confirme sua presença!</span>
            <div className='wrap-input'>
              <input 
                className={user !== "" ? 'has-val input' : 'input'} 
                type="text" 
                value={user}
                onChange={e => setName(e.target.value)}
              />
              <span className='focus-input' data-placeholder="Nome"></span>  
            </div>    
            <div className='check-input'>
              <div className='select-checkbox'>
              <input value = "yes" type = "checkbox"/>
                <p>Sim, não posso perder!</p>
              </div>
              <div className='select-checkbox'>
              <input value = "not" type = "checkbox"/>
                <p>Não vou, infelizmente...😭</p>
              </div> 
            </div> 
            <div className='container-confirmation-form-btn'>
              <button className='confirmation-form-btn'>Confirmar</button>
            </div>   

            <div className='text-center'>
              biblia generator
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Confirmation
