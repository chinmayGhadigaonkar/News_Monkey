import React from 'react'
import img from "../download.svg"
const  Newsitem = (props)=> {
   
   
        let{title,imgS,Discription,newsurl,author,publishedAt,nameofsite}=props; 
        
        return (
            <div>
                
                <div className="card object-fit-cover border rounded my-2 mx-0 overflow-hidden  " >
                {/* <span className="badge rounded-pill text-bg-warning">Warning</span> */}
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning my-3" style={{margin: "7px",padding: "10px",marginLeft:" -59px",marginTop:"40px"}}>{nameofsite}</span>
                   
                    <img src= {!imgS?img:imgS} className="card-img-top my-0 " alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{Discription}</p>
                            <p className="card-text"><small className="text bold h6">Author-{!author?"Unkonwn":author}</small></p>
                            <p className="card-text"><small className="text-muted">{new Date(publishedAt).toUTCString()}</small></p>

                            <a href={newsurl}  className="btn btn-dark btn-sm  " target='_blank' rel='noreferrer'>Read more</a>
                        </div>
                </div>
            </div>
        )
    
}


export default Newsitem