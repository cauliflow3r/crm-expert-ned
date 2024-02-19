import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBase } from '../crm-logic/getBase';
import HeaderDatabase from './HeaderDatabase';
import './../styles/Database.css';
import { getOneClient } from '../crm-logic/getOneClient';
import DatabaseDetailedInfo from './DatabaseDetailedInfo';
import BaseModal from './BaseModal';
import { setSortByPrice } from '../features/searchParametres/searchParametersSlice';
import CircularIndeterminate from './LoaderMaterialUi';
import StaffModal from "./PlanModal";
import DataBaseAddTicket from "./DataBaseAddTicket";
import DataBaseShowTicket from "./DataBaseShowTicket";
import Statistics from "./Statistics";
import {setGetOneClient} from "../features/getOneClient/getOneClientSlice";
import {setIsComments} from "../features/isComments/isCommentsSlice";

const Database = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.isLoading);
  const data = useSelector((state) => state.data.data);
  const typeOfBase = useSelector((state) => state.typeOfBase);
  const selectedClient = useSelector((state) => state.getOneClient.getOneClient)
  const baseModal = useSelector((state) => state.baseModal)
  const searchParameters = useSelector((state) => state.searchParameters)
  const planModal = useSelector(state => state.planModal)
  const ticketModal = useSelector((state) => state.ticketLoading )
  const showTicket = useSelector(state => state.showTicketModal)
  const statisticsModal = useSelector(state => state.statistics)
  const id = localStorage.getItem('id')
  const theme = useSelector((state) => state.darkTheme)
  console.log(data, 'data')

  useEffect(() => {
    {!data &&
    (async () => {
      await getBase(dispatch, searchParameters);
    })();}
  }, []);


  const selectClient = async (id) => {
    dispatch(setIsComments({
      body: '',
      crm: ''
    }))
    setGetOneClient(null)
   await getOneClient(id, dispatch)
  }

  const changeBySort = () => {
    if (searchParameters.sortByPrice === 'ascending') {
      dispatch(setSortByPrice('descending'))
    } else if (searchParameters.sortByPrice === 'descending') {
      dispatch(setSortByPrice('ascending'))
    } else return
  }


  return (
    <div
        className={`data-base-head ${theme ? 'data-base-dark-theme' : ''}`}
    >
      <div className={`data-base ${ theme ? 'data-base-dark-theme-cold' : ''}`}>
        <HeaderDatabase />
        <div className='data-base-wrap'>
          <div
            className={selectedClient ? 'data-base-all-client-list data-base-all-client-list-active' : 'data-base-all-client-list'}
          >
            <div className={`data-base-all-client-menu ${theme ? 'data-base-dark-theme' : ''}`}>
              <div className='data-base-every-client-name'>Имя</div>
              <div className='data-base-every-client-address'>Адрес</div>
              <div
                className='data-base-every-client-price'
                onClick={changeBySort}
              >Цена, $</div>
            </div>
            {isLoading ? (
              <CircularIndeterminate />
            ) : (
              data.map((item, idx) => {
                if (typeOfBase === 'Полная база' || item.type_of_base === typeOfBase) {
                  return (
                      <div
                          key={idx}
                          onClick={() => selectClient(item.id)}
                          className={`data-base-every-client 
                          ${selectedClient && selectedClient.id === item.id ? `data-base-selected ${ theme ? 'data-base-dark-theme' : ''}` : ''} 
                          ${(  (!item.comments || item.comments === 'Неважно') && 'data-base-every-client-red' )} 
                          ${ item.priority && 'data-base-every-client-priority' }
                           `}
                      >


                        <div className='data-base-every-client-name'> {item.name}</div>
                        <div className='data-base-every-client-address'> {item.adress}</div>
                        <div>
                          { (item.price !== 1 ) && (item.price !== 9999 ) ?
                              item.price
                              :
                              'неизв.'
                          }
                        </div>
                      </div>
                  );
                }
                return null;
              })
            )}
          </div>
          {
            selectedClient && <DatabaseDetailedInfo />
          }
        </div>
      </div>

      {baseModal && <BaseModal/>}

      {planModal &&  <StaffModal />}

      {ticketModal && <DataBaseAddTicket />}

      {showTicket && <DataBaseShowTicket />}

      {statisticsModal && <Statistics />}

    </div>
  );
};

export default Database;
