import { useEffect, useState } from 'react';
import './App.css';
import LikeMyPhoto from './components/LikeMyPhoto';
import CommentSession from './components/CommentSession';
import MyPhoto from './imgs/MyPhoto';

function App() {
  const [openSess, setOpenSess] = useState(false);

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

  const [userVal, setUserVal] = useState([]);
  const [getUserVal, setGetUserVal] = useState('');

  const commentSessionHandler = () => {
    if (!openSess) {
        setOpenSess(true);
    } else {
        setOpenSess(false);
    }
  }

  const storeYourCommentHandler = () => {
    if (getUserVal === '') {
      alert('Please, write a comment');
    } else {
      setUserVal([...userVal, {
        id: Math.random(),
        user: 'You',
        comment: getUserVal,
        image: MyPhoto.image_8,
      }]);
    }
  }

  const saveUsers = () => {
    localStorage.setItem('users', JSON.stringify(userVal));
  };

  const saveLocalUsers = () => {
    if (localStorage.getItem('users') === null) {
      localStorage.setItem("users", JSON.stringify([]));
    } else {
      const userValue = JSON.parse(localStorage.getItem('users'));
      setUserVal(userValue);
    }
  }

  useEffect(() => {
    saveLocalUsers();
  }, []);

  useEffect(() => {
    saveUsers();
  }, [userVal]);

  return (
    <div className="app">
      <LikeMyPhoto commentSessionHandler={commentSessionHandler}/>
      {openSess ? <CommentSession storeYourCommentHandler={storeYourCommentHandler} userVal={userVal} setUserVal={setUserVal} getUserVal={getUserVal} setGetUserVal={setGetUserVal}/> : null}
    </div>
  );
}

export default App;