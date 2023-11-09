import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { login } from '../redux/actions';
import { useHistory } from 'react-router-dom';
import { Button, Container, TextField, Typography, Paper, Grid } from '@mui/material';
import { Redirect } from 'react-router-dom';

const styles = {
  container: {
    background: 'linear-gradient(45deg, #FFA500, #FF6347)',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: {
    padding: '2rem',
    borderRadius: '10px',
    background: 'white',
  },
  header: {
    color: 'orange',
    marginBottom: '1.5rem',
  },
  textField: {
    width: '100%',
    marginBottom: '1rem',
  },
  button: {
    backgroundColor: 'orange',
    color: 'white',
    '&:hover': {
      backgroundColor: '#FF8C00',
    },
  },
};

function Login({ loggedIn, login }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const [redirectToHome, setRedirectToHome] = useState(false);

  const handleLogin = () => {
    if (username === 'usuarioTeste' && password === 'senhaTeste') {
      login(username, password);
      setRedirectToHome(true);
    } else {
      alert('Usuário ou senha incorretos');
    }
  }

  useEffect(() => {
    if (loggedIn) {
      history.push('/home');
    }
  }, [loggedIn, history]);

  return (
    <Container maxWidth="xs" style={styles.container}>
      {redirectToHome ? (
        <Redirect to="/home" />
      ) : (
        <Paper elevation={3} style={styles.paper}>
          <Grid container direction="column" alignItems="center">
            <Typography variant="h4" style={styles.header}>
              Login
            </Typography>
            <TextField
              label="Usuário"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={styles.textField}
            />
            <TextField
              label="Senha"
              type="password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.textField}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleLogin}
              style={styles.button}
            >
              Login
            </Button>
          </Grid>
        </Paper>
      )}
    </Container>
  );
}

const mapStateToProps = (state) => ({
  loggedIn: state.auth.loggedIn,
});

const mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
