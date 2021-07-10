import React from 'react';
import { SyncLoader } from 'react-spinners';
import { LoaderWrapper } from './StyledComponents';


const Loader = () => {

  return (
    <LoaderWrapper>
      <SyncLoader></SyncLoader>
    </LoaderWrapper>
  )
}

export default Loader;