import { Link, useLocation } from 'react-router-dom';

function Todo() {
  const params = useLocation();
  console.log('params', params);

  return (
    <div>
      <h1>Todo</h1>

      <h2>
        <Link to="/">Back to Home</Link>
      </h2>
    </div>
  );
}

export default Todo;
