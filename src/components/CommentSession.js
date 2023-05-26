import { useState, useEffect } from 'react';
import './CommentSession.css';
import MyPhoto from '../imgs/MyPhoto';
import ProfileUser from './ProfileUser';
import { BsSend } from 'react-icons/bs';

const CommentSession = ({ userVal, setGetUserVal, storeYourCommentHandler }) => { 

  const users = [
    {
      id: 1,
      user: 'Henry',
      comment: 'So beautiful',
      image: MyPhoto.image_3
    },

    {
      id: 2,
      user: 'Richard',
      comment: 'Wonderful place',
      image: MyPhoto.image_4
    },

    {
      id: 3,
      user: 'Maria',
      comment: `That's a masterpiece!!!`,
      image: MyPhoto.image_5
    },

    {
        id: 4,
        user: 'Laura',
        comment: `I wanna climb this mountain!`,
        image: MyPhoto.image_6
    },

    {
        id: 5,
        user: 'Ingrid',
        comment: `Such a great view!`,
        image: MyPhoto.image_7
    },

    {
      id: 6,
      user: 'Scott',
      comment: `Such a great view!`,
      image: MyPhoto.image_9
    },
  ];
  
      console.log(userVal);

      const getYourCommentHandler = (event) => {
        setGetUserVal(event.target.value);
      };

    return (
        <div className='comment__session'>
            {users.map(vals => {
                return <ProfileUser key={vals.id} userPicture={vals.image} comment={vals.comment} name={vals.user}/>
            })}
            {userVal.map(vals => {
              return <ProfileUser key={vals.id} userPicture={vals.image} comment={vals.comment} name={vals.user}/>
            })}
            
            <div className='input__div'>
            <input onChange={getYourCommentHandler} type='text' placeholder='write a comment . . .'/>
            <BsSend onClick={() => storeYourCommentHandler()} style={{ cursor: 'pointer', fontSize: '20px', margin: '0 5px'}}/>
            </div>
        </div>
    );
};

export default CommentSession;