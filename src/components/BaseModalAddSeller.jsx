import React from 'react';
import './../styles/BaseModalAddSeller.css'
import {useDispatch, useSelector} from "react-redux";
import {addClient} from "../crm-logic/addClient";
import {Button, MenuItem, TextField} from "@mui/material";
import {typeOfHousing} from "../constants/typeOfHousing";
import {rooms} from "../constants/rooms";
import {floors} from "../constants/floor";
import {totalFloors} from "../constants/totalFloors";
import {heating} from "../constants/heating";
import {series} from "../constants/series";
import {stateHousing} from "../constants/stateHousing";
import {furniture} from "../constants/furniture";
import {plot} from "../constants/plot";
import {documents} from "../constants/documents";
import {yearOfConstruction} from "../constants/yearOfConstruction";
import {typeOfSentence} from "../constants/typeOfSentence";
import {typeOfBase} from "../constants/typeOfBase";
import {wallMaterial} from "../constants/wallMaterial";
import {managers} from "../constants/managers";

const BaseModalAddSeller = (props) => {

  const {
    modalData,
    handleInputChange
  } = props

  const dispatch = useDispatch()
  const isButtonActive = useSelector((state) => state.buttonLock)

  return (
    <div>
      <form>
        <h2 className='base-modal-title'>Добавить собственника</h2>
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
              label='Адрес'
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

        {/*Кол-во комнат и квадратура*/}
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
              name='quadrature'
              value={modalData.quadrature}
              onChange={handleInputChange}
              label='Квадратура'
              size='small'
              color="success"
            />

          </div>
        </div>

        {/*Этаж и всего этажей*/}
        <div className="base-modal-window-flex">
          <div className="base-modal-window">

            <TextField
              name="floor"
              select
              value={modalData.floor}
              onChange={handleInputChange}
              color="success"
              size='small'
              label='Этаж'
            >
              {floors.map((option, idx) => (
                <MenuItem key={idx} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>



          </div>
          <div className="base-modal-window">

            <TextField
              name="total_floors"
              select
              value={modalData.total_floors}
              onChange={handleInputChange}
              color="success"
              size='small'
              label='Всего этажей'
            >
              {totalFloors.map((option, idx) => (
                <MenuItem key={idx} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

          </div>
        </div>

        {/*Наша цена и цена в руки*/}
        <div className="base-modal-window-flex">
          <div className="base-modal-window">
            <TextField
              type='text'
              name='price'
              value={modalData.price}
              onChange={handleInputChange}
              label='Наша цена'
              size='small'
              color="success"
            />
          </div>
          <div className="base-modal-window">
            <TextField
              type='text'
              name='owner_price'
              value={modalData.owner_price}
              onChange={handleInputChange}
              label='Цена в руки'
              size='small'
              color="success"
            />

          </div>
        </div>

        {/*Вид отопления и серия*/}
        <div className="base-modal-window-flex">
          <div className="base-modal-window">

            <TextField
              name="heating"
              select
              value={modalData.heating}
              onChange={handleInputChange}
              color="success"
              size='small'
              label='Вид отопления'
            >
              {heating.map((option, idx) => (
                <MenuItem key={idx} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>


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
        </div>

        {/*Состояние и мебель*/}
        <div className="base-modal-window-flex">
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
          <div className="base-modal-window">
            <TextField
              name="furniture"
              select
              value={modalData.furniture}
              onChange={handleInputChange}
              color="success"
              size='small'
              label='Мебель'
            >
              {furniture.map((option, idx) => (
                <MenuItem key={idx} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

          </div>
        </div>

        {/*Участок и документы*/}
        <div className="base-modal-window-flex">
          <div className="base-modal-window">

            <TextField
              name="plot"
              select
              value={modalData.plot}
              onChange={handleInputChange}
              color="success"
              size='small'
              label='Участок'
            >
              {plot.map((option, idx) => (
                <MenuItem key={idx} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

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
        </div>

        {/*Год постройки и коммуникации*/}
        <div className="base-modal-window-flex">
          <div className="base-modal-window">

            <TextField
              name="year_of_construction"
              select
              value={modalData.year_of_construction}
              onChange={handleInputChange}
              color="success"
              size='small'
              label='Год строительства'
            >
              {yearOfConstruction.map((option, idx) => (
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

        {/*Тип предложения и тип базы NONE*/}
        <div className="base-modal-window-flex base-modal-display-none">
          <div className="base-modal-window">

            <TextField
              name="type_of_sentence"
              select
              value={modalData.type_of_sentence = 'Собственник'}
              onChange={handleInputChange}
              color="success"
              size='small'
              label='Тип предложения'
            >
              {typeOfSentence.map((option, idx) => (
                <MenuItem key={idx} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

          </div>
          <div className="base-modal-window">

            <TextField
              name="type_of_base"
              select
              value={modalData.type_of_base = 'Продажа'}
              onChange={handleInputChange}
              color="success"
              size='small'
              label='Тип клиента'
            >
              {typeOfBase.map((option, idx) => (
                <MenuItem key={idx} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

          </div>
        </div>

        {/*Материал стен и ссылка*/}
        <div className="base-modal-window-flex">
          <div className="base-modal-window">

            <TextField
              type='text'
              name='link'
              value={modalData.link}
              onChange={handleInputChange}
              label='Ссылка'
              size='small'
              color="success"
            />

          </div>
          <div className="base-modal-window">

            <TextField
              name="wall_material"
              select
              value={modalData.wall_material}
              onChange={handleInputChange}
              color="success"
              size='small'
              label='Материал стен'
            >
              {wallMaterial.map((option, idx) => (
                <MenuItem key={idx} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

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

export default BaseModalAddSeller;