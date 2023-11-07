import React, {useState} from 'react'
import {addNewManager} from "../crm-logic/addNewManager";
import '../styles/UserAdminPanel.css'

const UserAdminPanel = ({userModal, setUserModal}) => {

    const [createUser, setCreateUser] = useState({
        username: '',
        email: '',
        first_name: '',
        last_name: '',
        password: '',
        password_confirm: ''
    })


    const handleAddNewManager = async (e) => {
        e.preventDefault()
       await addNewManager(createUser)
       setCreateUser({
           username: '',
           email: '',
           first_name: '',
           last_name: '',
           password: '',
           password_confirm: ''
       })
    }

    return (
        <div onClick={() => setUserModal(false)} className={userModal ? 'base-modal active' : 'base-modal'}>
            <div onClick={(e) => e.stopPropagation()} className={userModal ? 'modal__content active' : 'modal__content'}>
                <h2 className='user-admin-panel-title'>Создать нового пользователя</h2>
                <form className='user-admin-panel-form-inputs'>
                    <input value={createUser.username} type="text" placeholder='Логин' onChange={(e) => setCreateUser(prevState => ({...prevState, username: e.target.value}))}/>
                    <input value={createUser.email} type="text" placeholder='E-mail' onChange={(e) => setCreateUser(prevState => ({...prevState, email: e.target.value}))}/>
                    <input value={createUser.first_name} type="text" placeholder='Имя' onChange={(e) => setCreateUser(prevState => ({...prevState, first_name: e.target.value}))}/>
                    <input value={createUser.last_name} type="text" placeholder='Фамилия' onChange={(e) => setCreateUser(prevState => ({...prevState, last_name: e.target.value}))}/>
                    <input value={createUser.password} type="password" placeholder='Пароль' onChange={(e) => setCreateUser(prevState => ({...prevState, password: e.target.value}))}/>
                    <input value={createUser.password_confirm} type="password" placeholder='Подвердите пароль' onChange={(e) => setCreateUser(prevState => ({...prevState, password_confirm: e.target.value}))}/>
                    <button onClick={handleAddNewManager}>Зарегистрировать</button>
                </form>
            </div>
        </div>
    );
};

export default UserAdminPanel;