import React from 'react'

export default function Button({ children, handleClick }) {

  let pageId;

  if(children === 'Popular Movies'){
    pageId = 1;
  }else{
    pageId = 2;
  }

  return (
    <>
        <button className="btn btn-link" onClick={() => handleClick(pageId)}>{children}</button>
    </>
  )
}
