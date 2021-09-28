import React from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

function ImageItem({ imageUrl, alt }) {
  return (
    <article className='relative'>
      <Zoom transitionDuration='100'>
        <div className=' imageDiv'>
          <img
            src={imageUrl}
            alt={alt}
            className='filter brightness-100  transition    '
          />
        </div>
      </Zoom>
    </article>
  );
}

export default ImageItem;
