import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addClient} from "../crm-logic/addClient";
import {Button, MenuItem, TextField} from "@mui/material";
import {typeOfHousing} from "../constants/typeOfHousing";
import {series} from "../constants/series";
import {stateHousing} from "../constants/stateHousing";
import {documents} from "../constants/documents";
import {managers} from "../constants/managers";
import {rooms} from "../constants/rooms";

const BaseModalAddBuyer = (props) => {

  const {
    modalData,
    handleInputChange
  } = props

  const dispatch = useDispatch()
  const isButtonActive = useSelector((state) => state.buttonLock)

  return (
    <div>
      <form>
        <h2 className='base-modal-title'>Добавить покупателя</h2>
        {/*Имя и телефон*/}
        <div className="base-modal-window-flex">
          <div className="base-modal-window">
            <TextField
              type='text'
              name='name'
              value={modalData.name}
              onChange={handleInputChange}
              label='Имя клиента'
              size='small'
              color="success"
            />
          </div>
          <div className="base-modal-window">
            <TextField
              type='text'
              name='phone'
              value={modalData.phone}
              onChange={handleInputChange}
              label='Номер телефона'
              size='small'
              color="success"
            />

          </div>
        </div>

        {/*Адрес и тип недвижимости*/}
        <div className="base-modal-window-flex">
          <div className="base-modal-window">
            <TextField
              type='text'
              name='adress'
              value={modalData.adress}
              onChange={handleInputChange}
              label='Желаемый район'
              size='small'
              color="success"
            />
          </div>
          <div className="base-modal-window">

            <TextField
              name="type_of_housing"
              select
              value={modalData.type_of_housing}
              onChange={handleInputChange}
              color="success"
              size='small'
              label='Тип недвижимости'
            >
              {typeOfHousing.map((option, idx) => (
                <MenuItem key={idx} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

          </div>
        </div>

        {/*Кол-во комнат и квадратура NONE*/}
        <div className="base-modal-window-flex base-modal-display-none">

          <div className="base-modal-window">
            <input
              type="text"
              name='quadrature'
              placeholder='Квадратура'
              value={modalData.quadrature = 9999}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/*Этаж и всего этажей NONE*/}
        <div className="base-modal-window-flex base-modal-display-none">
          <div className="base-modal-window">
            <select
              name="floor"
              value={modalData.floor = 9999}
              onChange={handleInputChange}
            >
              <option value="">Этаж</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="Неважно">Частный дом</option>
            </select>


          </div>
          <div className="base-modal-window">
            <select
              name="total_floors"
              value={modalData.total_floors = 9999}
              onChange={handleInputChange}
            >
              <option value="">Всего этажей</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
            </select>


          </div>
        </div>

        {/*Наша цена и цена в руки*/}
        <div className="base-modal-window-flex">

          <div className="base-modal-window">

            <TextField
              name="rooms"
              select
              value={modalData.rooms}
              onChange={handleInputChange}
              color="success"
              size='small'
              label='Количество комнат'
            >
              {rooms.map((option, idx) => (
                <MenuItem key={idx} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

          </div>

          <div className="base-modal-window">
            <TextField
              type='text'
              name='price'
              value={modalData.price}
              onChange={handleInputChange}
              label='Бюджет клиента'
              size='small'
              color="success"
            />
          </div>
        </div>

        {/*Серия и состояние, а отопление NONE*/}
        <div className="base-modal-window-flex">
          <div className="base-modal-window base-modal-display-none">
            <select
              name="heating"
              value={modalData.heating = "Неважно"}
              onChange={handleInputChange}
            >
              <option value="">Вид отопления</option>
              <option value="Центральное отопление">Центральное отопление</option>
              <option value="Газовое отопление">Газовое отопление</option>
              <option value="Электрическое отопление">Электрическое отопление</option>
              <option value="Твердое топливо">Твердое топливо</option>
              <option value="Индивидуальное отопление">Индивидуальное отопление</option>
              <option value="Автономное отопление">Автономное отопление</option>
              <option value="Неважно">Неважно</option>
            </select>


          </div>
          <div className="base-modal-window">

            <TextField
              name="series"
              select
              value={modalData.series}
              onChange={handleInputChange}
              color="success"
              size='small'
              label='Серия'
            >
              {series.map((option, idx) => (
                <MenuItem key={idx} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

          </div>
          <div className="base-modal-window">

            <TextField
              name="repair"
              select
              value={modalData.repair}
              onChange={handleInputChange}
              color="success"
              size='small'
              label='Состояние'
            >
              {stateHousing.map((option, idx) => (
                <MenuItem key={idx} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>


          </div>
        </div>

        {/* мебель NONE*/}
        <div className="base-modal-window-flex base-modal-display-none">
          <div className="base-modal-window">
            <select
              name="furniture"
              value={modalData.furniture = 'Неважно'}
              onChange={handleInputChange}
            >
              <option value="">Мебель</option>
              <option value="С мебелью">С мебелью</option>
              <option value="Без мебели">Без мебели</option>
              <option value="Частично мебелирована">Частично мебелирована</option>
              <option value="Кухонный гарнитур">Кухонный гарнитур</option>
              <option value="По договоренности">По договоренности</option>
              <option value="Неважно">Неважно</option>
            </select>


          </div>
        </div>

        {/*Документы и коммуникации, а участок NONE */}
        <div className="base-modal-window-flex">
          <div className="base-modal-window base-modal-display-none">
            <select
              name="plot"
              value={modalData.plot = "Неважно"}
              onChange={handleInputChange}
            >
              <option value="">Участок</option>
              <option value="1 сотка">1 сотка</option>
              <option value="2 сотки">2 сотки</option>
              <option value="3 сотки">3 сотки</option>
              <option value="4 сотки">4 сотки</option>
              <option value="5 соток">5 соток</option>
              <option value="6 соток">6 соток</option>
              <option value="7 соток">7 соток</option>
              <option value="8 соток">8 соток</option>
              <option value="9 соток">9 соток</option>
              <option value="10 соток и более">10 соток и более соток</option>
              <option value="Неважно">Квартира</option>
              <option value="Неважно">Неважно</option>
            </select>


          </div>
          <div className="base-modal-window">

            <TextField
              name="document"
              select
              value={modalData.document}
              onChange={handleInputChange}
              color="success"
              size='small'
              label='Документы'
            >
              {documents.map((option, idx) => (
                <MenuItem key={idx} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

          </div>
          <div className="base-modal-window">
            <TextField
              type='text'
              name='communications'
              value={modalData.communications}
              onChange={handleInputChange}
              label='Коммуникации'
              size='small'
              color="success"
            />
          </div>
        </div>

        {/*Год постройки NONE*/}
        <div className="base-modal-window-flex">
          <div className="base-modal-window base-modal-display-none">
            <select
              name="year_of_construction"
              value={modalData.year_of_construction = 'Неважно'}
              onChange={handleInputChange}
            >
              <option value="">Год строительства</option>
              <option value="1950 - 1960 гг.">1950 - 1960 гг.</option>
              <option value="1960 - 1970 гг.">1960 - 1970 гг.</option>
              <option value="1970 - 1980 гг.">1970 - 1980 гг.</option>
              <option value="1980 - 1990 гг.">1980 - 1990 гг.</option>
              <option value="1990 - 2000 гг.">1990 - 2000 гг.</option>
              <option value="2000 - 2005 гг.">2000 - 2005 гг.</option>
              <option value="2005 - 2010 гг.">2005 - 2010 гг.</option>
              <option value="2010 - 2015 гг.">2010 - 2015 гг.</option>
              <option value="2016г.">2016г.</option>
              <option value="2017г.">2017г.</option>
              <option value="2018г.">2018г.</option>
              <option value="2019г.">2019г.</option>
              <option value="2020г.">2020г.</option>
              <option value="2021г.">2021г.</option>
              <option value="2022г.">2022г.</option>
              <option value="2023г.">2023г.</option>
              <option value="2024г.">2024г.</option>
              <option value="2025г.">2025г.</option>
              <option value="2026г.">2026г.</option>
              <option value="2027г.">2027г.</option>
              <option value="Неважно.">Неважно / Неизвестно</option>
            </select>


          </div>
        </div>

        {/*Тип предложения и тип базы NONE*/}
        <div className="base-modal-window-flex base-modal-display-none">
          <div className="base-modal-window">
            <select
              name="type_of_sentence"
              value={modalData.type_of_sentence = 'Неважно'}
              onChange={handleInputChange}
            >
              <option value="">Тип предложения</option>
              <option value="Собственник">Собственник</option>
              <option value="Риэлтор">Риэлтор</option>
              <option value="Неважно">Неважно</option>
            </select>


          </div>
          <div className="base-modal-window">
            <select
              name="type_of_base"
              value={modalData.type_of_base = 'Покупка'}
              onChange={handleInputChange}
            >
              <option value="">Тип клиента</option>
              <option value="Продажа">Собственник</option>
              <option value="Покупка">Квалифицирован</option>
              <option value="Встречи">Встречи</option>
              <option value="Результаты встречи">Результаты встречи</option>
              <option value="Заключение сделки">Заключение сделки</option>
              <option value="Потенциальные">Потенциальные</option>
              <option value="Закрытые сделки">Закрытые сделки</option>
              <option value="Неактуальные">Неактуальные</option>
              <option value="На удаление">На удаление</option>

            </select>


          </div>
        </div>

        {/*Материал стен и ссылка NONE*/}
        <div className="base-modal-window-flex base-modal-display-none">
          <div className="base-modal-window">
            <input
              type="text"
              name='link'
              placeholder='Ссылка'
              value={modalData.link = 'Неважно'}
              onChange={handleInputChange}
            />
          </div>
          <div className="base-modal-window">
            <select
              name="wall_material"
              value={modalData.wall_material = "Неважно"}
              onChange={handleInputChange}
            >
              <option value="">Материал стен</option>
              <option value="Кирпич">Кирпич</option>
              <option value="Бетон">Бетон</option>
              <option value="Саманн">Саманн</option>
              <option value="Панельный">Панельный</option>
              <option value="Сиппанель">Сиппанель</option>
              <option value="Другой материал стен">Другой материал стен</option>
              <option value="Неважно">Неважно / Неизвестно</option>
            </select>


          </div>
        </div>

        {/*Описание*/}
        <div className="base-modal-window-flex">
          <TextField
            name='description'
            multiline
            rows={7}
            color='success'
            value={modalData.description}
            onChange={handleInputChange}
            label='Дополнительная информация'
            size='small'
          />
        </div>

        {/*Менеджер*/}
        <div className="base-modal-window-flex">
          <TextField
            name="comments"
            select
            value={modalData.comments}
            onChange={handleInputChange}
            color="success"
            size='small'
            label='Выберите менеджера'
          >
            {managers.map((option, idx) => (
              <MenuItem key={idx} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>


        {/*Добавить*/}
        <div style={{textAlign: 'center'}}>
          <Button
            disabled={isButtonActive}
            onClick={() => addClient(modalData, dispatch)}
            size='small'
            color='success'
            variant='contained'
          >
            Добавить
          </Button>
        </div>

      </form>
    </div>
  );
};

export default BaseModalAddBuyer;