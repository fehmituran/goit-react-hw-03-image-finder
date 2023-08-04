import React, { Component } from 'react';
import { Item, Image, ListItem } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  showModal = () => {
    this.setState({ isModalOpen: true });
  };
  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { largeImageURL, tags, webformatURL } = this.props.item;
    const { isModalOpen } = this.state;

    return (
      <>
        <ListItem>
          <Item>
            <Image
              src={webformatURL}
              alt={tags}
              loading="lazy"
              onClick={this.showModal}
            />
          </Item>
        </ListItem>
        {isModalOpen && (
          <Modal url={largeImageURL} tag={tags} onClose={this.closeModal} />
        )}
      </>
    );
  }
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    tags: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
};