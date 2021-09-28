import React, { useState, useEffect } from 'react';
import ImageItem from './ImageItem';
import client from './Client';
function ImageGrid() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] {
          title,
          slug,
          body,
          mainImage{
            asset ->{
              _id,
              url
            },
            alt
          }
       }`
      )
      .then((data) => setImages(data.reverse()))
      .catch(console.error);
  }, []);

  return (
    <div
      id='imageDivId'
      className='min-h-screen imageContainerGrid my-6 mx-auto sm:ml-4 '
    >
      {images.map((image) => {
        return (
          <article key={image.slug.current}>
            <ImageItem imageUrl={image.mainImage.asset.url} alt={image.title} />
          </article>
        );
      })}
    </div>
  );
}

export default ImageGrid;
