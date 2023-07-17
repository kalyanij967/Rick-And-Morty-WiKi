import React from 'react';
import Gender from './Category/Gender';
import Status from "./Category/Status"
import Species from './Category/Species';

const Filters = ({setStatus,updatePageNumber,setGender,updateSpecies}) => {
  let clear=()=>{
    setStatus("");
    updatePageNumber("");
    updateSpecies("");
    setGender("");
    window.location.reload(false);
  }
  return (<div className='col-lg-3 col-12 mb-5'>
    <div className="text-center fw-bold fs-4 mb-2">Filters</div>
    <div 
    onClick={clear}
    style={{cursor:"pointer"}} className="text-center text-decoration-underline text-primary my-2">clear filters</div>

    <div className="accordion" id="accordionExample">
      <Status setStatus={setStatus} updatePageNumber={updatePageNumber}/>
      <Species updateSpecies={updateSpecies} updatePageNumber={updatePageNumber}/>
      <Gender setGender={setGender} updatePageNumber={updatePageNumber}/>
    </div>
  </div>
  );
};

export default Filters;

