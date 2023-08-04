import React, { Component } from 'react';
import { Overlay, ModalImage } from './Modal.styled';
import PropTypes from 'prop-types';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  closeOverlayClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { url, tag } = this.props;

    return (
      <Overlay onClick={this.closeOverlayClick}>
        <ModalImage>
          <img src={url} alt={tag} />
        </ModalImage>
      </Overlay>
    );
  }
}

export default Modal;

Modal.propTypes = {
  url: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};