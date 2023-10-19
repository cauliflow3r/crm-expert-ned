import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setGetOneClient} from "../features/getOneClient/getOneClientSlice";
import {editClient} from "../crm-logic/editClient";
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
import {addClient} from "../crm-logic/addClient";

const BaseModalEditClient = () => {

  const clientInfo = useSelector((state) => state.getOneClient.getOneClient)
  const searchParameters = useSelector((state) => state.searchParameters)
  const dispatch = useDispatch()



  const handleInputChange = (event) => {
    const { name, value } = event.target;
    dispatch(setGetOneClient({
      ...clientInfo,
      [name]: value,
    }))
  }

  return (
    <div>
      <form>
        <h2 className='base-modal-title'>Редактирование клиента</h2>

        {/*Имя и телефон*/}
        <div className="base-modal-window-flex">
          <div className="base-modal-window">

            <TextField
              type='text'
              name='name'
              value={clientInfo.name}
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
              value={clientInfo.phone}
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
              value={clientInfo.adress}
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
              value={clientInfo.type_of_housing}
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
              value={clientInfo.rooms}
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
              value={clientInfo.quadrature}
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
              value={clientInfo.floor}
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
              value={clientInfo.total_floors}
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
              value={clientInfo.price}
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
              value={clientInfo.owner_price}
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
              value={clientInfo.heating}
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
              value={clientInfo.series}
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
              value={clientInfo.repair}
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
              value={clientInfo.furniture}
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
              value={clientInfo.plot}
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
              value={clientInfo.document}
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
              value={clientInfo.year_of_construction}
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
              value={clientInfo.communications}
              onChange={handleInputChange}
              label='Коммуникации'
              size='small'
              color="success"
            />

          </div>
        </div>

        {/*Тип предложения и тип базы*/}
        <div className="base-modal-window-flex">
          <div className="base-modal-window">

            <TextField
              name="type_of_sentence"
              select
              value={clientInfo.type_of_sentence}
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
              value={clientInfo.type_of_base}
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
              value={clientInfo.link}
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
              value={clientInfo.wall_material}
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
            value={clientInfo.description}
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
            value={clientInfo.comments}
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

        <div style={{textAlign: 'center'}}>
          <Button
            onClick={() => editClient(clientInfo, dispatch, searchParameters)}
            size='small'
            color='success'
            variant='contained'
          >
            Редактировать клиента
          </Button>
        </div>

      </form>
    </div>
  );
};

export default BaseModalEditClient;