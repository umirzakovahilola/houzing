
import React, {forwardRef} from 'react'
import { Container, Wrapper, Icon } from './style'





const Input=forwardRef(({
  children ,
  Icons ,
  type ,
  height ,
  width ,
  onChange ,
  placeholder ,
  name ,
  value , 
  defaultValue ,
  icon
},
  ref)=>{
    return (
      <Wrapper>
        <Icon>{Icons}</Icon>
      <Container
       placeholder={placeholder}
       onChange={onChange}
       name={name}
       value={value}
       defaultValue={defaultValue}
       type={type} 
       width={width}
       height={height}
       icon={icon}>
      {children}
      </Container>
      </Wrapper>
    )
  })
export default Input