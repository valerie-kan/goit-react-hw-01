import FriendListItem from '../FriendListItem/FriendListItem'
import css from './FriendList.module.css'

export function FriendList ({ friends }) {
    return (
        <ul className={css.friendsList}>{friends.map(friend => {
            return (
            <li className={css.friendsItem} key={friend.id} >
                <FriendListItem
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                />
            </li>
            )}
        )}
    </ul>
    )
}

