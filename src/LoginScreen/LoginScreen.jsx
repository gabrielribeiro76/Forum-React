import React, { useState } from 'react';
import styles from './LoginScreen.module.css';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    if (!email || !username || !password) {
      setError('Por favor, preencha todos os campos.');
      return;
    }
    if (email === 'example@example.com' && username === 'user' && password === 'password') {
      alert('Login bem-sucedido');
      // redirecionar o usuário para a próxima página ou fazer outras operações após o login
    } else {
      setError('Credenciais inválidas. Por favor, tente novamente.');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="email">Email:</label>
          <input
            className={styles.inputField}
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="username">Username:</label>
          <input
            className={styles.inputField}
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="password">Password:</label>
          <input
            className={styles.inputField}
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.button}>Login</button>
      </form>
      <p>Ou</p>
      <button className={styles.button}>Continuar como convidado</button>
    </div>
  );
};

export default LoginScreen;