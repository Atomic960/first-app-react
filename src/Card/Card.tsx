import React from 'react'
import "./Card.css"
export const Card = (ciao:any) => {
  return (
    <>
    <div className="card" style={{width: "18rem"}}>
    <div className="card-body">
        <h5 className="card-title">{ciao.caccola.name}</h5>
        <p className="card-text">{ciao.description}</p>
        <a href="#" className="btn btn-primary">{ciao.price}</a>
    </div>
    </div>
    </>
  )
}


