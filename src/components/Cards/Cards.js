import React from 'react'
import styles from "./Cards.module.scss"
import { Link } from 'react-router-dom';

const Cards = ({results,page}) => {
  let display;
  if(results){
    display=results.map(x=>{
        let {id,name,image,location,status} =x
        return ( 
        <Link 
          style={{textDecoration:"none"}}
          to={`${page}${id}`}
         key={id} className="col-lg-4 col-md-6 col-12 position-relative mb-4 text-dark">
            <div className={`${styles.cards} d-flex flex-column justify-content-center`}>
                <img src={image} alt="" className={`${styles.img} img-fluid`} />
                <div className={`${styles.content} content`}>
                    <div className="fs-4 fw-bold mb-4">{name}</div>
                    <div className="">
                        <div className="fs-6 mb-2">Last Location</div>
                        <div className="fs-5">{location.name}</div>
                    </div>
                </div>
            </div>
            {(()=>{
                if(status==="Dead"){
                    return (
                        <div className={`${styles.badge} badge bg-danger position-absolute`}>{status}</div>
                        )
                    }
                    else if(status==="Alive"){
                        return (
                        <div className={`${styles.badge} badge bg-success position-absolute`}>{status}</div>
                        )
                    }
                    else{
                        return (
                        <div className={`${styles.badge} badge bg-secondary position-absolute`}>{status}</div>
                        )
                    }

            })()}

        </Link>)
    });
  }
  else{
    display="No characters found :/";
  }
  
  return  <>{display}</>;
};

export default Cards;
