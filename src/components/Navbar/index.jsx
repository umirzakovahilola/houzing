import React from 'react'
import {  Outlet, Navigate } from 'react-router-dom'
import { navbar } from '../../utils/navbar'
import { Container, Section,Logo, Wrapper,Link } from './style'


export const Home = () => {
  return (
    <Container>
      <Wrapper>
      <Section onClick={() => Navigate('/home')}>
       <Logo/>
        <h3>Logo</h3>
      </Section>
      <Section>
       {
        navbar.map(({title,path},index)=>{
          return(
            <Link key={index} to={path}>{title}</Link>
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
