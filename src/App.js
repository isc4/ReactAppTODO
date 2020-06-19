import React from 'react';
import List from './components/List';

import ListIcon from './assets/img/listicon.svg';
import PensilIcon from './assets/img/pensil.svg';

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="board">
          <div className="board__side-bar">
            <List items={[
              {
                icon: <img src={ListIcon} alt="icon tasks list"/>,
                name: 'Все задачи'
              
              }
            ]}/>
                        <List items={[
              {
                color: 'green',
                name: 'Покупки'
              },
              {
                color: 'blue',
                name: 'Фронтенд',
                active: true
              },
              {
                color: 'pink',
                name: 'Фильмы и сериалы'
              },
              {
                color: 'teal',
                name: 'Книги'
              },
              {
                color: 'grey',
                name: 'Личное'
              },
            ]}/>
          </div>
          <div className="board__tasks">
            <div className="board__header">
              <h1>Фронтенд</h1>
              <span><img src={PensilIcon} alt=""/></span>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
