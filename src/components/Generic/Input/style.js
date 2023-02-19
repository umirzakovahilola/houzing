import styled from "styled-components";

const  getType=(type)=>{
    switch(type){
        case 'dark':return{
            background:  'transparent',
            color:'#fff',
            border:'1px solid #fff'
        }
        case 'light':
            return{
            background:  'transparent',
            color:'#0D263B',
            border:'none'
            }
        default:return{
            background:  '#0061DF',
            color:'#fff',
            border:'none'
        }
    }

} 

export const Container=styled.input`
height: ${({height})=>height ? `${height}px` : '44px'};
width: ${({width})=>width ? `${width}px` : '200px'};
/* display:flex;
align-items:center;
justify-content:center; */
outline:none;
padding-left:10px;
border:1px solid #E6E9EC;
border-radius:2px;
font-size:${({fontSize})=>fontSize ? fontSize :'14px'} ;
/* cursor: pointer; */
/* ${getType} */
`