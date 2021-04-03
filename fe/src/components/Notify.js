import React from 'react'
import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import {NOTIFY} from '../constants/notifyConstant'
const Notify = ({message}) => {
  const dispatch=useDispatch();
  return (
    <Container>
      <i onClick={()=>dispatch({type:NOTIFY,payload:{}})}><FaTimes/></i>
      {message}
    </Container>
  )
}

const Container=styled.div`
  position:fixed;
  bottom:2rem;
  left:5rem;
  height:3rem;
  z-index:1;
  background-color:lightgreen;
  text-align:center;
  padding:.5rem 2rem;
  i{
    position:absolute;
    top:2px;
    right:5px;
    cursor: pointer;
  }
`

export default Notify
