import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import './../styles/SiteAdminPannelDetailedInfo.css'
import {deleteFlat} from "../crm-logic/deleteFlat";
import {getOneFlat} from "../crm-logic/getOneFlat";
import {setGetOneFlat} from "../features/getOneFlat/getOneFlatSlice";

const SiteAdminPanelDetailedInfo = () => {

    const [deleteConfirm, setDeleteConfirm] = useState(false)
    const selectedFlat = useSelector(state => state.getOneFlat.getOneFlat)
    const isLoading = useSelector(state => state.isLoadingSiteAdminDetailedInfo)
    const dispatch = useDispatch()

    const handleDelete = async () => {
      dispatch(setGetOneFlat(null))
      await deleteFlat(selectedFlat.id, dispatch)
    }

    return (
        <div>
            {isLoading ?
                <div>Loading...</div>
                :
                <div>
                    <button onClick={() => getOneFlat(selectedFlat.id, dispatch)}>Обновить</button>
                    <button>Редактировать</button>
                    <button
                        onClick={() => setDeleteConfirm(true)}
                    >Удалить</button>
                    {deleteConfirm &&
                        <div>
                        <span>Вы точно хотите удалить?</span>
                        <button onClick={handleDelete}>Да</button>
                        <button onClick={() => setDeleteConfirm(false)}>Нет</button>
                    </div>}
                    <div>
                        <h2>{selectedFlat.title}</h2>
                        <div>ID: <strong>{selectedFlat.id}</strong></div>
                        <div>Район: <strong>{selectedFlat.district}</strong></div>
                        <div>Серия: <strong>{selectedFlat.series}</strong></div>
                        <div>Комнаты: <strong>{selectedFlat.rooms}</strong></div>
                        <div>Этаж: <strong>{selectedFlat.floor} из {selectedFlat.number_of_floors}</strong></div>
                        <div>Площадь: <strong>{selectedFlat.total_area} м2</strong></div>
                        <div>Тип документа: <strong>{selectedFlat.document}</strong></div>
                        <div>Состояние: <strong>{selectedFlat.condition}</strong></div>
                        <div>Описание: <strong>{selectedFlat.description}</strong></div>
                        <div>Цена: <strong>{selectedFlat.price}</strong> $</div>
                        <div>Менеджер: <strong>{selectedFlat.realtor.FIO}</strong></div>

                        <div className='site-admin-panel-images-wrap'>
                            {selectedFlat.flat_images.map((item, idx) => {
                                return (
                                    <div
                                        key={idx}
                                        className='site-admin-panel-images'
                                    >
                                        <a href={item.image} target="_blank">
                                            <img
                                                src={item.image}
                                                alt='photo'
                                                className='site-admin-panel-photo-img'
                                            />
                                        </a>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            }

        </div>
    );
};

export default SiteAdminPanelDetailedInfo;