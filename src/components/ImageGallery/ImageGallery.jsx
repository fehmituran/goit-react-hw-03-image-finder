import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { GalleryList } from './ImageGallery.styled';
import PropTypes from 'prop-types';

const ImageGallery = ({ images }) => {
  console.log(images)
  return (
    <GalleryList>
      {images.map(img => {
        return <ImageGalleryItem key={img.id} item={img} />;
      })}
    </GalleryList>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};
