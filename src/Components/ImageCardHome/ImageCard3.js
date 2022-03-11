import React from 'react'

function ImageCard3() {
    return (
        <div className="blog-card blog-card3 spring-fever">
             <div className="title-content">
             <h3><a href="#" >Haylou GT3</a></h3>
             </div>
             <div className="card-info">
             <a href="#">Details view<span className="licon icon-arr icon-black"></span></a>
       </div>
       <div className="utility-info">
         <ul className="utility-list">
           <li><span className="licon icon-like"></span><a href="#">192</a></li>
           <li><span className="licon icon-com"></span><a href="#">86</a></li>
           <li><span className="licon icon-dat"></span>03 Jan 2022</li>
           <li><span className="licon icon-tag"></span><a href="#">Photos</a>, <a href="#">Nice</a></li>
         </ul>
       </div>
       <div className="gradient-overlay"></div>
          <div className="color-overlay"></div>
       </div> 
    )
}

export default ImageCard3
