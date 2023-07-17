import React from 'react'
import FilterBTN from '../FilterBTN';

const Gender = ({updatePageNumber,setGender}) => {
    let genders=["Female","Male","Genderless","Unknown"];

  return (
    <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Gender
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body d-flex flex-wrap gap-2">
        {genders.map((items,index)=>(
          <FilterBTN updatePageNumber={updatePageNumber}
            task={setGender}
             key={index} 
             name="gender" 
             index={index} 
             items={items}
             />
        ))}
      </div>
    </div>
  </div>
  )
}

export default Gender
