import React from 'react'
import AnimatedCursor from "react-animated-cursor"

function CustomCursor() {
  return (
    
    <AnimatedCursor
    
        color="#fff"
      innerSize={8}
      outerSize={35}
      innerScale={1}
      outerScale={1.7}
      outerAlpha={0}
      outerStyle={{
        mixBlendMode: 'exclusion'
      }}

      clickables={[
        {
          target: '.cursor_enlarge',
          options: {
            innerSize: 50,
            outerSize: 60,
            outerAlpha: 1,
            innerScale: 3,
            outerScale: 10
          }
        }
        
      ]}
    
    />

  )
}

export default CustomCursor
