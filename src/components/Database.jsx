import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBase } from '../crm-logic/getBase';
import HeaderDatabase from './HeaderDatabase';
import './../styles/Database.css'
import {getOneClient} from "../crm-logic/getOneClient";
import DatabaseDetailedInfo from "./DatabaseDetailedInfo";
import BaseModal from "./BaseModal";
import {setSortByPrice} from "../features/searchParametres/searchParametersSlice";
import CircularIndeterminate from "./LoaderMaterialUi";

const Database = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.isLoading);
  const data = useSelector((state) => state.data.data);
  const typeOfBase = useSelector((state) => state.typeOfBase);
  const selectedClient = useSelector((state) => state.getOneClient.getOneClient)
  const baseModal = useSelector((state) => state.baseModal)
  const searchParameters = useSelector((state) => state.searchParameters)


  useEffect(() => {
    (async () => {
      await getBase(dispatch, searchParameters);
    })();
  }, []);

  const selectClient = async (id) => {
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
    <div style={{background: '#435334', padding: '20px'}}>
      <div className='data-base'>
        <HeaderDatabase />
        <div className='data-base-wrap'>
          <div className='data-base-all-client-list'>
            <div className="data-base-all-client-menu">
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
                      className={`data-base-every-client ${selectedClient && selectedClient.id === item.id ? 'data-base-selected' : ''}`}
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

    </div>
  );
};

export default Database;
