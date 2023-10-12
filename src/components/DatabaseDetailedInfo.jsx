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
import {setActive} from "../features/addNewTicket/isLoadingSlice";
import {showTicket} from "../features/showTicketModal/showTicketModal";
import {getTickets} from "../crm-logic/getTickets";

const DatabaseDetailedInfo = () => {

  const detailedInfo = useSelector((state) => state.getOneClient.getOneClient)
  const dispatch = useDispatch()
  const comment = useSelector((state) => state.isComments)
  const isLoadingDetailedInfo = useSelector((state) => state.isLoadingDetailedInfo)
  const isButtonActive = useSelector((state) => state.buttonLock)
  const id = localStorage.getItem('id')
  const [baseEdit, setBaseEdit] = useState(false)
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

  const editBase = async () => {
    setBaseEdit(false)
    await editClient(detailedInfo, dispatch, searchParameters)
  }

  const handleShowTicket = async (id) => {
   await dispatch(showTicket(true))
   await getTickets(id, dispatch)
  }


  return (
    <div className='detailed-info-border-box'>
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
              onClick={() => dispatch(setActive(true))}
            >
              Добавить задачу
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
          <div>
            <div className="detailed-info-our-information">
              <div>
                ID клиента: {detailedInfo.id}
              </div>
              <div>
                Создан: {formatAndAdd4Hours(detailedInfo.created_ad)}
              </div>
            </div>
            <div className="detailed-info-our-information">
              <div>
                Имя: {detailedInfo.name}
              </div>
              <div>
                Телефон: {detailedInfo.phone}
              </div>
            </div>
            <div className="detailed-info-our-information">
              <div>
                Адресс: {detailedInfo.adress}
              </div>

              { baseEdit ?
                <div>Тип базы:
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
                <div>
                  Тип базы: {detailedInfo.type_of_base}
                  <EditIcon
                    fontSize='small'
                    onClick={() => setBaseEdit(true)}
                    sx={{cursor: 'pointer'}}
                  />
                </div>
              }

            </div>
            <div className="detailed-info-our-information">
              <div>
                Красная цена: {detailedInfo.owner_price} $
              </div>
              <div>
                Менеджер: {detailedInfo.comments}
              </div>
            </div>
            { detailedInfo.link !== 'Неважно' &&
              <div className='detailed-info-our-information-link'>
                Ссылка : <a href={detailedInfo.link} target="_blank">{detailedInfo.link}</a>
              </div>
            }
            <div style={{marginTop: '20px', borderTop: '1px solid black'}}/>
            <div className="detailed-info-public-description">
              { detailedInfo.type_of_housing !== 'Неважно' &&
                <div>
                  Тип: {detailedInfo.type_of_housing}
                </div>
              }
              { detailedInfo.rooms !== 9999 &&
                <div>
                  Комнаты: {detailedInfo.rooms}
                </div>
              }
            </div>
              <div className="detailed-info-public-description">
                  <div>

                    { detailedInfo.floor === 9999 ?

                      <div>
                        { detailedInfo.total_floors !== 9999
                          ||
                         <span> Всего этажей: { detailedInfo.total_floors}</span> }

                      </div>
                      :
                      <div>
                        Этаж: {detailedInfo.floor} / { detailedInfo.total_floors}
                      </div>
                    }

                  </div>
                { (detailedInfo.quadrature !== 9999) && (detailedInfo.quadrature !== 1)  &&
                  <div>
                    Квадратура: {detailedInfo.quadrature} м2
                  </div>
                }
              </div>


            { (detailedInfo.price !== 1) && (detailedInfo.price !== 9999) &&
              <div className="detailed-info-public-description">
                <div>
                  Цена: {detailedInfo.price} $
                </div>
                <div>
                  Цена за квадрат: {(detailedInfo.price / detailedInfo.quadrature).toFixed(1)} $
                </div>
              </div>
            }

            <div className="detailed-info-public-description">
              { detailedInfo.repair !== 'Неважно' &&
                <div>
                  Состояние: {detailedInfo.repair}
                </div>
              }
              { detailedInfo.series !== 'Неважно' &&
                <div>
                  Серия: {detailedInfo.series}
                </div>
              }
            </div>
            <div className="detailed-info-public-description">
              { detailedInfo.document !== "Неважно" &&
                <div>
                  Документы: {detailedInfo.document}
                </div>
              }
              { detailedInfo.year_of_construction !== 'Неважно' &&
                <div>
                Год строительства: {detailedInfo.year_of_construction}
                </div>}
            </div>
            <div className="detailed-info-public-description">
              { detailedInfo.heating !== 'Неважно' &&
                <div>
                  Отопление: {detailedInfo.heating}
                </div>
              }
              { detailedInfo.communications !== 'Неважно' &&
                <div>
                  Коммуникации: {detailedInfo.communications}
                </div>
              }
            </div>
            { detailedInfo.furniture !== 'Неважно' &&
              <div className="detailed-info-public-description">
                <div>
                  Мебель: {detailedInfo.furniture}
                </div>
                <div>
                  Стены: {detailedInfo.wall_material}
                </div>
              </div>
            }

            { detailedInfo.plot !== 'Неважно' &&
              <div className="detailed-info-public-description">
                <div>
                  Участок: {detailedInfo.plot}
                </div>
                <div>
                  Тип предложения: {detailedInfo.type_of_sentence}
                </div>
              </div>
            }


            <div className="detailed-info-public-final-description">
              <h3>
                Доп.информация:
              </h3>
              {detailedInfo.description}
            </div>

            <div className="detailed-info-tickets">
              <h2 className='detailed-info-ticket-head'>
                Задачи
              </h2>
              {detailedInfo.tickets.map((item, idx) => {
                return (
                  <div key={idx}>
                    <div
                      className='detailed-info-ticket'
                      onClick={() => handleShowTicket(item.id)}>
                      {item.title}
                    </div>
                  </div>
                )
              })}
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
          </div>
      }
    </div>
  );
};

export default DatabaseDetailedInfo;