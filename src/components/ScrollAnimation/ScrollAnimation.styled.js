import styled from "styled-components";

export const Main = styled.div`
width: 100%;
height: 600vh;
background-color: black;

position: relative;
`

export const ImageDiv = styled.div`
 position: sticky;
 top: 0;
 width: 100%;
 height: 100vh;
 display: flex;
 align-items: center;
 justify-content: center;
 & >img{
     width: ${(prop)=>(1000-prop.imageFrame)+"px"};
 }
 
`

export const TextDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 50%;
  overflow: hidden;
  & > div{
      position: absolute;
      top: -${(prop)=>(100*prop.index)}%;
      height: ${(prop)=> 100 * prop.dataLength}%;
      display: flex;
      flex-direction: column;
      align-items: center;
      transition: top 0.5s ease;
      & > h1{
          text-align: center;
          width: 60%;
        display: flex;
        align-items: center;
        justify-content: center;
          height: 100%;
         color: white;
         font-size: 60px;
  }
  }
  
`