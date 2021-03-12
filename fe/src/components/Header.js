import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
const Header = () => {
  return (
    <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
      <LinkContainer to='/'>
        <Navbar.Brand>Shop</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          <LinkContainer to='/cart'>
            <Nav.Link >
              <AiOutlineShoppingCart /> Cart
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to='/login'>
          <Nav.Link >
            <AiOutlineUser /> Sign In
          </Nav.Link>
          </LinkContainer>

          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
