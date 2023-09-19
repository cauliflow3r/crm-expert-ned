import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBase } from '../crm-logic/getBase';
import HeaderDatabase from './HeaderDatabase';

const Database = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.isLoading);
  const data = useSelector((state) => state.data.data);
  const typeOfBase = useSelector((state) => state.typeOfBase);

  useEffect(() => {
    (async () => {
      await getBase(dispatch);
    })();
  }, []);

  return (
    <div>
      <HeaderDatabase />
      <div>
        {isLoading ? (
          <div>Loading</div>
        ) : (
          data.map((item, idx) => {
            if (typeOfBase === 'Полная база' || item.type_of_base === typeOfBase) {
              return (
                <div key={idx}>
                  <div>{item.type_of_base}</div>
                </div>
              );
            }
            return null; // Если условие не выполняется, вернуть null, чтобы элемент не был отрисован
          })
        )}
      </div>
    </div>
  );
};

export default Database;
