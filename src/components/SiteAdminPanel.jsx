import React, {useEffect, useState} from "react";
import {getFlats} from "../crm-logic/getFlats";
import {useDispatch, useSelector} from "react-redux";
import './../styles/SiteAdminPanel.css'
import {getOneFlat} from "../crm-logic/getOneFlat";
import SiteAdminPanelDetailedInfo from "./SiteAdminPanelDetailedInfo";
import SiteAdminPanelAddAnnouncement from "./SiteAdminPanelAddAnnouncement";
import {setBaseModal} from "../features/baseModal/baseModalSlice";
import SiteAdminPanelEdit from "./SiteAdminPanelEdit";

const SiteAdminPanel = () => {

    const dispatch = useDispatch()
    const allFlats = useSelector(state => state.allFlats.data)
    const isLoading = useSelector(state => state.isLoadingSiteAdmin)
    const selectedFlat = useSelector(state => state.getOneFlat.getOneFlat)
    const baseModal = useSelector((state) => state.baseModal)
    const editAnnouncement = useSelector(state => state.editAnnouncement)
    const [page, setPage] = useState(1)

    useEffect(() => {
        getFlats(dispatch, page)
    }, [page])

  return (
      <div className='data-base-head'>
          <div className="data-base">
              <div className="site-admin-panel-head-buttons">
                  <button onClick={() => dispatch(setBaseModal(true))}>Добавить объявление</button>
                  <button onClick={() => getFlats(dispatch, page)}>Обновить</button>
              </div>
              <div className="site-admin-panel-wrap">
                  <div className="site-admin-panel-list">
                      {isLoading ?
                          <div>Loading...</div>
                          :
                          <div>{allFlats.map((item, idx) => {
                              return (
                                  <div
                                      key={idx}
                                      className={`site-admin-panel-every-flat ${selectedFlat && selectedFlat.id === item.id ? 'site-admin-panel-every-flat-active' : ''}`}
                                      onClick={() => getOneFlat(item.id, dispatch)}
                                  >
                                      {item.title}
                                  </div>
                              )
                          })}</div>
                      }
                  </div>
                  <div className="site-admin-panel-every-flat-detailed-info">
                      {selectedFlat && <SiteAdminPanelDetailedInfo/>}
                      {baseModal && <SiteAdminPanelAddAnnouncement />}
                      {editAnnouncement && <SiteAdminPanelEdit />}
                  </div>
              </div>
              <div>
                  <input
                      type="button"
                      value='Назад'
                      onClick={() => setPage(prevState => prevState - 1)}
                  />
                  <input
                      type="button"
                      value='Дальше'
                      onClick={() => setPage(prevState => prevState + 1)}
                  />
              </div>

          </div>
      </div>
  );

};

export default SiteAdminPanel;
