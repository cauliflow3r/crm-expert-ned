import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import './../styles/SiteAdminPanelEdit.css'
import {setEditAnnouncement} from "../features/editAnnouncement/editAnnouncementSlice";
import {realtors} from "../constants/realtorsSite";

const SiteAdminPanelEdit = () => {

    const data = useSelector(state => state.getOneFlat.getOneFlat)
    const editAnnouncement = useSelector(state => state.editAnnouncement)
    const dispatch = useDispatch()

    const [editData, setEditData] = useState({
        title: data.title,
        condition: data.condition,
        series: data.series,
        floor: data.floor,
        number_of_floors: data.number_of_floors,
        rooms: data.rooms,
        price: data.price,
        document: data.document,
        total_area: data.total_area,
        district: data.district,
        description: data.description,
        comments: "string",
        realtor: data.realtor.id
    })

    console.log(data)

    const closeBaseModal = () => {
        dispatch(setEditAnnouncement(false))
    }

    return (
        <div onClick={closeBaseModal} className={editAnnouncement ? 'base-modal active' : 'base-modal'}>
            <div onClick={(e) => e.stopPropagation()} className={editAnnouncement ? 'modal__content active' : 'modal__content'}>

                <div className='site-admin-panel-edit-window-flex'>
                    <span>Заголовок объявления</span>
                    <input
                        type="text"
                        placeholder='Заголовок объявления'
                        className='site-admin-panel-inputs'
                        onChange={(e) => setEditData(prevState => ({...prevState, title: e.target.value}))}
                        value={editData.title}
                    />
                </div>

                <div className="site-admin-panel-edit-window-flex">
                    <span>Район / адрес</span>
                    <input
                        type="text"
                        placeholder='Район/Адрес'
                        className='site-admin-panel-inputs'
                        onChange={(e) => setEditData(prevState => ({...prevState, district: e.target.value}))}
                        value={editData.district}
                    />
                </div>

                <div className="site-admin-panel-edit-window-flex">
                    <span>Серия</span>
                    <input
                        type="text"
                        placeholder='Серия'
                        className='site-admin-panel-inputs'
                        onChange={(e) => setEditData(prevState => ({...prevState, series: e.target.value}))}
                        value={editData.series}
                    />
                </div>

                <div className="site-admin-panel-edit-window-flex">
                    <span>Комнаты</span>
                    <input
                        type="text"
                        placeholder='Количество комнат'
                        className='site-admin-panel-inputs'
                        onChange={(e) => setEditData(prevState => ({...prevState, rooms: e.target.value}))}
                        value={editData.rooms}
                    />
                </div>

                <div className="site-admin-panel-edit-window-flex">
                    <span>Этаж</span>
                    <input
                        type="text"
                        placeholder='Этаж'
                        className='site-admin-panel-inputs'
                        onChange={(e) => setEditData(prevState => ({...prevState, floor: e.target.value}))}
                        value={editData.floor}
                    />
                </div>

                <div className="site-admin-panel-edit-window-flex">
                    <span>Всего этажей</span>
                    <input
                        type="text"
                        placeholder='Всего этажей'
                        className='site-admin-panel-inputs'
                        onChange={(e) => setEditData(prevState => ({...prevState, number_of_floors: e.target.value}))}
                        value={editData.number_of_floors}
                    />
                </div>

                <div className="site-admin-panel-edit-window-flex">
                    <span>Квадратура</span>
                    <input
                        type="text"
                        placeholder='Площадь'
                        className='site-admin-panel-inputs'
                        onChange={(e) => setEditData(prevState => ({...prevState, total_area: e.target.value}))}
                        value={editData.total_area}
                    />
                </div>

                <div className="site-admin-panel-edit-window-flex">
                    <span>Документы</span>
                    <input
                        type="text"
                        placeholder='Тип документа'
                        className='site-admin-panel-inputs'
                        onChange={(e) => setEditData(prevState => ({...prevState, document: e.target.value}))}
                        value={editData.document}
                    />
                </div>

                <div className="site-admin-panel-edit-window-flex">
                    <span>Состояние</span>
                    <input
                        type="text"
                        placeholder='Состояние'
                        className='site-admin-panel-inputs'
                        onChange={(e) => setEditData(prevState => ({...prevState, condition: e.target.value}))}
                        value={editData.condition}
                    />
                </div>

                <div className="site-admin-panel-edit-window-flex">
                    <span>Описание</span>
                    <input
                        type="text"
                        placeholder='Описание'
                        className='site-admin-panel-inputs'
                        onChange={(e) => setEditData(prevState => ({...prevState, description: e.target.value}))}
                        value={editData.description}
                    />
                </div>

                <div className="site-admin-panel-edit-window-flex">
                    <span>Цена</span>
                    <input
                        type="text"
                        placeholder='Цена'
                        className='site-admin-panel-inputs'
                        onChange={(e) => setEditData(prevState => ({...prevState, price: e.target.value}))}
                        value={editData.price}
                    />
                </div>

                <input
                    type="button"
                    value='Редактировать'
                    className='site-admin-panel-inputs'
                    onClick={null}
                />

            </div>
        </div>
    );
};

export default SiteAdminPanelEdit;