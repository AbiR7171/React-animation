import React from 'react';
import "./Transform-OriginRotateSkewScale.css"

const TransformOriginRotateSkewScale = () => {
    return (
       <div className='componentContainer'> 
        {/* First  */}
            <div className='boxContainer'>
               <div className="boxOne"></div>
               <div className="boxTwo"></div>
          </div>

          {/* second */}

          <div className='boxContainerTwo'>
               <div className="boxThree"></div>
               <div className='fourthBoxContainer'>
                   <div className="boxFour"></div>
               </div>
          </div>
       </div>
    );
};

export default TransformOriginRotateSkewScale;