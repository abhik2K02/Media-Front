
import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import View from './View'
import Category from './Category'
import Add from './Add'
import { Link } from 'react-router-dom'




function Home() {

  
  const [serverRes,setserverRes]=useState({})

  // function definition
  const handleresponse=(res)=>{

    setserverRes(res)

  }


  return (


    <>
      <div className='container-fluid'>


        <Link style={{textDecoration:'none',fontSize:'30px',color:'blue'}} to={'/watchhistory'}>Watch History</Link>

        <Row>

  {/* add component */}
          <Col lg={1}>

        <Add handleresponse={handleresponse} />  

          </Col>

          {/* view component */}

              <Col lg={7}>

                <View serverRes={serverRes} />     
              </Col>

              {/* categry component */}

              <Col lg={4}>

                 <Category/>

              </Col>

        </Row>
  
      </div>
    </>
  )
}

export default Home