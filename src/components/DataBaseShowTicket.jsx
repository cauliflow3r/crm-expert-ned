import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {showTicket} from "../features/showTicketModal/showTicketModal";
import '../styles/DataBaseShowTicket.css'

const DataBaseShowTicket = () => {

  const showTicketActive = useSelector(state => state.showTicketModal)
  const data = useSelector(state => state.ticketData)
  const dispatch = useDispatch()

  function formatHours(dateString) {
    if (dateString && typeof dateString === 'string') {
      const [time, datePartWithTimeZone] = dateString.split(' ');
      if (datePartWithTimeZone) {
        const [day, month, yearWithTimeZone] = datePartWithTimeZone.split('-');
        const [year] = yearWithTimeZone.split('+');
        const formattedDate = `${day}-${month}-${year}`;
        return `${formattedDate} в ${time}`;
      }
    } return '';
  }

  return (
    <div onClick={() =>  dispatch(showTicket(false))} className={showTicketActive ? 'base-modal active' : 'base-modal'}>
      <div onClick={(e) => e.stopPropagation()} className={showTicketActive ? 'modal__content active' : 'modal__content'}>
        <div className="show-ticket-wrap">
          <h2 className='show-ticket-title'>{data.title}</h2>
          <div className="show-ticket-description-item">
            <strong>Создан: </strong>{formatHours(data.created)}
          </div>
            <div className="show-ticket-description-item">
              <strong>Описание задачи: </strong>{data.description}
            </div>
        </div>
      </div>
    </div>
  );
};

export default DataBaseShowTicket;