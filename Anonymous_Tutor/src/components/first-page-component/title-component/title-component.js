import React from 'react';
import './title.css';

const Title = () => {
  return (
    <>
    {/* <div className={'row'}>
    <label className={'text'}>Welcome to</label>
    </div>
     <p>
     <label className={'title'}>ANONYMOUS TUTOR</label>
     </p> */}

<div className='text'>

<div className="row">
  {/* <div className="col-sm-8">col-sm-8</div>
  <div className="col-sm-4">col-sm-4</div> */}
  <label className={'text'}>Welcome to</label>
</div>
<div className="row">
  {/* <div className="col-sm">col-sm</div>
  <div className="col-sm">col-sm</div>
  <div className="col-sm">col-sm</div> */}
  <label className={'title'}>ANONYMOUS TUTOR</label>
</div>
</div>

      
    </>
  );
};
export default Title;
