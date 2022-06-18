import React, { useEffect, useRef, useState } from 'react'
import useElementPosition from '../../hooks/useElementPosition'
import { ImageDiv, Main, TextDiv } from './ScrollAnimation.styled'

const data = [
    {
        headding:`AirPods Pro`
    },
    {
        headding: `Active Noise Cancellation
        for immersive sound.`
    },
    {
        headding: `Transparency mode for hearing what’s happening around you.`
    },{
        headding: `A customizable fit
        for all-day comfort.`
    },
    {
        headding: `Magic like you’ve never heard.`
    }
]

const ScrollAnimation = () => {
    const [textIndex,setTextIndex] = useState(0)
    const elementRef = useRef(null)
    const totalFrames = 144
    const imageFrame = useElementPosition(elementRef,totalFrames,1)
    const getImage = (frame) => (`https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${frame.toString().padStart(4, '0')}.jpg`)

   useEffect(()=>{
    let index = getTextIndexPercentage()
    if(index<data.length) setTextIndex(index)
   },[imageFrame]) 


   function getTextIndexPercentage(){
   return Math.floor(((data.length) * imageFrame) / totalFrames )
   }

  return (
    <Main ref={elementRef} >
        <ImageDiv imageFrame={imageFrame} >
       <img src={getImage(imageFrame)} alt=""/>
       <TextDiv index={textIndex} dataLength={data.length}>
           <div >
               {data?.map(({headding},i)=>{
               return  <h1 style={{
                   opacity:i===textIndex?1:0
               }} >{headding}</h1>
           })}
           </div>
           
       </TextDiv>
       </ImageDiv>
       
    </Main>
  )
}

export default ScrollAnimation