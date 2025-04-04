import React from 'react'
import { Navbar , Container } from 'react-bootstrap'

function Header() {
  return (
    <div>
        <Navbar className="bg-warning ">
        <Container>
          <Navbar.Brand href="#home" className='text-secondary'>
            <img
              alt=""
              src="https://cdn.dribbble.com/userupload/41861080/file/original-b70912c5096c52f7c256e45b50861bb3.gif"
              width="50"
              height="50"
              className="d-inline-block align-top mx-5"
            />{' '}
            Auto-CounterApp
          </Navbar.Brand>
        </Container>
      </Navbar>
      
    </div>
  )
}

export default Header
