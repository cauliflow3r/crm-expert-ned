import React from 'react';
import {useSelector} from "react-redux";
import { format } from "date-fns";
import './../styles/DatabaseDetailedInfo.css'

const DatabaseDetailedInfo = () => {

  const detailedInfo = useSelector((state) => state.getOneClient.getOneClient)
  console.log(detailedInfo)

  function formatAndAdd4Hours(dateString) {
    const dateObject = new Date(dateString);
    return format(dateObject, "dd.MM.yyyy в HH:mm");
  }

  return (
    <div style={{width: '50%', overflowY: 'auto'}}>
      {
        detailedInfo ?
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
                Красная цена: {detailedInfo.owner_price} $
              </div>
              <div>
                Менеджер: {detailedInfo.comments}
              </div>
            </div>
            <div className='detailed-info-our-information-link'>
               Ссылка : <a href={detailedInfo.link} target="_blank">{detailedInfo.link}</a>
            </div>
            <div className="detailed-info-public-description">
              <div>
                Тип: {detailedInfo.type_of_housing}
              </div>
              <div>
                Комнаты: {detailedInfo.rooms}
              </div>
            </div>
            <div className="detailed-info-public-description">
              <div>
                Этаж: {detailedInfo.floor}
              </div>
              <div>
                Всего этажей: {detailedInfo.total_floor}
              </div>
            </div>
            <div className="detailed-info-public-description">
              <div>
                Цена: {detailedInfo.price} $
              </div>
              <div>
                Цена за квадрат: {(detailedInfo.price / detailedInfo.quadrature).toFixed(1)} $
              </div>
            </div>
            <div className="detailed-info-public-description">
              <div>
                Состояние: {detailedInfo.repair}
              </div>
              <div>
                Серия: {detailedInfo.series}
              </div>
            </div>
            <div className="detailed-info-public-description">
              <div>
                Документы: {detailedInfo.document}
              </div>
              <div>
                Год строительства: {detailedInfo.year_of_construction}
              </div>
            </div>
            <div className="detailed-info-public-description">
              <div>
                Отопление: {detailedInfo.heating}
              </div>
              <div>
                Коммуникации: {detailedInfo.communications}
              </div>
            </div>
            <div className="detailed-info-public-description">
              <div>
                Мебель: {detailedInfo.furniture}
              </div>
              <div>
                Стены: {detailedInfo.wall_material}
              </div>
            </div>
            <div className="detailed-info-public-description">
              <div>
                Участок: {detailedInfo.plot}
              </div>
              <div>
                Тип предложения: {detailedInfo.type_of_sentence}
              </div>
            </div>
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
          </div>
          :
          <div>Эксперт Недвижимость.</div>
      }
    </div>
  );
};

export default DatabaseDetailedInfo;