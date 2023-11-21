import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { format } from "date-fns";
import {addComment} from "../crm-logic/addComment";
import {setIsComments} from "../features/isComments/isCommentsSlice";
import './../styles/DatabaseDetailedInfo.css'
import {getOneClient} from "../crm-logic/getOneClient";
import {setBaseModal} from "../features/baseModal/baseModalSlice";
import {
  setEdit,
  setIsSelect,
  setPotential,
  setPurchase,
  setSale
} from "../features/selectModalType/isSelectModalTypeSlice";
import CircularIndeterminate from "./LoaderMaterialUi";
import {Button, TextField} from "@mui/material";
import AlertDialog from "./AlertDialog";
import {setGetOneClient} from "../features/getOneClient/getOneClientSlice";
import {editClient} from "../crm-logic/editClient";
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';
import {showTicket} from "../features/showTicketModal/showTicketModal";
import {getTickets} from "../crm-logic/getTickets";
import { motion } from "framer-motion"
import {managers} from "../constants/managers";
import {useNavigate} from "react-router-dom";

const DatabaseDetailedInfo = () => {
  const navigate = useNavigate();
  const detailedInfo = useSelector((state) => state.getOneClient.getOneClient)
  const dispatch = useDispatch()
  const comment = useSelector((state) => state.isComments)
  const isLoadingDetailedInfo = useSelector((state) => state.isLoadingDetailedInfo)
  const isButtonActive = useSelector((state) => state.buttonLock)
  const id = localStorage.getItem('id')
  const [baseEdit, setBaseEdit] = useState(false)
  const [managerEdit, setManagerEdit] =useState(false)
  const searchParameters = useSelector((state) => state.searchParameters)

  const handleChangeComment = (e) => {
    e.preventDefault()
    dispatch(setIsComments({
      body: e.target.value,
      crm: `${detailedInfo.id}`
    }))
  }

  function formatAndAdd4Hours(dateString) {
    const dateObject = new Date(dateString);
    return format(dateObject, "dd.MM.yyyy в HH:mm");
  }

  const isEdit = () => {
    dispatch(setBaseModal(true))
    dispatch(setIsSelect(false))
    dispatch(setSale(false))
    dispatch(setPurchase(false))
    dispatch(setPotential(false))
    dispatch(setEdit(true))
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    dispatch(setGetOneClient({
      ...detailedInfo,
      [name]: value,
    }))
  }

  const editManager = async () => {
    setManagerEdit(false)
    await editClient(detailedInfo, dispatch, searchParameters)
  }

  const editBase = async () => {
    setBaseEdit(false)
    await editClient(detailedInfo, dispatch, searchParameters)
  }

  const handleShowTicket = async (id) => {
   await dispatch(showTicket(true))
   await getTickets(id, dispatch)
  }

  const goToSiteAdminPanel = async () => {
    await navigate('/site-admin');
    await dispatch(setBaseModal(true))
  };

  return (
    <div
      className='detailed-info-border-box'>
      <div className='detailed-info-button-flex'>

          <Button
            color='success'
            variant="outlined"
            size='small'
            onClick={() => getOneClient(detailedInfo.id, dispatch)}
          >
            Обновить
          </Button>

          <div className="detailed-info-admin-btn">
            <Button
              color='success'
              variant="outlined"
              size='small'
              onClick={isEdit}
            >
              Редактировать
            </Button>
            <Button
                color='success'
                variant="outlined"
                size='small'
                onClick={goToSiteAdminPanel}
            >
              Разместить объявление
            </Button>
          </div>

          { (id === '7' || id === '6' || id === '13' || id === '18') &&
            <AlertDialog />
          }


        <div className="detailed-info-close-btn">
          <Button
            color='success'
            variant="outlined"
            size='small'
            onClick={() => dispatch(setGetOneClient(null))}
          >
            Закрыть
          </Button>
        </div>
      </div>
      {
        isLoadingDetailedInfo ?
          <CircularIndeterminate />
          :
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="detailed-info-our-information">

              <div className='detailed-info-public-description-elements'>
                ID : {detailedInfo.id}
              </div>

              <div className='detailed-info-public-description-elements'>
                Создан: {formatAndAdd4Hours(detailedInfo.created_ad)}
              </div>

              <div className="detailed-info-public-description-elements">
                Имя: {detailedInfo.name}
              </div>

              <div className="detailed-info-public-description-elements">
                Телефон: {detailedInfo.phone}
              </div>

              {(detailedInfo.owner_price !== '9999' && detailedInfo.owner_price !== '1') &&
                  <div className="detailed-info-public-description-elements">
                    Красная цена: {detailedInfo.owner_price} $
                  </div>
              }

              <div className="detailed-info-public-description-elements">
                Тип недвижимости: {detailedInfo.type_of_housing}
              </div>

              { baseEdit ?
                  <div className='detailed-info-public-description-elements'>Тип базы:
                    <select
                        name="type_of_base"
                        value={detailedInfo.type_of_base}
                        onChange={handleInputChange}
                    >
                      <option value="Продажа">Продажа</option>
                      <option value="Потенциальные">Потенциальные</option>
                      <option value="Покупка">Квалифицирован</option>
                      <option value="Встречи">Встречи</option>
                      <option value="Результаты встречи">Результаты встречи</option>
                      <option value="Заключение сделки">Заключение сделки</option>
                      <option value="Неактуальные">Неактуальные</option>
                      <option value="На удаление">На удаление</option>
                    </select>
                    <CheckIcon
                        fontSize='small'
                        onClick={editBase}
                        sx={{cursor: 'pointer', marginLeft: '1.5vh'}}
                    />
                    <DoNotDisturbAltIcon
                        fontSize='small'
                        onClick={() => setBaseEdit(false)}
                        sx={{cursor: 'pointer', marginLeft: '1.5vh'}}
                    />
                  </div>
                  :
                  <div className='detailed-info-public-description-elements'>
                    Тип базы: {detailedInfo.type_of_base}
                    <EditIcon
                        fontSize='small'
                        onClick={() => setBaseEdit(true)}
                        sx={{cursor: 'pointer'}}
                    />
                  </div>
              }

              {managerEdit ?
                  <div className='detailed-info-public-description-elements'>
                    <select
                        name="comments"
                        value={detailedInfo.comments}
                        onChange={handleInputChange}
                    >
                      {managers.map((item, idx) => {
                        return (
                            <option key={idx} value={item.value}>{item.label}</option>
                        )
                      })}
                    </select>
                    <CheckIcon
                        fontSize='small'
                        onClick={editManager}
                        sx={{cursor: 'pointer', marginLeft: '1.5vh'}}
                    />
                    <DoNotDisturbAltIcon
                        fontSize='small'
                        onClick={() => setManagerEdit(false)}
                        sx={{cursor: 'pointer', marginLeft: '1.5vh'}}
                    />
                  </div>
                  :
                  <div className='detailed-info-public-description-elements'>
                    Менеджер: {detailedInfo.comments}
                    <EditIcon
                        fontSize='small'
                        onClick={() => setManagerEdit(true)}
                        sx={{cursor: 'pointer'}}
                    />
                  </div>
              }

            </div>

            <div style={{borderTop: '1px solid black', margin: '20px 20px 0 20px'}} />

            <div className="detailed-info-public-description">

              {detailedInfo.adress !== 'Неважно' &&
                <div className='detailed-info-public-description-elements'>Адрес: {detailedInfo.adress}</div>
              }

              {detailedInfo.rooms !== 9999 &&
                <div className='detailed-info-public-description-elements'>Комнаты: {detailedInfo.rooms}</div>
              }

              {detailedInfo.floor !== 9999 &&
                  <div
                      className='detailed-info-public-description-elements'
                  >
                    Этаж: {detailedInfo.floor}  {detailedInfo.total_floors !== 'Неважно' && <>/ {detailedInfo.total_floors}</>}

                  </div>
              }

              { ( detailedInfo.quadrature !== 9999 && detailedInfo.quadrature !== 1 ) &&
                <div className="detailed-info-public-description-elements">
                  Квадратура: {detailedInfo.quadrature} м2
                </div>
              }

              {(detailedInfo.price !== 1 && detailedInfo.price !== 9999) &&
                <div className="detailed-info-public-description-elements">
                  Цена: {detailedInfo.price} $
                </div>
              }

              {detailedInfo.repair !== 'Неважно' &&
                <div className="detailed-info-public-description-elements">
                  Состояние: {detailedInfo.repair}
                </div>
              }

              {detailedInfo.series !== 'Неважно' &&
                <div className="detailed-info-public-description-elements">
                  Серия: {detailedInfo.series}
                </div>
              }

              {detailedInfo.document !== 'Неважно' &&
                <div className="detailed-info-public-description-elements">
                  Документы: {detailedInfo.document}
                </div>
              }

              {detailedInfo.year_of_construction !== 'Неважно' &&
                <div className="detailed-info-public-description-elements">
                  Год строительства: {detailedInfo.year_of_construction}
                </div>
              }

              {detailedInfo.heating !== 'Неважно' &&
                <div className="detailed-info-public-description-elements">
                  Отопление: {detailedInfo.heating}
                </div>
              }

              {detailedInfo.communications !== 'Неважно' &&
                <div className="detailed-info-public-description-elements">
                  Коммуникации: {detailedInfo.communications}
                </div>
              }

              {detailedInfo.furniture !== 'Неважно' &&
                <div className="detailed-info-public-description-elements">
                  Мебель: {detailedInfo.furniture}
                </div>
              }

              {detailedInfo.wall_material !== 'Неважно' &&
                <div className="detailed-info-public-description-elements">
                  Стены: {detailedInfo.wall_material}
                </div>
              }

              {detailedInfo.plot !== 'Неважно' &&
                <div className="detailed-info-public-description-elements">
                  Участок: {detailedInfo.plot}
                </div>
              }

              <div className="detailed-info-public-description-elements">
                <strong>ID объявления: {detailedInfo.id}-exNed</strong>
              </div>

            </div>


            <div className="detailed-info-public-comments">
              <h2 className='detailed-info-comment-head'>
                Комментарии:
              </h2>
              {detailedInfo.comment.map((item, idx) => {
                return (
                  <div
                    className='detailed-info-every-comment'
                    key={idx}
                  >
                    <div className="detailed-info-comment-info">
                      <span className='detailed-info-every-comment-author'>{item.user.name} {item.user["last name"]}</span>
                      <span className='detailed-info-every-comment-author'>{formatAndAdd4Hours(item.created_ad)}</span>
                    </div>
                    <div className={ item.user.username === 'zamir' ? 'detailed-info-comment detailed-info-comment-admin'  : 'detailed-info-comment' }>{item.body}</div>

                  </div>
                )
              })}
            </div>
            <div className='detailed-info-textarea-field'>
              <form>

                <TextField
                  id="outlined-multiline-static"
                  multiline
                  rows={7}
                  color='success'
                  sx={{width: '95%'}}
                  value={comment.body}
                  onChange={handleChangeComment}
                />

                <Button
                  variant="outlined"
                  color='success'
                  disabled={isButtonActive}
                  onClick={() => addComment(dispatch, comment, detailedInfo.id)}
                >
                  Комментировать
                </Button>

              </form>
            </div>
          </motion.div>
      }
    </div>
  );
};

export default DatabaseDetailedInfo;