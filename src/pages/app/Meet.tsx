import { useState, useEffect } from 'react'
import CaretLeftIcon from '../../components/icons/CaretLeft'
// import NoVideoIcon from '../../components/icons/NoVideoIcon'
import Ghost from '../../assets/images/ghost.png'
import '../css/meet.css'
import GroupsIcon from '../../components/icons/GroupsIcon'
import LayoutGrid4Icon from '../../components/icons/LayoutGrid4'
import LayoutGrid3Icon from '../../components/icons/LayoutGrid3'
import SingleFocusIcon from '../../components/icons/SingleFocusIcon'
import CaretDownIcon from '../../components/icons/CaretDown'
import ProfileAddIcon from '../../components/icons/ProfileAddIcon'
import MicrophoneIcon from '../../components/icons/MicrophoneIcon'
import MicrophoneSlashIcon from '../../components/icons/MicrophoneSlashIcon'
import SpeakerIcon from '../../components/icons/SpeakerIcon'
import SpeakerSlashIcon from '../../components/icons/SpeakerSlashIcon'
import VideoIcon from '../../components/icons/VideoIcon'
import NoVideoIcon from '../../components/icons/NoVideoIcon'
import SettingIcon from '../../components/icons/SettingIcon'
import CallIcon from '../../components/icons/CallIcon'
import CallCancelIcon from '../../components/icons/CallCancelIcon'
import MenuIcon from '../../components/icons/MenuIcon'
import { useNavigate, useParams } from 'react-router-dom'
import { v4 as uuidV4 } from 'uuid'

const Meet = ({ onGoing, toggleMenu } : { onGoing: boolean, toggleMenu: (value: boolean) => void }) => {
    const [isOngoing, setIsOngoing] = useState(false)
    let params = useParams();
    let navigate = useNavigate()
    

    const [layoutType, setLayoutType] = useState('grid')
    const [microphoneOn, setMicrophoneOn] = useState(true)
    const [speakerOn, setSpeakerOn] = useState(true)
    const [videoOn, setVideoOn] = useState(true)
    const [callBtnHovered, setCallBtnHovered] = useState(false)
    const [openCreateModal, setOpenCreateModal] = useState(false)

    const createRoomID = () => {
        let id = uuidV4()
        navigate(`/dashboard/meet/${id}`)
    }

    useEffect(() => {
        setIsOngoing(onGoing)
    }, [onGoing])

    useEffect(() => {
        if (params.id) {
            setIsOngoing(true)
            setOpenCreateModal(false)
        }
    }, [params.id])



    return (
        <div className='meet'>
            <section>

                {
                    isOngoing ? (
                        <>
                            <nav>
                                <button onClick={() => setIsOngoing(false)}>
                                    <CaretLeftIcon color='white' />
                                </button>
                                <h2>Design Meeting</h2>
                                <div className="type-badge">
                                    <GroupsIcon color='' />
                                    <span>Group</span>
                                </div>

                                <div className="layout-actions">
                                    <button className={layoutType === 'single' ? 'active-action' : 'inactive-action'} onClick={() => setLayoutType('single')}>
                                        <SingleFocusIcon color='inherit' />
                                    </button>
                                    <button className={layoutType === 'stage' ? 'active-action' : 'inactive-action'} onClick={() => setLayoutType('stage')}>
                                        <LayoutGrid3Icon color='inherit' />
                                    </button>
                                    <button className={layoutType === 'grid' ? 'active-action' : 'inactive-action'} onClick={() => setLayoutType('grid')}>
                                        <LayoutGrid4Icon color='inherit' />
                                    </button>
                                </div>

                                <button onClick={() => toggleMenu(true)}>
                                    <MenuIcon color='white' />
                                </button>
                            </nav>
                            <div className="tracking-display">
                                <div className="participants">
                                    <GroupsIcon color='white' />
                                    <span>32</span>
                                    <CaretDownIcon color='white' />
                                </div>

                                <button>
                                    <ProfileAddIcon color='turquoise' />
                                    <span>
                                        Invite <span>a participant</span>
                                    </span>
                                </button>

                                <div className="duration">
                                    <div className="indicator"></div>
                                    <span>12:34</span>
                                </div>
                            </div>
                            <div className={`arena ${layoutType}`}>
                                {
                                    Array(4).fill(0).map((value: any, index: number) => {
                                        return (
                                            <div key={index} className='user-video-card'>

                                            </div>
                                        )
                                    })
                                }
                                <div className="user-count-card"></div>
                            </div>
                            <footer>
                                <button>
                                    <LayoutGrid4Icon color='turquoise' />
                                    <span>Tools</span>
                                </button>

                                <div className="action-bar">
                                    <button onClick={() => setSpeakerOn(!speakerOn)}>
                                        {
                                            speakerOn ?
                                            <SpeakerIcon color='white' /> :
                                            <SpeakerSlashIcon color='white' />
                                        }
                                    </button>
                                    <button onClick={() => setMicrophoneOn(!microphoneOn)}>
                                        {
                                            microphoneOn ?
                                            <MicrophoneIcon color='white' /> :
                                            <MicrophoneSlashIcon color='white' /> 
                                        }
                                    </button>
                                    <button id='end-meet' onMouseOver={() => setCallBtnHovered(true)} onMouseLeave={() => setCallBtnHovered(false)}>
                                        {
                                            !callBtnHovered ?
                                            <CallIcon color='white' /> :
                                            <CallCancelIcon color='white' />
                                        }
                                    </button>
                                    <button onClick={() => setVideoOn(!videoOn)}>
                                        {
                                            videoOn ? 
                                            <VideoIcon color='white' /> :
                                            <NoVideoIcon color='white' />
                                        }
                                    </button>
                                    <button>
                                        <SettingIcon color='white' />
                                    </button>
                                </div>
                            </footer>
                        </>
                    ) : (
                        <div className="start-meet-dialog">
                            <figure>
                                <img src={Ghost} alt="" />
                            </figure>
                            <p>You have no ongoing meetings</p>
                            <button onClick={() => setOpenCreateModal(true)}>
                                Host a new meeting
                            </button>
                        </div>
                    )
                }
                {
                    openCreateModal &&
                        <div className="create-meeting">
                            <nav>
                                <button onClick={() => setOpenCreateModal(false)}>
                                    <CaretLeftIcon color='white' />
                                </button>
                                <h1>Create a meet</h1>
                            </nav>
                            <form onSubmit={(e) => e.preventDefault()}>
                                <label htmlFor="title">Enter a topic/title</label>
                                <input type="text" id='title' placeholder='Topic/Title...' />

                                <label htmlFor="description">Enter a description (Optional)</label>
                                <input type="text" id='description' placeholder='Description...' />
                                
                                <label htmlFor="hours">Enter duration (Optional)</label>
                                <div className="duration-block">
                                    <input type="number" id='hours' placeholder='Hours...' />
                                    <input type="number" id='mins' placeholder='Mins...' />
                                </div>

                                <button onClick={() => createRoomID()}>
                                    Create Meeting
                                </button>
                            </form>
                        </div>
                }
            </section>
            {isOngoing && 
                <aside>
                </aside>
            }
        </div>
    )
}

export default Meet
