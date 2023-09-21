import React from 'react';
import {useDispatch} from "react-redux";
import {setTypeOfBase} from "../features/typeOfBase/typeOfBaseSlice";
import '../styles/HeaderDatabase.css'
import {setBaseModal} from "../features/baseModal/baseModalSlice";
import {getBase} from "../crm-logic/getBase";
import {setIsSelect} from "../features/selectModalType/isSelectModalTypeSlice";

const HeaderDatabase = () => {

  const dispatch = useDispatch()

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
          onClick={ChangeToNotRelevantBase}
        >
          Неактуальные
        </div>
        <div
          className="header-all-base"
          onClick={ChangeToAllBase}
        >
          Полная база
        </div>
      </div>
      <div className="header-head-buttons">
        <button
          onClick={openBaseModal}
        >Добавить клиента</button>
        <button
          onClick={() => getBase(dispatch)}
        >Обновить</button>
      </div>
    </div>
  );
};

export default HeaderDatabase;