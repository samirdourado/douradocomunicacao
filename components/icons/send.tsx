import React, { SVGProps } from 'react';

const MaterialSymbolsSend = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1.5em'
      height='1.5em'
      viewBox='0 0 24 24'
      {...props}
    >
      {/* Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE */}
      <path fill='currentColor' d='M3 20v-6l8-2l-8-2V4l19 8z' />
    </svg>
  );
};

export default MaterialSymbolsSend;
