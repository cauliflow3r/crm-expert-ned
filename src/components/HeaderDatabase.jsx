import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setTypeOfBase} from "../features/typeOfBase/typeOfBaseSlice";
import {setBaseModal} from "../features/baseModal/baseModalSlice";
import {getBase} from "../crm-logic/getBase";
import {setIsSelect} from "../features/selectModalType/isSelectModalTypeSlice";
import {
  setByRooms,
  setBySearchField,
  setByTypeOfHousing, setId,
  setMaxPrice,
  setMinPrice,
  setSortByPrice
} from "../features/searchParametres/searchParametersSlice";
import {Badge, Button, MenuItem, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import {filterByRooms, filterByTypeOfHousing} from "../constants/searchValues";
import '../styles/HeaderDatabase.css'
import {setPlanModal} from "../features/planModal/planModal";
import {setStatisticsActive} from "../features/statistics/statisticsSlice";
import {showSuccess} from "../utils/alert";

const DATA = [
  {
    id: 0,
    value: 'Продажа',
    title: 'Собственники'
  },
  {
    id: 1,
    value: 'Потенциальные',
    title: 'Потенциальные'
  },
  {
    id: 2,
    value: 'Покупка',
    title: 'Квалифицирован'
  },
  {
    id: 3,
    value: 'Встречи',
    title: 'Встречи'
  },
  {
    id: 4,
    value: 'Результаты встречи',
    title: 'Результаты встречи'
  },
  {
    id: 5,
    value: 'Заключение сделки',
    title: 'Заключение'
  },
  {
    id: 6,
    value: 'Неактуальные',
    title: 'Неактуальные'
  },
  {
    id: 7,
    value: 'Полная база',
    title: 'Полная база'
  },

]

const HeaderDatabase = () => {

  const dispatch = useDispatch()
  const id = localStorage.getItem('id')
  const active = useSelector((state) => state.typeOfBase)
  const searchParameters = useSelector((state) => state.searchParameters)
  const isButtonActive = useSelector((state) => state.buttonLock)
  const [moreFilters, setMoreFilters] = useState(false)
  const counter = useSelector(state => state.counter)
  const applicationsCounter = useSelector(state => state.applicationsCounter)

  const isSearch = async () => {
    await getBase(dispatch, searchParameters)
  }

  const isReset = async () => {
    await dispatch(setByRooms(''))
    await dispatch(setByTypeOfHousing(''))
    await dispatch(setBySearchField(''))
    await dispatch(setMinPrice(0))
    await dispatch(setMaxPrice(0))
    await dispatch(setId(0))
    showSuccess('Успешно выполнено!', 'Все фильтры выставлены по умолчанию!')

  }

  const handleHeaderClick = (val) => () => {
    dispatch(setTypeOfBase(val))
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
            {DATA.map((item, idx) => {
              return (
                  <div
                      className={`header-head-button ${active === item.value ? 'header-head-button-active' : ''}`}
                      onClick={handleHeaderClick(item.value)}
                      key={idx}
                  >
                    {item.value === 'Встречи' ? (
                        <Badge
                            badgeContent={applicationsCounter}
                            color="secondary"
                            size='small'
                        >
                          <span>Встречи</span>
                        </Badge>
                    ) : item.title}
                  </div>
              )
            })}
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

              <Button
                variant="outlined"
                color="success"
                size='small'
                onClick={() => dispatch(setStatisticsActive(true))}
              >
                Статистика
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

            <div className="header-head-btns">



              <Badge
                badgeContent={counter}
                color="success"
                size='small'
              >
                <Button
                  variant={ active === 'Заявки' ?  "contained" : "outlined"}
                  size='small'
                  color='success'
                  onClick={handleHeaderClick('Заявки')}
                >
                  Заявки
                </Button>
              </Badge>


            </div>

              { (id === '7' || id === '6' || id === '13') &&
                <div className="header-head-buttons">
                  { (id === '7' || id === '6') &&
                    <Button
                      variant={ active === 'Закрытые сделки' ?  "contained" : "outlined"}
                    color="success"
                    size='small'
                    onClick={handleHeaderClick('Закрытые сделки')}
                    >
                    Закрытые сделки
                    </Button>
                  }
                  <Button
                    variant={ active === 'На удаление' ?  "contained" : "outlined"}
                    color="success"
                    size='small'
                    onClick={handleHeaderClick('На удаление')}
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

            <div className='header-id-field'>
              <TextField
                  id='header-id'
                  label='ID'
                  color="success"
                  value={ searchParameters.id ? searchParameters.id : '' }
                  size='small'
                  onChange={(e) => dispatch(setId(e.target.value))}
              />
            </div>

            <div className='header-sort-by-price'>

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
                <MenuItem value="toNew">По дате добавления</MenuItem>
              </TextField>

            </div>
          </div>
    </div>
  );
};

export default HeaderDatabase;