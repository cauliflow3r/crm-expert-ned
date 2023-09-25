import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setTypeOfBase} from "../features/typeOfBase/typeOfBaseSlice";
import '../styles/HeaderDatabase.css'
import {setBaseModal} from "../features/baseModal/baseModalSlice";
import {getBase} from "../crm-logic/getBase";
import {setIsSelect} from "../features/selectModalType/isSelectModalTypeSlice";
import {
  setByRooms,
  setBySearchField,
  setByTypeOfHousing,
  setMaxPrice,
  setMinPrice
} from "../features/searchParametres/searchParametersSlice";

const HeaderDatabase = () => {

  const dispatch = useDispatch()
  const id = localStorage.getItem('id')
  const active = useSelector((state) => state.typeOfBase)
  const searchParameters = useSelector((state) => state.searchParameters)
  const isButtonActive = useSelector((state) => state.buttonLock)

  const isSearch = async () => {
    await getBase(dispatch, searchParameters)
  }

  const isReset = async () => {
    await dispatch(setByRooms(''))
    await dispatch(setByTypeOfHousing(''))
    await dispatch(setBySearchField(''))
    await dispatch(setMinPrice(0))
    await dispatch(setMaxPrice(0))
  }

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

  const ChangeToClosedBase = () => {
    dispatch(setTypeOfBase(`Закрытые сделки`))
  }

  const openBaseModal = () => {
    dispatch(setBaseModal(true))
    dispatch(setIsSelect(true))
  }

  return (
    <div>

          <div className="header-bases-wrap ">
            <div
              className={ active === 'Продажа' ? 'header-sales-base header-head-button-active' : "header-sales-base"}
              onClick={ChangeToSalesBase}
            >
              Собственники
            </div>
            <div
              className={ active === 'Потенциальные' ? 'header-potential-base header-head-button-active' : " header-potential-base"}
              onClick={ChangeToPotentialBase}
            >
              Потенциальные
            </div>
            <div
              className={ active === 'Покупка' ? 'header-purchases-base header-head-button-active' : "  header-purchases-base"}
              onClick={ChangeToPurchasesBase}
            >
              Квалифицирован
            </div>
            <div
              className={ active === 'Встречи' ? 'header-not-relevant-base header-head-button-active' : "header-not-relevant-base"}
              onClick={ChangeToMeetingBase}
            >
              Встречи
            </div>
          </div>
          <div className="header-bases-wrap">
            <div
              className={ active === 'Результаты встречи' ? 'header-sales-base header-head-button-active' : "header-sales-base"}
              onClick={ChangeToResultOfMeet}
            >
              Результаты встречи
            </div>
            <div
              className={ active === 'Заключение сделки' ? 'header-sales-base header-head-button-active' : "header-sales-base"}
              onClick={ChangeToMakeDeal}
            >
              Заключение сделки
            </div>
            <div
              className={ active === 'Неактуальные' ? 'header-potential-base header-head-button-active' : "header-potential-base"}
              onClick={ChangeToNotRelevantBase}
            >
              Неактуальные
            </div>
            <div
              className={ active === 'Полная база' ? 'header-sales-base header-head-button-active' : "header-sales-base"}
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
                disabled={isButtonActive}
                onClick={ async () => await getBase(dispatch, searchParameters)}
              >Обновить</button>
            </div>

            <div className="header-search-filter-field">
              <select value={searchParameters.byRooms} onChange={(e) => dispatch(setByRooms(e.target.value))}>
                <option value="">Кол-во комнат</option>
                <option value="1">1 комната</option>
                <option value="2">2 комнаты</option>
                <option value="3">3 комнаты</option>
                <option value="4">4 комнаты</option>
                <option value="5">5 комнат</option>
                <option value="6">6 комнат</option>
              </select>
              <select value={searchParameters.byTypeOfHousing} onChange={(e) => dispatch(setByTypeOfHousing(e.target.value))}>
                <option value="">Тип недвижимости</option>
                <option value="Частный дом">Частный дом</option>
                <option value="Квартира">Квартира</option>
                <option value="Коммерческая недвижимость">Ком.недвиж.</option>
                <option value="Участок">Участок</option>
              </select>
              <input
                type="text"
                placeholder='Ключевые слова...'
                value={searchParameters.bySearchField}
                onChange={(e) => dispatch(setBySearchField(e.target.value))}
              />
              <span className='header-head-buttons-price'>
                <input
                  type="text"
                  placeholder='Цена от'
                  value={ searchParameters.minPrice ? searchParameters.minPrice : '' }
                  onChange={(e) => dispatch(setMinPrice(e.target.value))}
                />
                <input
                  type="text"
                  placeholder='Цена до'
                  value={ searchParameters.maxPrice ? searchParameters.maxPrice : '' }
                  onChange={(e) => dispatch(setMaxPrice(e.target.value))}
                />
              </span>
              <input
                type="button"
                value='Поиск'
                disabled={isButtonActive}
                onClick={isSearch}
              />
              <input
                type="button"
                value='Сброс'
                onClick={isReset}
              />
            </div>

            <div className='header-head-buttons-right'>
              { (id === '7' || id === '6' || id === '13') &&
                <div className="header-head-buttons">
                  { (id === '7' || id === '6') &&
                    <button
                      onClick={ChangeToClosedBase}
                    >Закрытые сделки
                    </button>
                  }
                  <button
                    onClick={ChangeToDeleteBase}
                  >Корзина
                  </button>
                </div>}
            </div>

          </div>
    </div>
  );
};

export default HeaderDatabase;