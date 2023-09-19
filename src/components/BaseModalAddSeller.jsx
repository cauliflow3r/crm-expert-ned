import React from 'react';

const BaseModalAddSeller = (props) => {

  const {
    modalData,
    handleInputChange
  } = props

  return (
    <div>
      <form>
        <div className="base-modal-window-flex">
          <div className="base-modal-window">
            <input
              type="text"
              name='name'
              placeholder='Имя клиента'
              value={modalData.name}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name='phone'
              placeholder='Телефон'
              value={modalData.phone}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default BaseModalAddSeller;