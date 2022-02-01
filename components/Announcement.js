import React from 'react';

function Announcement({text, heading}) {
  return <div className='announcement_banner'>
      <h5>{heading}</h5>
      <h5>{text}</h5>
  </div>;
}

export default Announcement;
