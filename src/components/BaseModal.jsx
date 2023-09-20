import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setBaseModal} from "../features/baseModal/baseModalSlice";
import './../styles/BaseModal.css'
import BaseModalAddSeller from "./BaseModalAddSeller";

const BaseModal = () => {
  const dispatch = useDispatch()
  const baseModal = useSelector((state) => state.baseModal)
  const userId = localStorage.getItem('id')

  const [modalData, setModalData] = useState({
      name: '',
      phone: '',
      adress: '',
      type_of_housing: '',
      rooms: '',
      quadrature: '',
      floor: '',
      price: '',
      heating: '',
      series: '',
      document: '',
      year_of_construction: '',
      type_of_sentence: '',
      type_of_base: '',
      description:  '',
      comments:  '',
      link: '',
      is_active: true,
      total_floors: '',
      owner_price:  '',

      repair: '',
      furniture: '',
      plot:  '',
      communications: '',
      wall_material: '',
      comment_field: '',
      manager: userId
    }
  );

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setModalData({
      ...modalData,
      [name]: value,
    });
  };

  const closeBaseModal = () => {
    dispatch(setBaseModal(false))
  }

  return (
    <div onClick={closeBaseModal} className={baseModal ? 'base-modal active' : 'base-modal'}>
      <div onClick={(e) => e.stopPropagation()} className={baseModal ? 'modal__content active' : 'modal__content'}>

        <BaseModalAddSeller
          modalData={modalData}
          handleInputChange={handleInputChange}
        />

      </div>
    </div>
  );
};

export default BaseModal;