import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setBaseModal} from "../features/baseModal/baseModalSlice";
import './../styles/SiteAdminPanelAddAnnouncement.css'
import {
    setCondition, setDescription,
    setDistrict, setDocument,
    setFloor, setImages,
    setNumberOfFloors, setPrice, setRealtor, setRooms,
    setSeries,
    setTitle,
    setTotalArea, uploadImagesAsync
} from "../features/addFlat/addFlatSlice";
import {addFlat} from "../crm-logic/addFlat";

const SiteAdminPanelAddAnnouncement = () => {
    const baseModal = useSelector((state) => state.baseModal)
    const data = useSelector(state => state.addFlat)
    const dispatch = useDispatch()
    const value = useSelector(state => state.addFlat)
    const realtor = 6

    console.log(data)

    const changeRealtor = () => {
        dispatch(setRealtor(realtor))
    }

    useEffect(() => {
        changeRealtor()
    }, [])

    const closeBaseModal = () => {
        dispatch(setBaseModal(false))
    }

    const handleFileChange = (e) => {
        const files = e.target.files;
        dispatch(uploadImagesAsync(files));
    };

    return (
        <div onClick={closeBaseModal} className={baseModal ? 'base-modal active' : 'base-modal'}>
            <div onClick={(e) => e.stopPropagation()} className={baseModal ? 'modal__content active' : 'modal__content'}>
                <h2 className='site-admin-panel-add-title'>Добавить объявление</h2>

                <input
                    type="text"
                    placeholder='Заголовок объявления'
                    className='site-admin-panel-inputs'
                    onChange={(e) => dispatch(setTitle(e.target.value))}
                    value={value.title}
                />

                <input
                    type="text"
                    placeholder='Район/Адрес'
                    className='site-admin-panel-inputs'
                    onChange={(e) => dispatch(setDistrict(e.target.value))}
                    value={value.district}
                />

                <input
                    type="text"
                    placeholder='Серия'
                    className='site-admin-panel-inputs'
                    onChange={(e) => dispatch(setSeries(e.target.value))}
                    value={value.series}
                />

                <input
                    type="text"
                    placeholder='Количество комнат'
                    className='site-admin-panel-inputs'
                    onChange={(e) => dispatch(setRooms(e.target.value))}
                    value={value.rooms}
                />

                <input
                    type="text"
                    placeholder='Этаж'
                    className='site-admin-panel-inputs'
                    onChange={(e) => dispatch(setFloor(e.target.value))}
                    value={value.floor}
                />

                <input
                    type="text"
                    placeholder='Всего этажей'
                    className='site-admin-panel-inputs'
                    onChange={(e) => dispatch(setNumberOfFloors(e.target.value))}
                    value={value.number_of_floors}
                />

                <input
                    type="text"
                    placeholder='Площадь'
                    className='site-admin-panel-inputs'
                    onChange={(e) => dispatch(setTotalArea(e.target.value))}
                    value={value.total_area}
                />

                <input
                    type="text"
                    placeholder='Тип документа'
                    className='site-admin-panel-inputs'
                    onChange={(e) => dispatch(setDocument(e.target.value))}
                    value={value.document}
                />

                <input
                    type="text"
                    placeholder='Состояние'
                    className='site-admin-panel-inputs'
                    onChange={(e) => dispatch(setCondition(e.target.value))}
                    value={value.condition}
                />

                <input
                    type="text"
                    placeholder='Описание'
                    className='site-admin-panel-inputs'
                    onChange={(e) => dispatch(setDescription(e.target.value))}
                    value={value.description}
                />

                <input
                    type="text"
                    placeholder='Цена'
                    className='site-admin-panel-inputs'
                    onChange={(e) => dispatch(setPrice(e.target.value))}
                    value={value.price}
                />

                <input
                    className='site-admin-panel-inputs'
                    type="file"
                    onChange={handleFileChange}
                    multiple />


                <input
                    type="button"
                    value='Разместить объявление'
                    className='site-admin-panel-inputs'
                    onClick={() => addFlat(data)}
                />

            </div>
        </div>
    );
};

export default SiteAdminPanelAddAnnouncement;