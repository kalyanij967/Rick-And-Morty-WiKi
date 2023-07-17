import React from 'react'

const FilterBTN = ({name,index,items,task,updatePageNumber}) => {
  return (
    <div className="">
        <style jsx>
            {`  
                .x:checked+label{
                    background-color:blue;
                    color:white;
                }
                input[type="radio"]{
                display:none ;
                }
            `}
        </style>
        <div className="form-check">
        <input 
        onClick={()=>{
          updatePageNumber(1);
          task(items);
        }}
        className="form-check-input x" 
        type="radio" 
        name={name} 
        id={`${name}-${index}`}
        />
        <label class="btn btn-outline-primary" htmlFor={`${name}-${index}`}>{items}</label>
        </div>

    </div>
  );
};

export default FilterBTN;
