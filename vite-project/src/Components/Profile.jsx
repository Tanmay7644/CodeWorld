import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate('/login');
            return;
        }
        const payload = JSON.parse(atob(token.split('.')[1]));
        setName(payload.name || "User");
        setEmail(payload.email || "No Email");
    }, [navigate]);

    const src = `https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=${encodeURIComponent(name)}`;

    function handleLogout() {
        localStorage.removeItem("token");
        navigate('/');
    }

    return (
        <div className='profile'>
            <h1 className='profile-head'>PROFILE</h1>
            <div className='profile-container'>
                <div className='profile-image'>
                    <img src={src} alt="" />
                </div>
                <div className='profile-info'>
                    <h1 className='profile-name'>Name: {name}</h1>
                    <h1 className='profile-name'>Email: {email}</h1>
                </div>
                <button className='profile-button' onClick={handleLogout}>Logout</button>
                <p>Keep Learning,we'll be right here!</p>
            </div>
            
        </div>
    )
}

export default Profile