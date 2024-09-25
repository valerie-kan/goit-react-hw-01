import css from './FriendListItem.module.css'
import clsx from 'clsx'

function FriendListItem({ avatar, name, isOnline }) { 
    return (
<div>
  <img className={css.friendImg} src={avatar} alt={name} width="48" />
  <p className={css.friendName}>{name}</p>
            <p className={clsx(
                isOnline && css.isOnline,
                !isOnline && css.isOffline)}>
                {isOnline ? "Online" : "Offline"}
            </p>
</div>
    )
}

export default FriendListItem