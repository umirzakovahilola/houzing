import React from 'react'
import { Container } from './style'

export const Button = ({children ,type ,height ,onClick}) => {
  return (
    <Container onClick={onClick} type={type} height={height}>{children || 'Genericc Button'}</Container>
  )
}


export default Button