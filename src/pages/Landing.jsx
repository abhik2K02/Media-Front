import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'





export default function Landing() {


  // function definition

  // redirect from one page to another page we can use useNavigate hook

  const navigate=useNavigate()

  const handleNavigate=()=>{

    navigate('/home')

  }




  return (
    <div className='head'>


      <Row className='align-items-center'>


      <Col></Col>

      <Col lg={6}>

        <h1>WELCOME TO GAANA.com</h1>
        <p style={{textAlign:'justify'}}>Where user can use their favourite videos.user can upload any youtube videos by copy paste  their url in to video.com will allow to add and remove their uploaded videos and also arrange them different categories by drag and drop it is free try it now !!!</p>

        <button onClick={handleNavigate} className=' btn btn-success'>Click Here to Know More</button>


      </Col>


      <Col lg={5}>

        <img className='img-fluid' src="https://variety.com/wp-content/uploads/2022/07/Music-Streaming-Wars.jpg?w=1024" alt="no image" />
      </Col>

      </Row>




    </div>
  )
}