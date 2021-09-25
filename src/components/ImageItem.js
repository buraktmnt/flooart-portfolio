import React from 'react';

function ImageItem({ imageUrl, description, alt }) {
  return (
    <article className='relative'>
      <div className=' text-center imageDiv  '>
        <img
          src={imageUrl}
          loading='lazy'
          alt={alt}
          className='filter brightness-100  transition    '
        />
        <p className='text-xs  colorPrimary sm:mx-auto cursor-default absolute transition md:text-sm lg:text-base	imgText		  '>
          {description}
        </p>
      </div>
    </article>
  );
}

export default ImageItem;
