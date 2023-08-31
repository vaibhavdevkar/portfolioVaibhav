import React from 'react'
import './Header.css'






const Header = () => {


  
  const handleDownload = () => {
    const url = 'https://drive.google.com/file/d/1ByBmdqFUVZtFWZsnUV0lTgTBwVozi07m/view?usp=sharing' // replace with the URL of the PDF file to download
    window.open(url, '_blank');
  };



  return (
    <div className=' containerheader_height'>
    <section className='container Header_section'>
        <div className='Heading'>
            <div className='intro_text'>
                {/* <h3> Welcome to my Portfolio </h3> */}
            </div>
            <div className='main_name'>
                <h2>Hi , I'm     </h2>
                <h1>Vaibhav Devkar</h1>
                <h3>MERN Stack Developer</h3>
                <div className='btndeco'>
                  <button class="button-81" onClick={handleDownload}  id="btn-bordr">Download Resume</button>
                  {/* <button class="button-81" onclick={handleContactClick} id="btn-bordr">Contact Me </button> */}
                  
                  {/* <button class="button-81"  id="btn-bordr">Contact Me </button> */}
                  
                </div>
            </div>

        </div>
    </section>
    
  </div>

  )
}

export default Header