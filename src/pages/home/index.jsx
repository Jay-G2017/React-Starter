import Flat from '../../components/flat';
import { withRouter, useHistory } from 'react-router-dom';

function Home() {
  const history = useHistory();
  return (
    <div>
      <h1>Hello world !</h1>
      <Flat />
      <h4>
        <a
          onClick={() =>
            history.push({ pathname: '/todo', search: '?name=hello' })
          }
          style={{
            color: 'rgb(85,26,139)',
            cursor: 'pointer',
            textDecoration: 'underline',
          }}
        >
          Go to Todo
        </a>
      </h4>
    </div>
  );
}

export default withRouter(Home);
