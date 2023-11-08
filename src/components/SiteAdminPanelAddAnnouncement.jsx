import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setBaseModal} from "../features/baseModal/baseModalSlice";
import './../styles/SiteAdminPanelAddAnnouncement.css'
import {addFlat} from "../crm-logic/addFlat";
import {realtors} from "../constants/realtorsSite";

const SiteAdminPanelAddAnnouncement = () => {
    const [addData, setAddData] = useState({
        title: "",
        condition: "",
        series: "",
        floor: '',
        number_of_floors: '',
        rooms: '',
        price: '',
        document: "",
        total_area: "",
        district: "",
        description: "",
        comments: "string",
        realtor: 2
    })
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const baseModal = useSelector((state) => state.baseModal)
    const dispatch = useDispatch()

    const closeBaseModal = () => {
        dispatch(setBaseModal(false))
    }

    const handleFileChange = (e) => {
        setImages([...e.target.files])
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('title', addData.title);
        formData.append('condition', addData.condition);
        formData.append('series', addData.series);
        formData.append('floor', addData.floor);
        formData.append('number_of_floors', addData.number_of_floors);
        formData.append('rooms', addData.rooms);
        formData.append('price', addData.price);
        formData.append('document', addData.document);
        formData.append('total_area', addData.total_area);
        formData.append('district', addData.district);
        formData.append('description', addData.description);
        formData.append('comments', addData.comments);
        for (let i = 0; i < images.length; i++) {
            formData.append('images', images[i]);
        }
        formData.append('realtor', addData.realtor)
        setIsLoading(true)
        try {
            await addFlat(formData, dispatch);
        } catch (e) {
           alert('Ошибка добавления квартиры')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div onClick={closeBaseModal} className={baseModal ? 'base-modal active' : 'base-modal'}>
            <div onClick={(e) => e.stopPropagation()} className={baseModal ? 'modal__content active' : 'modal__content'}>
                <div className='site-admin-panel-container'>
                    <h2 className='site-admin-panel-add-title'>Добавить объявление</h2>

                    <input
                        type="text"
                        placeholder='Заголовок объявления'
                        className='site-admin-panel-inputs'
                        onChange={(e) => setAddData(prevState => ({...prevState, title: e.target.value}))}
                        value={addData.title}
                    />

                    <input
                        type="text"
                        placeholder='Район/Адрес'
                        className='site-admin-panel-inputs'
                        onChange={(e) => setAddData(prevState => ({...prevState, district: e.target.value}))}
                        value={addData.district}
                    />

                    <input
                        type="text"
                        placeholder='Серия'
                        className='site-admin-panel-inputs'
                        onChange={(e) => setAddData(prevState => ({...prevState, series: e.target.value}))}
                        value={addData.series}
                    />

                    <input
                        type="text"
                        placeholder='Количество комнат'
                        className='site-admin-panel-inputs'
                        onChange={(e) => setAddData(prevState => ({...prevState, rooms: e.target.value}))}
                        value={addData.rooms}
                    />

                    <input
                        type="text"
                        placeholder='Этаж'
                        className='site-admin-panel-inputs'
                        onChange={(e) => setAddData(prevState => ({...prevState, floor: e.target.value}))}
                        value={addData.floor}
                    />

                    <input
                        type="text"
                        placeholder='Всего этажей'
                        className='site-admin-panel-inputs'
                        onChange={(e) => setAddData(prevState => ({...prevState, number_of_floors: e.target.value}))}
                        value={addData.number_of_floors}
                    />

                    <input
                        type="text"
                        placeholder='Площадь'
                        className='site-admin-panel-inputs'
                        onChange={(e) => setAddData(prevState => ({...prevState, total_area: e.target.value}))}
                        value={addData.total_area}
                    />

                    <input
                        type="text"
                        placeholder='Тип документа'
                        className='site-admin-panel-inputs'
                        onChange={(e) => setAddData(prevState => ({...prevState, document: e.target.value}))}
                        value={addData.document}
                    />

                    <input
                        type="text"
                        placeholder='Состояние'
                        className='site-admin-panel-inputs'
                        onChange={(e) => setAddData(prevState => ({...prevState, condition: e.target.value}))}
                        value={addData.condition}
                    />

                    <input
                        type="text"
                        placeholder='Описание'
                        className='site-admin-panel-inputs'
                        onChange={(e) => setAddData(prevState => ({...prevState, description: e.target.value}))}
                        value={addData.description}
                    />

                    <input
                        type="text"
                        placeholder='Цена'
                        className='site-admin-panel-inputs'
                        onChange={(e) => setAddData(prevState => ({...prevState, price: e.target.value}))}
                        value={addData.price}
                    />

                    <input
                        className='site-admin-panel-inputs'
                        type="file"
                        onChange={handleFileChange}
                        multiple />

                    <select
                        className='site-admin-panel-inputs'
                        onChange={(e) => setAddData(prevState => ({...prevState, realtor: e.target.value}))}
                    >
                        {realtors.map((item) => {
                            return (
                                <option
                                    key={item.id}
                                    value={item.id}
                                >
                                    {item.name}
                                </option>
                            )
                        })}
                    </select>

                    <input
                        type="button"
                        value='Разместить объявление'
                        className='site-admin-panel-inputs'
                        onClick={handleSubmit}
                        disabled={isLoading}
                    />
                    {isLoading &&
                        <h3 style={{textAlign: 'center', color: 'red'}}>Загрузка объявления, подождите!</h3>
                    }

                </div>
            </div>
        </div>
    );
};

export default SiteAdminPanelAddAnnouncement;