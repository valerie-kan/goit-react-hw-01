import css from './Profile.module.css';

export default function Profile({ name, tag, image, location, stats}) {
    return (
<div className={css.userProfile}>
  <div>
    <img className={css.userImg}
      src={image}
      alt={name}
    />
    <p className={css.userName}>{name}</p>
    <p>@{tag}</p>
    <p>{location}</p>
  </div>

  <ul className={css.userStatsList}>
    <li className={css.userStatsItem}>
      <span>Followers</span>
      <span className={css.statsInfo}>{stats.followers}</span>
    </li>
    <li className={css.userStatsItem}>
      <span>Views</span>
      <span className={css.statsInfo}>{stats.views}</span>
    </li>
    <li className={css.userStatsItem}>
      <span>Likes</span>
      <span className={css.statsInfo}>{stats.likes}</span>
    </li>
  </ul>
</div>
    ) 
}