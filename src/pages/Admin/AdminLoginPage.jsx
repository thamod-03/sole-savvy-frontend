import React, { useContext, useEffect } from 'react'
import AdminLoginForm from '../../components/AdminLoginForm'
import { AppContent } from '../../context/AppContext'
import { useNavigate } from 'react-router-dom';
import AdminMenu from '../../components/AdminMenu';

const AdminLoginPage = () => {
    const { isLogged, isAdminLogged } = useContext(AppContent);
    const navigate = useNavigate();

    useEffect(() => {
        if (isLogged) {
            navigate("/")
        }
    },[isLogged])

    return (<div>
        {!isAdminLogged && <AdminLoginForm />}
        {isAdminLogged && <AdminMenu/>}
    </div>);
}

export default AdminLoginPage