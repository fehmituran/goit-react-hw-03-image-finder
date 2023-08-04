import React from 'react';
import { LoaderDiv } from './Loader.styled';

import { GooeyCircleLoader } from "react-loaders-kit";



const Loader = ({isLoading}) => {
  console.log({isLoading})
const loaderProps = {
  loading: isLoading,
  size: 275,
  duration: 2,
  colors: ["#99fffe", "#f42e00", "#042549"],
};

return (
  <LoaderDiv>
      <GooeyCircleLoader {...loaderProps} />
      <div
        className="loader-text"
        strings={["Loading..."]}
        
      />
  </LoaderDiv>
);
}

export default Loader;

