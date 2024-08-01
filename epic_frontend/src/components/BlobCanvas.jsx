import {Canvas} from "@react-three/fiber"
import React from 'react'
import Blob from "./Blob"
import "./BlobCanvas.css"
import BgVdo from "../assets/epic_videos/Animated_woman_Dancing.mp4"


export default function BlobCanvas() {

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="blobcontainer">

      <div className="title_container">

        <div className="title cursor_enlarge">
          EMPOWERING PERIODS
        </div>        

        <div className="title cursor_enlarge video_middle">
        <video autoPlay loop muted >
        <source src={BgVdo} type='video/mp4'/>
        </video>
          IN
        </div>

        <div className="title cursor_enlarge text_enlarge">
          CONFIDENCE
        </div>

      </div>
      
        
      <div className="blob_canvas">
      <Canvas camera={{position: [0.0, 0.0, 8.0]}}>
        <Blob/>
      </Canvas>
      </div>
    </div>
  )
}
