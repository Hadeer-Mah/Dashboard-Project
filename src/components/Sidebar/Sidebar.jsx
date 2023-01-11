import './Sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import StoreIcon from '@mui/icons-material/Store';
import PaymentIcon from '@mui/icons-material/Payment';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/DarkMode';


const Sidebar = () => {
    const {switchToDark, switchToLight} = useContext(DarkModeContext)

  return (
    <>
    <div className='sidebar'>
        <div className="top">
            <Link to='/' style={{textDecoration:'none'}}><span className="logo">Admin</span></Link>
        </div>
        <hr/>
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <Link to='/' style={{textDecoration:'none'}}>
                <li>
                    <DashboardIcon className='icon'/>
                    <span>Dashboard</span>
                </li>
                </Link>
                <p className="title">LISTS</p>
                <Link to='/users' style={{textDecoration:'none'}}>
                <li>
                    <PersonIcon className='icon'/>
                    <span>Users</span>
                </li>
                </Link>
                <Link to='/products' style={{textDecoration:'none'}}>
                <li>
                    <StoreIcon className='icon'/>
                    <span>Products</span>
                </li>
                </Link>              
                
                <li>
                    <PaymentIcon className='icon'/>
                    <span>Orders</span>
                </li>
                <li>
                    <LocalShippingIcon className='icon'/>
                    <span>Delivery</span>
                </li>
                <p className="title">USEFUL</p>
                <li>
                    <AssessmentIcon className='icon'/>
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsNoneIcon className='icon'/>
                    <span>Notifications</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                    <SettingsSystemDaydreamIcon className='icon'/>
                    <span>System health</span>
                </li>
                <li>
                    <PsychologyIcon className='icon'/>
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsIcon className='icon'/>
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <AccountCircleIcon className='icon'/>
                    <span>Profile</span>
                </li>
                <li>
                    <ExitToAppIcon className='icon'/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption" onClick={switchToLight}></div>
            <div className="colorOption" onClick={switchToDark}></div>
        </div>
    </div>
    </>
  )
}

export default Sidebar