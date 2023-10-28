import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setBaseModal} from "../features/baseModal/baseModalSlice";
import './../styles/SiteAdminPanelAddAnnouncement.css'

const SiteAdminPanelAddAnnouncement = () => {
    const baseModal = useSelector((state) => state.baseModal)
    const dispatch = useDispatch()

    const closeBaseModal = () => {
        dispatch(setBaseModal(false))
    }

    return (
        <div onClick={closeBaseModal} className={baseModal ? 'base-modal active' : 'base-modal'}>
            <div onClick={(e) => e.stopPropagation()} className={baseModal ? 'modal__content active' : 'modal__content'}>
                <h2 className='site-admin-panel-add-title'>Добавить объявление</h2>


            </div>
        </div>
    );
};

export default SiteAdminPanelAddAnnouncement;