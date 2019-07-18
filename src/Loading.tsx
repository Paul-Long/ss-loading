import React from 'react';

export default function () {
  return (
    <div className='ss-loading'>
      <div className='ss-loading-container'>
        <svg className='ss-circular' viewBox='25 25 50 50'>
          <circle className='path' cx='50' cy='50' r='20' fill='none' stroke-width='3' stroke-miterlimit='10' />
        </svg>
      </div>
    </div>
  )
}
