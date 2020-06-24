import React from 'react';
import TodoList from './TodoList';

const App = () => {

  const style = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  }

  return(
    <div style={style}>
      <TodoList />
    </div>
  )
}

export default App;