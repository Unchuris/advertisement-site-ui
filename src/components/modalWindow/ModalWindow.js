import React, { Component } from 'react';
import Modal from 'react-modal';
import './style.css';
const customStyles = {
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: '10%',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '700px',
    borderColor: '#681834',
  },
};
class ModalWindow extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({ modalIsOpen: true });
    this.props.openModal();
  }
  closeModal() {
    this.setState({ modalIsOpen: false });
    this.props.closeModal();
  }
  render() {
    let openStyle = `modal-open ${this.props.openStyle}`;
    let closeStyle = `modal-close ${this.props.closeStyle}`;
    return (
      <div className='modal__block'>
        <div className={openStyle} onClick={this.openModal}>
          { this.props.openText }
        </div>
        <div className='modal'>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel='Modal'
          >
            {this.props.children}
            <input
              className={closeStyle}
              onClick={this.closeModal}
              value={this.props.closeText}
              type='button'
            />
          </Modal>
        </div>
      </div>
    );
  }
}
export default ModalWindow;