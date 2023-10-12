import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setStatisticsActive} from "../features/statistics/statisticsSlice";
import {axiosInstance} from "../utils/api";
import CircularIndeterminate from "./LoaderMaterialUi";
import {format} from "date-fns";
import './../styles/Statistics.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Statistics = () => {

  const statisticsModal = useSelector(state => state.statistics)
  const dispatch = useDispatch()
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const date = new Date();
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const getStatistics = async () => {
    setIsLoading(true)
    try {
      const response = await axiosInstance.get(`crm/?manager=20&created_ad=${formattedDate}`)
      setData(response.data.results)
    } catch (e) {
      console.log(e)
    } finally {
      setIsLoading(false)
    }
  }

  const getStatisticsSelectedDay = async () => {
    setIsLoading(true)
    try {
      const response = await axiosInstance.get(`crm/?manager=20&created_ad=${formatDate(selectedDate)}`)
      setData(response.data.results)
    } catch (e) {
      console.log(e)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getStatistics()
  }, [])

  function timeAdd (dateString) {
    const dateObject = new Date(dateString);
    return format(dateObject, "HH:mm");
  }

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  return (
    <div onClick={() =>  dispatch(setStatisticsActive(false))} className={statisticsModal ? 'base-modal active' : 'base-modal'}>
      <div onClick={(e) => e.stopPropagation()} className={statisticsModal ? 'modal__content active' : 'modal__content'}>

        <h2 className='statistics-title'>Статистика за {formattedDate}</h2>
        <div style={{ display: "flex", justifyContent: 'center', alignContent: 'center'}}>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="yyyy-MM-dd"
            placeholderText='Выберите дату'
            todayButton="Сегодня"
          />
          <button onClick={getStatisticsSelectedDay}>Узнать</button>
        </div>

        { isLoading ?
          <CircularIndeterminate />
          :
          <>
            <div className='statistics-title'>
              Общее количество заявок: <strong>{data.length}</strong>
            </div>
            <div className="statistics-wrap">
              <div className="statistics-name statistics-name-wrap">Имя</div>
              <div className="statistics-phone statistics-name-wrap">Номер</div>
              <div className="statistics-date">Время</div>
              <div className="statistics-manager statistics-name-wrap">Менеджер</div>
            </div>
            <div>
              {data.map((item, idx) => {
                return (
                  <div
                    className='statistics-head-block'
                    key={idx}
                  >
                    <div className="statistics-name">{item.name}</div>

                    <div className="statistics-phone">{item.phone}</div>

                    <div className="statistics-date">{timeAdd(item.created_ad)}</div>

                    <div className="statistics-manager">{item.comments === 'Неважно' ? <strong>Не распределен</strong> : <strong> {item.comments}</strong>}</div>

                  </div>
                )
              })}
            </div>
          </>
        }

      </div>
    </div>
  );
};

export default Statistics;