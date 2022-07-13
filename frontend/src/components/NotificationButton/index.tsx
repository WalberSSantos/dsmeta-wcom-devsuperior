import notificationicon from '../../assets/img/notification-icon.svg';
import './style.css'

function NotificationButton() {
    return (
        <div className="dsmeta-red-btn">
            <img src={notificationicon} alt="Notificação"/>
        </div>
    )
}
export default NotificationButton;