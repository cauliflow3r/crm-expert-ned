import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setPlanModal} from "../features/planModal/planModal";
import './../styles/BaseModal.css'
import '../styles/PlanModal.css'


const PlanModal = () => {
  const planModal = useSelector(state => state.planModal)
  const dispatch = useDispatch()

  const closeBaseModal = () => {
    dispatch(setPlanModal(false))
  }

  return (
    <div onClick={closeBaseModal} className={planModal ? 'base-modal active' : 'base-modal'}>
      <div onClick={(e) => e.stopPropagation()} className={planModal ? 'modal__content active' : 'modal__content'}>
        <div>
          <div>
            <h3 className="plan-modal-title">ИП "Баялиев Замирбек Бактыбекович"</h3>
            <p className="plan-modal-description">
              Более известны как <strong>АН "Эксперт Недвижимость"</strong>
            </p>

            <h4 className="plan-modal-title">Дирекция</h4>
            <p className="plan-modal-employees">Баялиев Замирбек Бактыбекович - <strong>Директор, 0553 501 040</strong></p>

            <h4 className="plan-modal-title">Отдел продаж</h4>
            <p className="plan-modal-employees">Имашов Алмаз - <strong>Менеджер по работе с клиентами, 0557 510 150</strong></p>
            <p className="plan-modal-employees">Самсалиев Арген - <strong>Менеджер по работе с клиентами, 0706 332 125</strong></p>
            <p className="plan-modal-employees">Турдаалиев Азирет - <strong>Менеджер по работе с клиентами, 0702 260 098</strong></p>

            <h4 className="plan-modal-title">Отдел маркетинга</h4>
            <p className="plan-modal-employees">Кутманалиева Айгерим - <strong>СММ-специалист, 0703 551 506</strong></p>

            <h4 className="plan-modal-title">IT-отдел</h4>
            <p className="plan-modal-employees">Азамат @cauliflow3r - <strong>Frontend-разработчик</strong></p>
            <p className="plan-modal-employees">Аскар @oscarquell - <strong>Frontend-разработчик, 0755 264 262</strong></p>
             <p className="plan-modal-employees">Эльдана @fin_shine - <strong>Frontend-разработчик, 0702 559 970</strong></p>
            <p className="plan-modal-employees">Бекбол @hfhdjkel - <strong>Backend-разработчик, 0557 571 051</strong></p>
            <p className="plan-modal-employees">Нурсултан @nurrative - <strong>Backend-разработчик</strong></p>
          </div>
          <div>
            <h4 className="plan-modal-title plan-modal-second-section">Конфиденциальность информации</h4>
            <p className="plan-modal-trade-secret">
              Любая информация, находящееся в данной CRM системе абсолютна <strong>конфиденциальна!</strong>
            </p>
            <p className="plan-modal-trade-secret">
              За разглашение данной информации Стороны будут руководствоваться условиями и положениями Закона КР от 30 марта 1998 года №27  "
              <strong><a target='_blank' href="http://cbd.minjust.gov.kg/act/view/ru-ru/38/40?cl=ru-ru">О коммерческий тайне</a></strong>".
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanModal;