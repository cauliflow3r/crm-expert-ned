import React from 'react';
import {useDispatch} from "react-redux";
import {setTypeOfBase} from "../features/typeOfBase/typeOfBaseSlice";
import '../styles/HeaderDatabase.css'
import {setBaseModal} from "../features/baseModal/baseModalSlice";
import {getBase} from "../crm-logic/getBase";
import {setIsSelect} from "../features/selectModalType/isSelectModalTypeSlice";

const HeaderDatabase = () => {

  const dispatch = useDispatch()
  const id = localStorage.getItem('id')

  const ChangeToSalesBase = () => {
    dispatch(setTypeOfBase('Продажа'))
  }

  const ChangeToPurchasesBase = () => {
    dispatch(setTypeOfBase('Покупка'))
  }

  const ChangeToAllBase = () => {
    dispatch(setTypeOfBase(`Полная база`))
  }

  const ChangeToNotRelevantBase = () => {
    dispatch(setTypeOfBase(`Неактуальные`))
  }

  const ChangeToPotentialBase = () => {
    dispatch(setTypeOfBase(`Потенциальные`))
  }

  const ChangeToDeleteBase = () => {
    dispatch(setTypeOfBase(`На удаление`))
  }

  const ChangeToMeetingBase = () => {
    dispatch(setTypeOfBase(`Встречи`))
  }

  const ChangeToResultOfMeet = () => {
    dispatch(setTypeOfBase(`Результаты встречи`))
  }

  const ChangeToMakeDeal = () => {
    dispatch(setTypeOfBase(`Заключение сделки`))
  }

  const openBaseModal = () => {
    dispatch(setBaseModal(true))
    dispatch(setIsSelect(true))
  }

  return (
    <div>

          <div className="header-bases-wrap">
            <div
              className="header-sales-base"
              onClick={ChangeToSalesBase}
            >
              Собственники
            </div>
            <div
              className="header-potential-base"
              onClick={ChangeToPotentialBase}
            >
              Потенциальные
            </div>
            <div
              className="header-purchases-base"
              onClick={ChangeToPurchasesBase}
            >
              Квалифицирован
            </div>
            <div
              className="header-not-relevant-base"
              onClick={ChangeToMeetingBase}
            >
              Встречи
            </div>
          </div>
          <div className="header-bases-wrap">
            <div
              className="header-sales-base"
              onClick={ChangeToResultOfMeet}
            >
              Результаты встречи
            </div>
            <div
              className="header-sales-base"
              onClick={ChangeToMakeDeal}
            >
              Заключение сделки
            </div>
            <div
              className="header-potential-base"
              onClick={ChangeToNotRelevantBase}
            >
              Неактуальные
            </div>
            <div
              className="header-sales-base"
              onClick={ChangeToAllBase}
            >
              Полная база
            </div>
          </div>

          <div className='header-head-buttons-flex-box'>
            <div className="header-head-buttons">
              <button
                onClick={openBaseModal}
              >Добавить клиента</button>
              <button
                onClick={() => getBase(dispatch)}
              >Обновить</button>
            </div>
            { id === '7' &&
              <div className="header-head-buttons">
              <button
                onClick={ChangeToDeleteBase}
              >Корзина
              </button>
            </div>}
          </div>
    </div>
  );
};

export default HeaderDatabase;