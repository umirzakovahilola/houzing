import { type } from "@testing-library/user-event/dist/type";
import styled from "styled-components";

const getType=()=>{
  switch ({type}){
    case 'dark':return{
      background:'transparent',
      color:'#fff',
      border:'1px solid #fff'
        }
    case 'light':return{
      background:'transparent',
      color:'#0D263B',
      border:'1px solid #fff'
       }
        case 'primary':return {
          background:'#0061DF',
          color:'#fff',
          border:'none'
       
      }

        default: return {
            background:'#0061DF',
            color:'#fff',
            border:'none'
         
        }
       
  
  }
}

export const Container=styled.input`
width: ${({width})=>width ? `${width}px`  : '200px' };
height: ${({height})=>height ? `${height}px`  : '44px' };
/* display: flex;
align-items: center;
justify-content: center; */
outline:none;
border:1px solid #e6e9ec;
padding: 5px 20px;
padding-left:10px;
/* margin-top:10px; */
border-radius: 2px;
font-size:${({fontSize})=>fontSize ? fontSize :'14px'};
/* cursor: pointer; */
/* ${getType} */
`