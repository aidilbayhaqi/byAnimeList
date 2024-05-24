"use client"
import { XCircle } from '@phosphor-icons/react'
import React from 'react'
import YouTube from 'react-youtube'

const Video = ({videoId}) => {
  const option={
    width:'500',
    height:'300'
  }
  
    return (
    <>
     <div>
        <YouTube videoId={videoId} onReady={(event)=> event.target.pauseVideo()}
        opts={option}></YouTube>
        </div>   
    </>
  )
}

export default Video