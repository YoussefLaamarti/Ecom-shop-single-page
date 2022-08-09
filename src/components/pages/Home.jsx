import React from 'react'



function home() {

  return (<div>
    
      
    <section  className='Container-home-header'>
      
        <h1> Lorem Lorem Ipsum is simply 
       typesetting <br/> industry industry.
        Lorem Ipsum has been <br/>the industry's Lorem Ipsum is is is simply </h1>
           <div className='btn-container'>
       <a href='#bot'> <button>Contact Us</button> </a>
       <button style={{color: "white", backgroundColor:"#262626"}}>About Us</button>
        </div>
      
    </section>
   

    <section className='Container-products'>
      
      <div className='products'>
        <div className='img'></div>
        <h1 className='Title'>iOS Icons</h1> 
        <h1 className='Name'>Traf</h1> 
        <div className='btn-Price'>
        <h1 className='Price'>$28</h1></div>
       
      </div>
   
      <div className='products'>
        <div className='img' id='img2'></div>
        <h1 className='Title'>Taklobo Baybayin</h1> 
        <h1 className='Name'>John David Maza</h1> 
        <div className='btn-Price'>
        <h1 className='Price'>$10+</h1></div>
       
      </div>
    

      <div className='products'>
        <div className='img'id='img3' ></div>
        <h1 className='Title'>Chrome Style template Bundle</h1> 
        <h1 className='Name'>Design Syndrome</h1> 
        <div className='btn-Price'>
        <h1 className='Price'>$25</h1></div>
       
      </div>
    
    
      <div className='products'>
        <div className='img' id='img4'></div>
        <h1 className='Title'>Randome Typeface</h1> 
        <h1 className='Name'>Other Side Store</h1> 
        <div className='btn-Price'>
        <h1 className='Price'>$15</h1></div>
       
      </div>
    </section>
    <section  className='Container-home-header'>
      
         <div className='btn-container' style={{marginTop:150}}>
      
      
      <button  style={{color: "white", backgroundColor:"#262626"}}>Twitter</button>
      <button id='bot' >Discord</button>
      <button  style={{color: "white", backgroundColor:"#262626"}}>Instagram</button>
     
      </div>
      
      <h1 style={{fontWeight:'100' , fontSize:14}}>by Youssef Laamarti</h1>
  </section>
    </div>
  )
}

export default home