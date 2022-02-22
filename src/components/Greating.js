import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMessage } from '../redux/messages/messages';

const Greeting = () => {
  const message = useSelector((state) => state.messagesReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMessage());
  }, []);

  return (
    <div>
      <h1>
        {message.content}
      </h1>
    </div>
  );
};

export default Greeting;
