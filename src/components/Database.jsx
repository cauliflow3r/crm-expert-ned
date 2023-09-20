import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBase } from '../crm-logic/getBase';
import HeaderDatabase from './HeaderDatabase';
import './../styles/Database.css'
import {getOneClient} from "../crm-logic/getOneClient";
import DatabaseDetailedInfo from "./DatabaseDetailedInfo";
import BaseModal from "./BaseModal";

const Database = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.isLoading);
  const data = useSelector((state) => state.data.data);
  const typeOfBase = useSelector((state) => state.typeOfBase);
  const selectedClient = useSelector((state) => state.getOneClient.getOneClient)
  const baseModal = useSelector((state) => state.baseModal)


  useEffect(() => {
    (async () => {
      await getBase(dispatch);
    })();
  }, []);

  const selectClient = async (id) => {
   await getOneClient(id, dispatch)
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
              <div>Цена</div>
            </div>
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              data.map((item, idx) => {
                if (typeOfBase === 'Полная база' || item.type_of_base === typeOfBase) {
                  return (
                    <div
                      key={idx}
                      onClick={() => selectClient(item.id)}
                      className='data-base-every-client'
                    >
                      <div className='data-base-every-client-name'> {item.name}</div>
                      <div className='data-base-every-client-address'> {item.adress}</div>
                      <div> {item.price}$</div>
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
