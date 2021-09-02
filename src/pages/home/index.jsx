import Flat from '../../components/flat';
import { withRouter, Link, useHistory } from 'react-router-dom';

function Home() {
  const history = useHistory();
  return (
    <div>
      <h1>Hello world !</h1>
      <Flat />
      <h2>
        <a
          onClick={() =>
            history.push({ pathname: '/todo', search: '?name=jay' })
          }
          style={{
            color: '-webkit-link',
            cursor: 'pointer',
            textDecoration: 'underline',
          }}
        >
          Go to Todo
        </a>
      </h2>
    </div>
  );
}

export default withRouter(Home);
