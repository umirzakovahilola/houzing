import React from 'react'
import {  Outlet , useNavigate } from 'react-router-dom'
import { navbar } from '../../utils/navbar'
import { Container, Section,Logo, Wrapper,Link } from './style'


export const Home = () => {
  const navigate=useNavigate();
  return (
    <Container>
      <Wrapper>
      <Section logo onClick={() => navigate('/home')}>
       <Logo/>
        <h3>Housing</h3>
      </Section>
      <Section>
       {
        navbar.map(({title,path},index)=>{
          return(
            <Link className={({isActive}) => isActive && 'active'} key={index} to={path}>{title}</Link>
          )
        })
       } 
      </Section>
      
      <Section><button>Login</button></Section>
      </Wrapper>
      <Outlet/>
    </Container>
  )
}

export default  Home
