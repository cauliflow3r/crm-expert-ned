import React, {useEffect} from "react";
import {getFlats} from "../crm-logic/getFlats";
import {useDispatch, useSelector} from "react-redux";
import './../styles/SiteAdminPanel.css'
import {getOneFlat} from "../crm-logic/getOneFlat";

const SiteAdminPanel = () => {
    const dispatch = useDispatch()
    const allFlats = useSelector(state => state.allFlats.data)
    const isLoading = useSelector(state => state.isLoadingSiteAdmin)
    const selectedFlat = useSelector(state => state.getOneFlat.getOneFlat)

    useEffect(() => {
        getFlats(dispatch)
    }, [])

  return (
      <div className='data-base-head'>
          <div className="data-base">
              <div className="site-admin-panel-wrap">
                  <div className="site-admin-panel-list">
                      {isLoading ?
                          <div>Loading...</div>
                          :
                          <div>{allFlats.map((item, idx) => {
                              return (
                                  <div
                                      key={idx}
                                      className='site-admin-panel-every-flat'
                                      onClick={() => getOneFlat(item.id, dispatch)}
                                  >
                                      {item.title}
                                  </div>
                              )
                          })}</div>
                      }
                  </div>
                  <div className="site-admin-panel-every-flat-detailed-info">

                  </div>
              </div>
          </div>
      </div>
  );

};

export default SiteAdminPanel;
