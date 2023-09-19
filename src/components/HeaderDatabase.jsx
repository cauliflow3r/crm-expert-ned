import React from 'react';
import {useDispatch} from "react-redux";
import {setTypeOfBase} from "../features/typeOfBase/typeOfBaseSlice";
import '../styles/HeaderDatabase.css'

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

  return (
    <div className="header-bases-wrap">
      <div
        className="header-sales-base"
        onClick={ChangeToSalesBase}
      >
        Продажи
      </div>
      <div
        className="header-purchases-base"
        onClick={ChangeToPurchasesBase}
      >
        Покупки
      </div>
      <div
        className="header-potential-base"
        onClick={ChangeToPotentialBase}
      >
        Потенциальные
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
  );
};

export default HeaderDatabase;