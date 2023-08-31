import React from 'react'
import './Findme.css'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'




const Findme = () => {

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className=' container Find_me '>
      <div className='find_me_heading'>
          <h1> Find With Me</h1>
      </div>
      <div className='btn_icon_list '>

          <button  class="button-28" onClick={() => openInNewTab('https://www.linkedin.com/in/vaibhav-devkar-2a2b94228/')} ><AiFillLinkedin  style={{height:'2rem' , width:'2rem'}}/></button>
          <button class="button-28" onClick={() => openInNewTab('https://github.com/vaibhavdevkar')} ><AiFillGithub  style={{height:'2rem' , width:'2rem'}}/></button>
        
      </div>

    </section>
  )
}

export default Findme