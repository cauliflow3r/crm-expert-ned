import React from 'react';
import {useSelector} from "react-redux";
import './../styles/SiteAdminPannelDetailedInfo.css'

const SiteAdminPanelDetailedInfo = () => {

    const selectedFlat = useSelector(state => state.getOneFlat.getOneFlat)
    const isLoading = useSelector(state => state.isLoadingSiteAdminDetailedInfo)

    return (
        <div>
            {isLoading ?
                <div>Loading...</div>
                :
                <div>
                    <div>
                        <h2>{selectedFlat.title}</h2>
                        <div>Район: <strong>{selectedFlat.district}</strong></div>
                        <div>Серия: <strong>{selectedFlat.series}</strong></div>
                        <div>Этаж: <strong>{selectedFlat.floor} из {selectedFlat.number_of_floors}</strong></div>
                        <div>Площадь: <strong>{selectedFlat.total_area} м2</strong></div>
                        <div>Тип документа: <strong>{selectedFlat.document}</strong></div>
                        <div>Состояние: <strong>{selectedFlat.condition}</strong></div>
                        <div>Описание: <strong>{selectedFlat.description}</strong></div>
                        <div>Цена: <strong>{selectedFlat.price}</strong> $</div>
                        <div>ID: <strong>{selectedFlat.id}</strong></div>

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