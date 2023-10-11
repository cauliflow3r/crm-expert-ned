import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setStatisticsActive} from "../features/statistics/statisticsSlice";
import {axiosInstance} from "../utils/api";
import CircularIndeterminate from "./LoaderMaterialUi";
import {format} from "date-fns";


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

  useEffect(() => {
    getStatistics()
  }, [])

  function formatAndAdd4Hours(dateString) {
    const dateObject = new Date(dateString);
    return format(dateObject, "dd.MM.yyyy в HH:mm");
  }

  return (
    <div onClick={() =>  dispatch(setStatisticsActive(false))} className={statisticsModal ? 'base-modal active' : 'base-modal'}>
      <div onClick={(e) => e.stopPropagation()} className={statisticsModal ? 'modal__content active' : 'modal__content'}>
        <h2>Статистика за {formattedDate}</h2>

        { isLoading ?
          <CircularIndeterminate />
          :
          <>
            <div>
              Пришло заявок за сегодня: {data.length}
            </div>
            <div>
              {data.map((item, idx) => {
                return (
                  <div key={idx}>
                    {item.name}, {item.phone}, {formatAndAdd4Hours(item.created_ad)}
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