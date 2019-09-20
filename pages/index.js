import React from 'react';
import Head from 'next/head';
import '../static/style.scss';

const App = () => (
  <div>
    <Head>
      <title>To do</title>
      <meta name='viewport' content='initial-scale-1.0, width=device-width' />
    </Head>
    <div className='main-page'>
      <div className='section'>
        <div className='section__left'>
          <ul>
            <li>Inbox</li>
            <li>Today</li>
            <li>Upcoming</li>
            <li>Completed</li>
            <li>Trash</li>
          </ul>
        </div>
        <div className='section__right'>
          <div className='section__right__head'>
            <div className='top-navbar'><h3>My To-do list</h3></div>
            <div className='bottom-navbar'>
              <ul>
                <li><a href='#'>Todos</a></li>
                <li><a href='#'>Notes</a></li>
                <li><a href='#'>Third Item</a></li>
                <li><a href='#'>Fourth Item</a></li>
                <li><a href='#'>Fifth Item</a></li>
                <li><a href='#'>Seventh Item</a></li>
              </ul>
            </div>
          </div>
          <div className='section__right__body'>
            <h1 className='head'>Main</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default App;
