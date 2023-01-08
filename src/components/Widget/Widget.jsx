import { AccountBalanceWalletOutlined, KeyboardArrowUp, MonetizationOnOutlined, PersonOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import './Widget.scss'

const Widget = ({ type }) => {
    const amount = 100;
    const diff = 20;

    let data;

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                link: "See all users",
                isMoney: false,
                icon: <PersonOutlined className='icon' style={{color:"crimson", backgroundColor:"rgba(255, 0, 0, 0.2)"}}/>
            }            
            break;
            case "order":
            data = {
                title: "ORDERS",
                link: "View all orders",
                isMoney: false,
                icon: <ShoppingCartOutlined className='icon' style={{color:"goldenrod", backgroundColor:"rgba(218, 165, 32, 0.2)"}}/>
            }            
            break;
            case "earnings":
            data = {
                title: "EARNINGS",
                link: "View net earnings",
                isMoney: true,
                icon: <MonetizationOnOutlined className='icon' style={{color:"green", backgroundColor:"rgba(0, 128, 0, 0.2)"}}/>
            }            
            break;
            case "balance":
            data = {
                title: "BALANCE",
                link: "See details",
                isMoney: true,
                icon: <AccountBalanceWalletOutlined className='icon' style={{color:"purple", backgroundColor:"rgba(128, 0, 128, 0.2)"}}/>
            }            
            break;       
        default:
            break;
    }

  return (
    <>
    <div className="widget">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">
                {data.isMoney && "$"} {amount}
            </span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage pos">
                <KeyboardArrowUp/> {diff} %
            </div>
            {data.icon}
        </div>
    </div>
    </>
  )
}

export default Widget