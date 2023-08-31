import React from 'react'
import './Skills.css'

import {BsPatchCheckFill} from 'react-icons/bs'

const Skills = () => {
  return (
    <section id='experience'>
        {/* <h5>What Skill I have</h5> */}
        <h2>Skills</h2>

        <div className='container experience_container'>
          <div className='experience_frontend'>
              <h3>FrontEnd Development</h3>
              <div className='experience_content'>
                <article className='experience_details'>
                    <BsPatchCheckFill  className='experience_details-icon'/>
                    <div>
                    <h4>HTML5</h4>
                    {/* <small className='text-light'>Experienced</small> */}
                    </div> 
                </article>

                <article className='experience_details'>
                    <BsPatchCheckFill className='experience_details-icon' />
                    <div>
                    <h4>CSS3</h4>
                    {/* <small className='text-light'>Experienced</small> */}
                    </div> 
                </article>

                <article className='experience_details'>
                    <BsPatchCheckFill  className='experience_details-icon'/>
                    <div>
                    <h4>REACTJS</h4>
                    {/* <small className='text-light'>Experienced</small> */}
                    </div> 
                </article>

                <article className='experience_details'>
                    <BsPatchCheckFill className='experience_details-icon' />
                    <div>
                    <h4>JS</h4>
                    {/* <small className='text-light'>Experienced</small> */}
                    </div> 
                </article>

                <article className='experience_details'>
                    <BsPatchCheckFill className='experience_details-icon' />
                    <div>
                    <h4>Bootstrap</h4>
                    {/* <small className='text-light'>Experienced</small> */}
                    </div> 
                </article>

                {/* <article className='experience_details'>
                    <BsPatchCheckFill className='experience_details-icon' />
                    <div>
                    <h4>Next js </h4>
                    <small className='text-light'>Experienced</small>
                    </div> 
                </article> */}
              </div>
          </div>
          <div className='experience_backend'>
          <h3>BackEnd Development</h3>
              <div className='experience_content'>
                <article className='experience_details'>
                    <BsPatchCheckFill className='experience_details-icon' />
                    <div>
                    <h4>NodeJS</h4>
                    {/* <small className='text-light'>Experienced</small> */}
                    </div>   
                </article>

                <article className='experience_details'>
                    <BsPatchCheckFill className='experience_details-icon' />
                    <div>
                    <h4>ExpressJS</h4>
                    {/* <small className='text-light'>Experienced</small> */}
                    </div>   
                </article>

                <article className='experience_details'>
                    <BsPatchCheckFill className='experience_details-icon' />
                    <div>
                    <h4>MongoDB</h4>
                    {/* <small className='text-light'>Experienced</small> */}
                    </div> 
                </article>

                <article className='experience_details'>
                    <BsPatchCheckFill className='experience_details-icon' />
                    <div>
                    <h4>Java</h4>
                    {/* <small className='text-light'></small> */}
                    </div> 
                </article>

                <article className='experience_details'>
                    <BsPatchCheckFill className='experience_details-icon' />
                    <div>
                    <h4>SQL</h4>
                    {/* <small className='text-light'></small> */}
                    </div> 
                </article>

                

               
              </div>

          </div>
        </div>

    </section>
  )
}

export default Skills