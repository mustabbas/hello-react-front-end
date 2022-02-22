const GET_MESSAGE = 'GET_MESSAGE';

const initialState = [];

export const getMessage = () => (dispatch) => {
  fetch('http://127.0.0.1:3000/messages', { headers: { 'Access-Control-Allow-Origin': '*' } })
    .then((res) => res.json())
    .then((resResponse) => dispatch({
      type: GET_MESSAGE,
      payload: resResponse,
    }));
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGE:
      return action.payload;
    default:
      return state;
  }
};

export default messagesReducer;
