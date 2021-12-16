import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'
import Meet from './Meet'

import '../css/dashboard.css'
import HomeIcon from '../../components/icons/HomeIcon'
import VideoIcon from '../../components/icons/VideoIcon'
import GroupsIcon from '../../components/icons/GroupsIcon'
import CalendarIcon from '../../components/icons/CalendarIcon'
import NotificationIcon from '../../components/icons/NotificationIcon'
import SettingIcon from '../../components/icons/SettingIcon'
import LogoutIcon from '../../components/icons/LogoutIcon'

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <aside>
                <NavLink to="/dashboard">
                    <img src={Logo} alt="" />
                </NavLink>

                <ul>
                    <li>
                        <NavLink to={'/dashboard/home'}>
                            <HomeIcon color='inherit' />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/meet'}>
                            <VideoIcon color='inherit' />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/groups'}>
                            <GroupsIcon color='inherit' />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/schedules'}>
                            <CalendarIcon color='inherit' />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/notifications'}>
                            <NotificationIcon color='inherit' />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/settings'}>
                            <SettingIcon color='inherit' />
                        </NavLink>
                    </li>
                </ul>

                <button id='logout'>
                    <LogoutIcon color='white' />
                </button>
            </aside>
            <main>
                <Routes>
                    <Route path="/meet" element={<Meet />} />
                </Routes>
            </main>
            <aside></aside>
        </div>
    )
}

export default Dashboard
