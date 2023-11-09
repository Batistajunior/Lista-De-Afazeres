// redux/actions.js

// Esta é a ação de login. Você pode adicionar sua lógica de autenticação aqui.
export const login = (username, password) => {
    // Exemplo simplificado de lógica de autenticação (substitua pelo seu próprio código).
    if (username === 'usuarioTeste' && password === 'senhaTeste') {
      // Autenticação bem-sucedida
      return {
        type: 'LOGIN_SUCCESS',
        payload: { username }, // Você pode adicionar mais informações do usuário se desejar
      };
    } else {
      // Autenticação falhou
      return {
        type: 'LOGIN_FAILURE',
        payload: 'Credenciais inválidas',
      };
    }
  };
  
  export const someAction = () => {
    return {
      type: 'SOME_ACTION',
      payload: 'some data',
    };
  };
  