import { useState } from 'react';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { TfiCommentsSmiley } from 'react-icons/tfi';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { BsSend } from 'react-icons/bs';
import MyPhoto from '../imgs/MyPhoto';

import './LikeMyPhoto.css';

const LikeMyPhoto = ({ commentSessionHandler }) => { 
    const [like, setLike] = useState(false);
    const [counter, setCounter] = useState(20);

    const giveLike = () => {
        if (!like) {
            setLike(true);
            setCounter(counter + 1);
        } else {
            setLike(false);
            setCounter(counter - 1);
        }
    };

    const icon_styles = {
        fontSize: '25px',
        cursor: 'pointer',
        marginRight:'15px',
    };

    return (
        <div className='like__photo_wrapper'>
            <div className='user__perfil'>
                <big style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                    <img src={MyPhoto.image_2} alt='img' style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '5px'}}/>
                    SpaceGuy
                </big>
                <BiDotsHorizontalRounded style={{fontSize: '25px', cursor: 'pointer'}}/>
            </div>
            <div className='user__photo'>
                <img src={MyPhoto.image_1} alt='img'/>
            </div>
            <div className='user__options'>
                {like ? <AiFillHeart onClick={() => giveLike()} className='like__color' style={icon_styles}/> : <AiOutlineHeart onClick={() => giveLike()} style={icon_styles}/>}
                <TfiCommentsSmiley onClick={() => commentSessionHandler()} style={icon_styles}/>
                <BsSend style={icon_styles}/>
                <small style={{ marginLeft: '100px', alignSelf: 'center' }}>{`${counter} likes`}</small>
            </div>
        </div>
    );
};

export default LikeMyPhoto;