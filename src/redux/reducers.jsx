// reducers.js
const initialState = {
    loggedIn: false,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        const { username, password } = action.payload;
        if (username === 'usuarioTeste' && password === 'senhaTeste') {
          return { loggedIn: true };
        }
        return state;
      default:
        return state;
    }
  };
  
  export default authReducer;