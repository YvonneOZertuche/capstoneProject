import React, { useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function Menu () {
  //if localstorage token returns, then you may access search, following, listened, logout
  //if not, you can see register and login

  //log in/log out requires refresh - solve second
  // const [navSnippet, setNavSnippet] = useState(null)
  const [token, setToken] = useState(localStorage.token)

 
  useEffect(() => {
    
    console.log();
  }, [token])
  
  
  return (

    <Navbar className='background-color: bg-red-600 ' variant='light'>

      <Container className="text-9xl">
        <Navbar.Brand className='font-serif text-white text-9xl' href='/'>
          Your Podcasts
        </Navbar.Brand>

        <Nav className='justify-center bold font-serif antialiased text-white background-color: bg-red-600 text-2xl'>

          <div className="bold text-white place-self-start">
          {/* <Nav.Link className='text-bold place-self-start' href='/'>YourPodcasts | </Nav.Link> */}
          {/* {loggedin}{loggedout} */}
          {/* {navSnippet} */}
          
          {token ? 
          
          <>
          <Nav.Link className="text-white" href='/searchpodcast'>Search </Nav.Link><Nav.Link className="text-white" href='/following'>Following </Nav.Link>
        <Nav.Link className="text-white" href='/listened'>Listened</Nav.Link>
        <Nav.Link className="text-white" href='/logout'>Logout </Nav.Link>
        </>
          
          
          :
          <> 
          
            <Nav.Link href='/register'>Register</Nav.Link><Nav.Link href='/login'>Login</Nav.Link><Nav.Link href='/searchpodcast'>Search</Nav.Link>
          
          </>
          
        
       
        }
          
          </div>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Menu


