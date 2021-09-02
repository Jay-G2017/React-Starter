import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './index.less';
function Todo() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const [value, setValue] = useState('');

  return (
    <div className={styles.container}>
      <h4>
        <Link to="/">Back to Home</Link>
      </h4>

      <div className={styles.main}>
        <h1>Todo应用(Redux示范)</h1>
        <input
          className={styles.input}
          value={value}
          onChange={(e) => {
            setValue(e.currentTarget.value);
          }}
          placeholder="请输入名字"
          onKeyPress={(e) => {
            if (e.code === 'Enter') {
              const value = e.currentTarget.value;
              if (!value) return;

              dispatch({
                type: 'todo/add',
                payload: { name: e.currentTarget.value },
              });

              setValue('');
            }
          }}
        />
        <div className={styles.todoArea}>
          {todos.length > 0 ? (
            todos.map((todo, index) => (
              <div className={styles.todoRow} key={index}>
                <div style={{ marginRight: '10px' }}>{`${index + 1}.`}</div>
                <div style={{ marginRight: '10px', flex: 'auto' }}>
                  {todo.name}
                </div>
                <a
                  href="#"
                  onClick={() =>
                    dispatch({ type: 'todo/remove', payload: index })
                  }
                >
                  delete
                </a>
              </div>
            ))
          ) : (
            <div style={{ color: '#aaa' }}>
              暂无todo. 输入名字 按enter键添加
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Todo;
