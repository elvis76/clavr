import { useState } from 'react'
import { Routes, Route, NavLink, useNavigate } from 'react-router-dom'
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
    const navigate = useNavigate()
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <div className='dashboard'>
            <aside style={{ left: menuOpen ? '0%' : '-100%' }}>
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

                <button id='logout' onClick={() => navigate('/')}>
                    <LogoutIcon color='white' />
                </button>
            </aside>
            <main>
                <Routes>
                    <Route path="/meet" element={<Meet onGoing={false} toggleMenu={(value: boolean) => setMenuOpen(value)} />} />
                </Routes>
            </main>
            <aside>
                {/* <button></button> */}
            </aside>
        </div>
    )
}

export default Dashboard
