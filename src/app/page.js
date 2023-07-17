import React from 'react';

function Home() {
  return (
    <main className="home-palette">
      <h1>Theme palette</h1>
      <ul>
        <li>
          <div
            className="color-square"
            style={{
              backgroundColor: 'var(--color-text)',
            }}
          />{' '}
          Text
        </li>
        <li>
          <div
            className="color-square"
            style={{
              backgroundColor: 'var(--color-background)',
            }}
          />{' '}
          Background
        </li>
        <li>
          <div
            className="color-square"
            style={{
              backgroundColor: 'var(--color-primary)',
            }}
          />{' '}
          Primary
        </li>
        <li>
          <div
            className="color-square"
            style={{
              backgroundColor: 'var(--color-secondary)',
            }}
          />{' '}
          Secondary
        </li>
      </ul>
    </main>
  );
}

export default Home;
