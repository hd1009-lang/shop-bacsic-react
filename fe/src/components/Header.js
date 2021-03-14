import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/userActions';

const Header = () => {
  const userLogin=useSelector(state=>state.userLogin);
  const {userInfo} = userLogin;
 
  const dispatch=useDispatch();
  const handleLogout =()=>{
    dispatch(logout())
  }
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
          {userInfo ? (
            <NavDropdown title={userInfo.name} id='username'>
              <LinkContainer to='/profile'>
                  <NavDropdown.Item>Thông tin</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Item onClick={()=>handleLogout()}>Đăng xuất</NavDropdown.Item>
            </NavDropdown>
          ) : ( <LinkContainer to='/login'>
          <Nav.Link >
            <AiOutlineUser /> Sign In
          </Nav.Link>
          </LinkContainer>
)}
         
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
