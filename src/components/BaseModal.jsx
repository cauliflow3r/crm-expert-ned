import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setBaseModal} from "../features/baseModal/baseModalSlice";
import './../styles/BaseModal.css'
import BaseModalAddSeller from "./BaseModalAddSeller";
import BaseModalAddBuyer from "./BaseModalAddBuyer";
import BaseModalAddPotential from "./BaseModalAddPotential";
import BaseModalEditClient from "./BaseModalEditClient";
import {
  setEdit,
  setIsSelect,
  setPotential,
  setPurchase,
  setSale
} from "../features/selectModalType/isSelectModalTypeSlice";

const BaseModal = () => {
  const dispatch = useDispatch()
  const baseModal = useSelector((state) => state.baseModal)
  const userId = localStorage.getItem('id')
  const isModalType = useSelector((state) => state.isSelectModalType)

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
    dispatch(setIsSelect(false))
    dispatch(setSale(false))
    dispatch(setPurchase(false))
    dispatch(setPotential(false))
    dispatch(setEdit(false))
  }

  const saleOpen = () => {
    dispatch(setIsSelect(false))
    dispatch(setSale(true))
    dispatch(setPurchase(false))
    dispatch(setPotential(false))
    dispatch(setEdit(false))
  }

  const purchaseOpen = () => {
    dispatch(setIsSelect(false))
    dispatch(setSale(false))
    dispatch(setPurchase(true))
    dispatch(setPotential(false))
    dispatch(setEdit(false))
  }

  const potentialOpen = () => {
    dispatch(setIsSelect(false))
    dispatch(setSale(false))
    dispatch(setPurchase(false))
    dispatch(setPotential(true))
    dispatch(setEdit(false))
  }

  return (
    <div onClick={closeBaseModal} className={baseModal ? 'base-modal active' : 'base-modal'}>
      <div onClick={(e) => e.stopPropagation()} className={baseModal ? 'modal__content active' : 'modal__content'}>

        {
          isModalType.isSelect &&
          <div className='base-modal-buttons-wrap'>
            <button
              onClick={saleOpen}
            >
              Собственник
            </button>
            <button
              onClick={purchaseOpen}
            >
              Покупатель
            </button>
            <button
              onClick={potentialOpen}
            >
              Потенциальный клиент
            </button>
          </div>
        }

        {
          isModalType.sale &&
          <BaseModalAddSeller
            modalData={modalData}
            handleInputChange={handleInputChange}
          />
        }

        {
          isModalType.purchase &&
          <BaseModalAddBuyer
            modalData={modalData}
            handleInputChange={handleInputChange}
          />
        }

        {
          isModalType.potential &&
          <BaseModalAddPotential
            modalData={modalData}
            handleInputChange={handleInputChange}
          />
        }

        {  isModalType.edit &&
          <BaseModalEditClient />
        }

      </div>
    </div>
  );
};

export default BaseModal;