import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setStatisticsActive} from "../features/statistics/statisticsSlice";
import {axiosInstance} from "../utils/api";
import CircularIndeterminate from "./LoaderMaterialUi";
import {format} from "date-fns";
import SearchIcon from '@mui/icons-material/Search';
import './../styles/Statistics.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Statistics = () => {

  const statisticsModal = useSelector(state => state.statistics)
  const dispatch = useDispatch()
  const [data, setData] = useState([])
  const [dataSite, setDataSite] = useState([])
  const [dataAlmaz, setDataAlmaz] = useState([])
  const [dataKalybek, setDataKalybek] = useState([])
  const [dataAziret, setDataAziret] = useState([])
  const [dataMyrza, setDataMyrza] = useState([])
  const [dataRoza, setDataRoza] = useState([])
  const [dataBakyt, setDataBakyt] = useState([])
  const [dataAdahan, setDataAdahan] = useState([])
  const [dataAikyz, setDataAikyz] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const date = new Date();
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;
  const [selectedDate, setSelectedDate] = useState(null);
  const theme = useSelector((state) => state.darkTheme)

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const getStatistics = async () => {
    setIsLoading(true)
    try {
      const response = await axiosInstance.get(`crm/?manager=20&created_ad=${formattedDate}`)
      setData(response.data.results)

      const responseSite = await axiosInstance.get(`crm/?manager=21&created_ad=${formattedDate}`)
      setDataSite(responseSite.data.results)

      const responseAlmaz = await axiosInstance.get(`crm/?manager=13&created_ad=${formattedDate}`)
      setDataAlmaz(responseAlmaz.data.results)

      const responseKalybek = await axiosInstance.get(`crm/?manager=18&created_ad=${formattedDate}`)
      setDataKalybek(responseKalybek.data.results)


      const responseAziret = await axiosInstance.get(`crm/?manager=17&created_ad=${formattedDate}`)
      setDataAziret(responseAziret.data.results)

      const responseMyrza = await axiosInstance.get(`crm/?manager=24&created_ad=${formattedDate}`)
      setDataMyrza(responseMyrza.data.results)

      const responseRoza = await axiosInstance.get(`crm/?manager=34&created_ad=${formattedDate}`)
      setDataRoza(responseRoza.data.results)

      const responseBakyt = await axiosInstance.get(`crm/?manager=32&created_ad=${formattedDate}`)
      setDataBakyt(responseBakyt.data.results)

      const responseAdahan = await axiosInstance.get(`crm/?manager=33&created_ad=${formattedDate}`)
      setDataAdahan(responseAdahan.data.results)

      const responseAikyz = await axiosInstance.get(`crm/?manager=35&created_ad=${formattedDate}`)
      setDataAikyz(responseAikyz.data.results)

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

      const responseSite = await axiosInstance.get(`crm/?manager=21&created_ad=${formatDate(selectedDate)}`)
      setDataSite(responseSite.data.results)

      const responseAlmaz = await axiosInstance.get(`crm/?manager=13&created_ad=${formatDate(selectedDate)}`)
      setDataAlmaz(responseAlmaz.data.results)

      const responseKalybek = await axiosInstance.get(`crm/?manager=18&created_ad=${formatDate(selectedDate)}`)
      setDataKalybek(responseKalybek.data.results)

      const responseAziret = await axiosInstance.get(`crm/?manager=17&created_ad=${formatDate(selectedDate)}`)
      setDataAziret(responseAziret.data.results)

      const responseMyrza = await axiosInstance.get(`crm/?manager=24&created_ad=${formatDate(selectedDate)}`)
      setDataMyrza(responseMyrza.data.results)

      const responseRoza = await axiosInstance.get(`crm/?manager=34&created_ad=${formatDate(selectedDate)}`)
      setDataRoza(responseRoza.data.results)

      const responseBakyt = await axiosInstance.get(`crm/?manager=32&created_ad=${formatDate(selectedDate)}`)
      setDataBakyt(responseBakyt.data.results)

      const responseAdahan = await axiosInstance.get(`crm/?manager=33&created_ad=${formatDate(selectedDate)}`)
      setDataAdahan(responseAdahan.data.results)

      const responseAikyz = await axiosInstance.get(`crm/?manager=35&created_ad=${formatDate(selectedDate)}`)
      setDataAikyz(responseAikyz.data.results)

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
        <div onClick={(e) => e.stopPropagation()} className={` ${statisticsModal ? `modal__content active` : `modal__content`} ${theme ? 'data-base-dark-theme' : ''}`}>


          { isLoading ?
              <CircularIndeterminate />
              :
              <>
                <div className='statistics-date-field' >
                  <DatePicker
                      selected={selectedDate}
                      onChange={handleDateChange}
                      dateFormat="yyyy-MM-dd"
                      placeholderText='Выберите дату'
                      todayButton="Сегодня"
                  />
                  <SearchIcon
                      fontSize='large'
                      onClick={getStatisticsSelectedDay}
                  />
                </div>

                <h2 className='statistics-title'>Статистика заявок Instagram</h2>
                <div className='statistics-title'>
                  Общее количество заявок: <strong>{data.length}</strong>
                </div>

                {data.length !== 0 &&
                    <>
                      <div className="statistics-wrap">
                        <div className="statistics-name statistics-name-wrap">Имя</div>
                        <div className="statistics-phone statistics-name-wrap">Номер</div>
                        <div className="statistics-date">Создан</div>
                        <div className="statistics-date">Реакция</div>
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

                                <div className="statistics-date">{timeAdd(item.updated_ad)}</div>

                                <div className="statistics-manager">{item.comments === 'Неважно' ? <strong>Не распределен</strong> : <strong> {item.comments}</strong>}</div>

                              </div>
                          )
                        })}
                      </div>
                    </>
                }


                <h2 className='statistics-title statistics-second-title'>Статистика заявок с сайта</h2>
                <div className='statistics-title'>
                  Общее количество заявок: <strong>{dataSite.length}</strong>
                </div>

                {dataSite.length !== 0 &&
                    <>
                      <div className="statistics-wrap">
                        <div className="statistics-name statistics-name-wrap">Имя</div>
                        <div className="statistics-phone statistics-name-wrap">Номер</div>
                        <div className="statistics-date">Создан</div>
                        <div className="statistics-date">Реакция</div>
                        <div className="statistics-manager statistics-name-wrap">Менеджер</div>
                      </div>
                      <div>
                        {dataSite.map((item, idx) => {
                          return (
                              <div
                                  className='statistics-head-block'
                                  key={idx}
                              >
                                <div className="statistics-name">{item.name}</div>

                                <div className="statistics-phone">{item.phone}</div>

                                <div className="statistics-date">{timeAdd(item.created_ad)}</div>

                                <div className="statistics-date">{timeAdd(item.updated_ad)}</div>

                                <div className="statistics-manager">{item.comments === 'Неважно' ? <strong>Не распределен</strong> : <strong> {item.comments}</strong>}</div>

                              </div>
                          )
                        })}
                      </div>
                    </>
                }



                <h2 className='statistics-title statistics-second-title'>Статистика менеджеров</h2>

                <div className="statistics-wrap-managers">
                  <strong>Алмаз Имашов</strong> - {dataAlmaz.length} добавленных

                  {dataAlmaz.length !== 0 &&
                      <>
                        <div className="statistics-wrap">
                          <div className="statistics-name statistics-name-wrap">Имя</div>
                          <div className="statistics-phone statistics-name-wrap">Номер</div>
                          <div className="statistics-date">Создан</div>
                          <div className="statistics-date">ID</div>
                          <div className="statistics-manager statistics-name-wrap">Тип базы</div>
                        </div>
                        {dataAlmaz.map((item, idx) => {
                          return (
                              <div
                                  className='statistics-head-block'
                                  key={idx}
                              >
                                <div className="statistics-name">{item.name}</div>

                                <div className="statistics-phone">{item.phone}</div>

                                <div className="statistics-date">{timeAdd(item.created_ad)}</div>

                                <div className="statistics-date">{item.id}</div>

                                <div className="statistics-date">{item.type_of_base}</div>

                              </div>
                          )
                        })}
                      </>
                  }


                </div>

                <div className="statistics-wrap-managers">
                  <strong>Калыбек Казыбеков</strong> - {dataKalybek.length} добавленных
                  {dataKalybek.length !== 0 &&
                      <>
                        <div className="statistics-wrap">
                          <div className="statistics-name statistics-name-wrap">Имя</div>
                          <div className="statistics-phone statistics-name-wrap">Номер</div>
                          <div className="statistics-date">Создан</div>
                          <div className="statistics-date">ID</div>
                          <div className="statistics-manager statistics-name-wrap">Тип базы</div>
                        </div>
                        {dataKalybek.map((item, idx) => {
                          return (
                              <div
                                  className='statistics-head-block'
                                  key={idx}
                              >
                                <div className="statistics-name">{item.name}</div>

                                <div className="statistics-phone">{item.phone}</div>

                                <div className="statistics-date">{timeAdd(item.created_ad)}</div>

                                <div className="statistics-date">{item.id}</div>

                                <div className="statistics-date">{item.type_of_base}</div>

                              </div>
                          )
                        })}
                      </>
                  }
                </div>

                <div className="statistics-wrap-managers">
                  <strong>Азирет Турдаалиев</strong> - {dataAziret.length} добавленных
                  {dataAziret.length !== 0 &&
                      <>
                        <div className="statistics-wrap">
                          <div className="statistics-name statistics-name-wrap">Имя</div>
                          <div className="statistics-phone statistics-name-wrap">Номер</div>
                          <div className="statistics-date">Создан</div>
                          <div className="statistics-date">ID</div>
                          <div className="statistics-manager statistics-name-wrap">Тип базы</div>
                        </div>
                        {dataAziret.map((item, idx) => {
                          return (
                              <div
                                  className='statistics-head-block'
                                  key={idx}
                              >
                                <div className="statistics-name">{item.name}</div>

                                <div className="statistics-phone">{item.phone}</div>

                                <div className="statistics-date">{timeAdd(item.created_ad)}</div>

                                <div className="statistics-date">{item.id}</div>

                                <div className="statistics-date">{item.type_of_base}</div>

                              </div>
                          )
                        })}
                      </>
                  }

                </div>

                <div className="statistics-wrap-managers">
                  <strong>Мырзалы Эсенжанов</strong> - {dataMyrza.length} добавленных
                  {dataMyrza.length !== 0 &&
                      <>
                        <div className="statistics-wrap">
                          <div className="statistics-name statistics-name-wrap">Имя</div>
                          <div className="statistics-phone statistics-name-wrap">Номер</div>
                          <div className="statistics-date">Создан</div>
                          <div className="statistics-date">ID</div>
                          <div className="statistics-manager statistics-name-wrap">Тип базы</div>
                        </div>
                        {dataMyrza.map((item, idx) => {
                          return (
                              <div
                                  className='statistics-head-block'
                                  key={idx}
                              >
                                <div className="statistics-name">{item.name}</div>

                                <div className="statistics-phone">{item.phone}</div>

                                <div className="statistics-date">{timeAdd(item.created_ad)}</div>

                                <div className="statistics-date">{item.id}</div>

                                <div className="statistics-date">{item.type_of_base}</div>

                              </div>
                          )
                        })}
                      </>
                  }

                </div>

                <div className="statistics-wrap-managers">
                  <strong>Роза  Аблималик кызы</strong> - {dataRoza.length} добавленных
                  {dataRoza.length !== 0 &&
                      <>
                        <div className="statistics-wrap">
                          <div className="statistics-name statistics-name-wrap">Имя</div>
                          <div className="statistics-phone statistics-name-wrap">Номер</div>
                          <div className="statistics-date">Создан</div>
                          <div className="statistics-date">ID</div>
                          <div className="statistics-manager statistics-name-wrap">Тип базы</div>
                        </div>
                        {dataRoza.map((item, idx) => {
                          return (
                              <div
                                  className='statistics-head-block'
                                  key={idx}
                              >
                                <div className="statistics-name">{item.name}</div>

                                <div className="statistics-phone">{item.phone}</div>

                                <div className="statistics-date">{timeAdd(item.created_ad)}</div>

                                <div className="statistics-date">{item.id}</div>

                                <div className="statistics-date">{item.type_of_base}</div>

                              </div>
                          )
                        })}
                      </>
                  }

                </div>

                <div className="statistics-wrap-managers">
                  <strong>Бакытбек Кудайбергенов</strong> - {dataBakyt.length} добавленных
                  {dataBakyt.length !== 0 &&
                      <>
                        <div className="statistics-wrap">
                          <div className="statistics-name statistics-name-wrap">Имя</div>
                          <div className="statistics-phone statistics-name-wrap">Номер</div>
                          <div className="statistics-date">Создан</div>
                          <div className="statistics-date">ID</div>
                          <div className="statistics-manager statistics-name-wrap">Тип базы</div>
                        </div>
                        {dataBakyt.map((item, idx) => {
                          return (
                              <div
                                  className='statistics-head-block'
                                  key={idx}
                              >
                                <div className="statistics-name">{item.name}</div>

                                <div className="statistics-phone">{item.phone}</div>

                                <div className="statistics-date">{timeAdd(item.created_ad)}</div>

                                <div className="statistics-date">{item.id}</div>

                                <div className="statistics-date">{item.type_of_base}</div>

                              </div>
                          )
                        })}
                      </>
                  }

                </div>

                <div className="statistics-wrap-managers">
                  <strong>Адахан Жээнбеков</strong> - {dataAdahan.length} добавленных
                  {dataAdahan.length !== 0 &&
                      <>
                        <div className="statistics-wrap">
                          <div className="statistics-name statistics-name-wrap">Имя</div>
                          <div className="statistics-phone statistics-name-wrap">Номер</div>
                          <div className="statistics-date">Создан</div>
                          <div className="statistics-date">ID</div>
                          <div className="statistics-manager statistics-name-wrap">Тип базы</div>
                        </div>
                        {dataAdahan.map((item, idx) => {
                          return (
                              <div
                                  className='statistics-head-block'
                                  key={idx}
                              >
                                <div className="statistics-name">{item.name}</div>

                                <div className="statistics-phone">{item.phone}</div>

                                <div className="statistics-date">{timeAdd(item.created_ad)}</div>

                                <div className="statistics-date">{item.id}</div>

                                <div className="statistics-date">{item.type_of_base}</div>

                              </div>
                          )
                        })}
                      </>
                  }

                </div>

                <div className="statistics-wrap-managers">
                  <strong>Айкыз Саматова</strong> - {dataAikyz.length} добавленных
                  {dataAikyz.length !== 0 &&
                      <>
                        <div className="statistics-wrap">
                          <div className="statistics-name statistics-name-wrap">Имя</div>
                          <div className="statistics-phone statistics-name-wrap">Номер</div>
                          <div className="statistics-date">Создан</div>
                          <div className="statistics-date">ID</div>
                          <div className="statistics-manager statistics-name-wrap">Тип базы</div>
                        </div>
                        {dataAikyz.map((item, idx) => {
                          return (
                              <div
                                  className='statistics-head-block'
                                  key={idx}
                              >
                                <div className="statistics-name">{item.name}</div>

                                <div className="statistics-phone">{item.phone}</div>

                                <div className="statistics-date">{timeAdd(item.created_ad)}</div>

                                <div className="statistics-date">{item.id}</div>

                                <div className="statistics-date">{item.type_of_base}</div>

                              </div>
                          )
                        })}
                      </>
                  }

                </div>


              </>
          }

        </div>
      </div>
  );
};

export default Statistics;