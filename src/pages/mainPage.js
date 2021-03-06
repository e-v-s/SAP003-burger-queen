import React from 'react';
import { Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  link: {
    color: '#0166B3',
    textDecoration: 'none',
    textTransform: 'uppercase',
    width: '300px',
    textAlign: 'center',
    padding: '10px',
    backgroundColor: '#FEBB3E',
    borderRadius: '4px',
    fontSize: '40px',
    marginTop: '20px',
    cursor: 'pointer',
    fontFamily: "'Fjalla One', sans-serif"
  },
  flex: {
    display: 'flex',
    height: '300px',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ED3936',
    width: '500px',
    margin: '0 auto',
  }
});

export default function MainPage() {
  return (
    <div className={css(styles.flex)}>
      <Link to={'/menu'} className={css(styles.link)}>Salão</Link>
      <Link to={'/kitchen'} className={css(styles.link)}>Cozinha</Link>
    </div>
  )
};
