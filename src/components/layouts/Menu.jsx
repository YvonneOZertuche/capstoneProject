import React, { useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

// function Menu () {
//   //if localstorage token returns, then you may access search, following, listened, logout
//   //if not, you can see register and login

//   //log in/log out requires refresh - solve second
//   // const [navSnippet, setNavSnippet] = useState(null)
//   const [token, setToken] = useState(localStorage.token)

 
//   useEffect(() => {
    
//     console.log();
//   }, [token])


function Menu () {
  return (
    <>
      <Navbar className='bg-red-600' >
        <Container>
          <Navbar.Brand className='text-white font-sans' href='/'>You Are What You Listen To</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link className='text-sm text-white font-sans' href='/listened'>Podcasts You've Listened To</Nav.Link>
            <Nav.Link className='text-sm text-white font-sans' href='/following'>Podcasts You're Following</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className='text-white text-2xl font-sans' href='/searchpodcast'>Search</Nav.Link>
            <Nav.Link className='text-white text-2xl font-sans' href='/register'>Create Account</Nav.Link>
            <Nav.Link className='text-white text-2xl font-sans' href='/login'>Login</Nav.Link>
            <Nav.Link className='text-white text-2xl font-sans'  href='/logout'>Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Menu


          
       
          
