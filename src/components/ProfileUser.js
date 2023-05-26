import './CommentSession.css';

const ProfileUser = ({ userPicture, comment, name }) => {
    return (
        <div className='user__picture'>
            <small style={{ display: 'flex', alignItems: 'center', padding: '15px' }}>
                <img src={userPicture} alt='img' style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '15px', cursor: 'pointer'}}/>
                {<b style={{ cursor: 'pointer' }}>{name}</b>}
                {<p style={{ marginLeft: '5px'}}>{comment}</p>} 
            </small>
        </div>
    );
};

export default ProfileUser;