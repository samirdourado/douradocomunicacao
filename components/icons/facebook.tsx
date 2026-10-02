import React, { SVGProps } from 'react';

export function LineMdFacebook(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='2em'
      height='2em'
      viewBox='0 0 24 24'
      {...props}
    >
      {/* Icon from Material Line Icons by Vjacheslav Trushkin - https://github.com/cyberalien/line-md/blob/main/license.txt */}
      <g
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='4'
      >
        <path strokeDasharray='24' d='M17 4l-2 0c-2.5 0 -4 1.5 -4 4v12'>
          <animate
            fill='freeze'
            attributeName='stroke-dashoffset'
            dur='0.5s'
            values='24;0'
          />
        </path>
        <path strokeDasharray='10' strokeDashoffset='10' d='M8 12h7'>
          <animate
            fill='freeze'
            attributeName='stroke-dashoffset'
            begin='0.6s'
            dur='0.2s'
            to='0'
          />
        </path>
      </g>
    </svg>
  );
}
