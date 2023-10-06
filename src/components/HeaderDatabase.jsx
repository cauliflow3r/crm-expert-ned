import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setTypeOfBase} from "../features/typeOfBase/typeOfBaseSlice";
import {setBaseModal} from "../features/baseModal/baseModalSlice";
import {getBase} from "../crm-logic/getBase";
import {setIsSelect} from "../features/selectModalType/isSelectModalTypeSlice";
import {
  setByRooms,
  setBySearchField,
  setByTypeOfHousing,
  setMaxPrice,
  setMinPrice,
  setSortByPrice
} from "../features/searchParametres/searchParametersSlice";
import {setActive, setTitle, setType, setValue} from "../features/alertMUI/alertMUISlice";
import {Badge, Button, MenuItem, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import {filterByRooms, filterByTypeOfHousing} from "../constants/searchValues";
import '../styles/HeaderDatabase.css'
import {setPlanModal} from "../features/planModal/planModal";


const HeaderDatabase = () => {

  const dispatch = useDispatch()
  const id = localStorage.getItem('id')
  const active = useSelector((state) => state.typeOfBase)
  const searchParameters = useSelector((state) => state.searchParameters)
  const isButtonActive = useSelector((state) => state.buttonLock)
  const [moreFilters, setMoreFilters] = useState(false)
  const counter = useSelector(state => state.counter)

  const isSearch = async () => {
    await getBase(dispatch, searchParameters)
  }

  const isReset = async () => {
    await dispatch(setByRooms(''))
    await dispatch(setByTypeOfHousing(''))
    await dispatch(setBySearchField(''))
    await dispatch(setMinPrice(0))
    await dispatch(setMaxPrice(0))
    await dispatch(setType('success'))
    await dispatch(setTitle('Успешно выполнено!'))
    await dispatch(setValue('Фильтры выставлены по умолчанию!'))
    await dispatch(setActive(true))
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

  const ChangeToApplicationsBase = () => {
    dispatch(setTypeOfBase(`Заявки`))
  }

  const openBaseModal = () => {
    dispatch(setBaseModal(true))
    dispatch(setIsSelect(true))
  }

  const openPlanModal = () => {
    dispatch(setPlanModal(true))
  }

  const handleKeyPress = async (event) => {
    if (event.key === 'Enter') {
     await isSearch();
    }
  };

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
          </div>
          <div className='header-head-buttons-flex-box'>

            <div className="header-head-buttons">
              <Button
                variant="outlined"
                color="success"
                size='small'
                onClick={openBaseModal}
              >
                Добавить клиента
              </Button>

              <Button
                variant="outlined"
                color="success"
                size='small'
                onClick={ async () => await getBase(dispatch, searchParameters)}
                disabled={isButtonActive}
              >
                Обновить
              </Button>

              <Button
                variant="outlined"
                color="success"
                size='small'
                onClick={openPlanModal}
              >
                Штат
              </Button>


            </div>

            <div className="header-search-filter-field">

              <Button
                variant="outlined"
                color="success"
                size='small'
                onClick={() => setMoreFilters(prevState => !prevState)}
              >
                { moreFilters? '▲': '▼'}
              </Button>

              <TextField
                id="bySearchField"
                label="Ключевые слова"
                variant="outlined"
                size='small'
                color="success"
                value={searchParameters.bySearchField}
                onChange={(e) => dispatch(setBySearchField(e.target.value))}
                onKeyPress={handleKeyPress}
              />

              <Button
                variant="outlined"
                color="success"
                size='small'
                onClick={isSearch}
                disabled={isButtonActive}
              >
                Поиск
              </Button>

              <Button
                variant="outlined"
                color="success"
                size='small'
                onClick={isReset}
              >
                Сброс
              </Button>
            </div>

            <div className='header-head-buttons-right'>

              <Badge badgeContent={counter} color="success">
                <Button
                  variant={ active === 'Заявки' ?  "contained" : "outlined"}
                  size='small'
                  color='success'
                  onClick={ChangeToApplicationsBase}
                >
                  Заявки
                </Button>
              </Badge>

              <Button
                variant={ active === 'Полная база' ?  "contained" : "outlined"}
                size='small'
                color='success'
                onClick={ChangeToAllBase}
              >
                Полная база
              </Button>
              { (id === '7' || id === '6' || id === '13') &&
                <div className="header-head-buttons">
                  { (id === '7' || id === '6') &&
                    <Button
                      variant={ active === 'Закрытые сделки' ?  "contained" : "outlined"}
                    color="success"
                    size='small'
                    onClick={ChangeToClosedBase}
                    >
                    Закрытые сделки
                    </Button>
                  }
                  <Button
                    variant={ active === 'На удаление' ?  "contained" : "outlined"}
                    color="success"
                    size='small'
                    onClick={ChangeToDeleteBase}
                  >
                    Корзина
                  </Button>
                </div>}
            </div>

          </div>

          <div className={ moreFilters? 'more-filters-active' : "header-head-buttons-more-filters"}>
            <div>

            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id='header-rooms-filter'
                select
                label='Кол-во комнат'
                size='small'
                color="success"
                value={ searchParameters.byRooms }
                onChange={(e) => dispatch(setByRooms(e.target.value))}
              >
                {filterByRooms.map((option, idx) => (
                  <MenuItem key={idx} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                id='header-type-of-housing-filter'
                select
                label='Тип недвижимости'
                size='small'
                color="success"
                value={ searchParameters.byTypeOfHousing }
                onChange={(e) => dispatch(setByTypeOfHousing(e.target.value))}
              >
                {filterByTypeOfHousing.map((option, idx) => (
                  <MenuItem key={idx} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

            </Box>

            </div>

            <div>
                <span className='header-head-buttons-price'>

                  <TextField
                    id='header-min-price'
                    label='Цена от'
                    color="success"
                    value={ searchParameters.minPrice ? searchParameters.minPrice : '' }
                    size='small'
                    onChange={(e) => dispatch(setMinPrice(e.target.value))}
                  />

                 <TextField
                   id='header-max-price'
                   label='Цена до'
                   color="success"
                   value={ searchParameters.maxPrice ? searchParameters.maxPrice : '' }
                   size='small'
                   onChange={(e) => dispatch(setMaxPrice(e.target.value))}
                 />


              </span>
            </div>
            <div>

              <TextField
                id='header-sort-by-price'
                select
                color="success"
                size='small'
                value={searchParameters.sortByPrice}
                onChange={(e) => dispatch(setSortByPrice(e.target.value))}
              >
                <MenuItem value="ascending">Сначала дешевые</MenuItem>
                <MenuItem value="descending">Сначала дорогие</MenuItem>
              </TextField>

            </div>
          </div>
    </div>
  );
};

export default HeaderDatabase;