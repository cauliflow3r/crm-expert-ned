import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { format } from "date-fns";
import {addComment} from "../crm-logic/addComment";
import {setIsComments} from "../features/isComments/isCommentsSlice";
import './../styles/DatabaseDetailedInfo.css'
import {getOneClient} from "../crm-logic/getOneClient";
import {setBaseModal} from "../features/baseModal/baseModalSlice";
import {setEdit} from "../features/selectModalType/isSelectModalTypeSlice";

const DatabaseDetailedInfo = () => {

  const detailedInfo = useSelector((state) => state.getOneClient.getOneClient)
  const dispatch = useDispatch()
  const comment = useSelector((state) => state.isComments)
  const isLoadingDetailedInfo = useSelector((state) => state.isLoadingDetailedInfo)

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
    dispatch(setEdit(true))
  }

  return (
    <div className='detailed-info-border-box'>
      <div>
        <button onClick={() => getOneClient(detailedInfo.id, dispatch)}>Обновить</button>
        <button onClick={isEdit}>Редактировать</button>
      </div>
      {
        isLoadingDetailedInfo ?
          <div>Loading...</div>
          :
          <div>
            <div className="detailed-info-our-information">
              <div>
                ID клиента: {detailedInfo.id}
              </div>
              <div>
                Дата: {formatAndAdd4Hours(detailedInfo.created_ad)}
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
              <div>
                Тип базы: {detailedInfo.type_of_base}
              </div>
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
              <div>
                Тип: {detailedInfo.type_of_housing}
              </div>
              { detailedInfo.rooms !== 9999 &&
                <div>
                  Комнаты: {detailedInfo.rooms}
                </div>
              }
            </div>
            { detailedInfo.floor !== 9999 &&
              <div className="detailed-info-public-description">
                <div>
                  Этаж: {detailedInfo.floor}
                </div>
                <div>
                  Всего этажей: {detailedInfo.total_floor}
                </div>
              </div>
            }

            { detailedInfo.price !== 1 &&
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
                <textarea
                  cols="70"
                  rows="10"
                  value={comment.body}
                  onChange={handleChangeComment}
                />
                <input
                  value='Отправить'
                  type="button"
                  onClick={() => addComment(dispatch, comment, detailedInfo.id)}
                />
              </form>
            </div>
          </div>
      }
    </div>
  );
};

export default DatabaseDetailedInfo;