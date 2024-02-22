import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setPlanModal} from "../features/planModal/planModal";
import './../styles/BaseModal.css'
import '../styles/PlanModal.css'


const StaffModal = () => {
  const planModal = useSelector(state => state.planModal)
  const dispatch = useDispatch()
  const id = localStorage.getItem('id')
  const theme = useSelector((state) => state.darkTheme)

  const closeBaseModal = () => {
    dispatch(setPlanModal(false))
  }

  return (
    <div onClick={closeBaseModal} className={planModal ? 'base-modal active' : 'base-modal'}>
      <div onClick={(e) => e.stopPropagation()} className={` ${planModal ? `modal__content active` : `modal__content`} ${theme ? 'data-base-dark-theme' : ''}`}>
        <div>
          <div>
            <h3 className="plan-modal-title">ИП "Баялиев Замирбек Бактыбекович"</h3>
            <p className="plan-modal-description">
              Более известны как <strong>АН "Эксперт Недвижимость"</strong>
            </p>

            <h4 className="plan-modal-title">Дирекция</h4>
            <p className="plan-modal-employees">Баялиев Замирбек Бактыбекович - <strong>Директор, 0553 501 040</strong></p>
            <p className="plan-modal-employees">Бектемиров Бекболот Ажимаматович - <strong>Финансовый директор, 0559 491 919</strong></p>
            <p className="plan-modal-employees">Куленбеков Аскар Тимурович - <strong>Технический директор, 0755 264 262</strong></p>

            <h4 className="plan-modal-title">Отдел продаж</h4>
            <p className="plan-modal-employees">Казыбеков Калыбек - <strong>Старший менеджер, 0556 510 150</strong></p>
            <p className="plan-modal-employees">Имашов Алмаз - <strong>Менеджер по работе с клиентами, 0557 510 150</strong></p>
            <p className="plan-modal-employees">Турдаалиев Азирет - <strong>Менеджер по работе с клиентами, 0702 260 098</strong></p>
            <p className="plan-modal-employees">Бакытбек Кудайбергенов - <strong>Менеджер по работе с клиентами, номер телефона</strong></p>
            <p className="plan-modal-employees">Адахан Жээнбеков - <strong>Менеджер по работе с клиентами, номер телефона</strong></p>
            <p className="plan-modal-employees">Аблималик кызы Роза - <strong>Менеджер по работе с клиентами, 0505 454 224</strong></p>
            <p className="plan-modal-employees">Айкыз Саматова - <strong>Менеджер по работе с клиентами, 0708 648 769</strong></p>
            <p className="plan-modal-employees">Жанболот Келдибеков - <strong>Менеджер по работе с клиентами, номер телефона</strong></p>


            <h4 className="plan-modal-title">Отдел маркетинга</h4>
            <p className="plan-modal-employees">Кутманалиева Айгерим - <strong>СММ-специалист, 0703 551 506</strong></p>


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
          {
            (id === '7' || id === '6') &&
            <div>
              <h4 className="plan-modal-title plan-modal-second-section">Пароли от площадок</h4>
              <p className="plan-modal-employees">Lalafo.kg - Логин: <strong>Zbayaliev70@gmail.com</strong> , пароль: <strong>0555239318a</strong></p>
              <p className="plan-modal-employees">House.kg - Логин: <strong>0706485522</strong> , пароль: <strong>0555239318a</strong></p>

              <h4 className="plan-modal-title plan-modal-second-section">Пароли CRM</h4>
              <p className="plan-modal-employees">Стажер - Логин: <strong>stazher</strong> , пароль: <strong>en2023</strong></p>
              <p className="plan-modal-employees">Алмаз Имашов - Логин: <strong>aimashov</strong> , пароль: <strong>NAZI9407</strong></p>
              <p className="plan-modal-employees">Калыбек Казыбеков - Логин: <strong>kkazybekov</strong> , пароль: <strong>Gostoper1996</strong></p>
              <p className="plan-modal-employees">Арген Самсалиев - Логин: <strong>asamsaliev</strong> , пароль: <strong>0555239318</strong></p>
              <p className="plan-modal-employees">Азирет Турдаалиев - Логин: <strong>aturdaaliev</strong> , пароль: <strong>260098a</strong></p>
              <p className="plan-modal-employees">Алтынай Орозакунова - Логин: <strong>aorozakunova</strong> , пароль: <strong>Altynai99</strong></p>
              <p className="plan-modal-employees">Бакыт Кудайбергенов - Логин: <strong>Bkudaibergenov</strong> , пароль: <strong>6969</strong></p>
              <p className="plan-modal-employees">Адахан Жээнбеков - Логин: <strong>azheenbekov</strong> , пароль: <strong>5515Adahan</strong></p>

            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default StaffModal;