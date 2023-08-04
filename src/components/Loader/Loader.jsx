import React from 'react';
import { H1 } from './Loader.styled';

import { Dna } from 'react-loader-spinner';

const Loader = () => {
  return (
    <H1>
       <Dna
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{
        display: 'block',
        marginTop: '5px',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    />
    </H1>
  );
};

export default Loader;
