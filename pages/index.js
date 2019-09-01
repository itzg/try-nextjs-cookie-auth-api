import cookies from 'next-cookies';
import Links from '../components/Links';

function Home({code, loggedIn}) {

  function login() {
    window.location = '/login';
  }

  function logout() {
    window.location = '/logout';
  }

  return (
      <div>

        <h1>Home</h1>

        {loggedIn ?
            <div>
              <div>Your code is {code}</div>
              <button onClick={logout}>Logout</button>
            </div>
            :
            <div>
              <button onClick={login}>Login</button>
            </div>
        }

        <Links/>
      </div>
  )
}

Home.getInitialProps = async (ctx) => {
  const {code} = cookies(ctx);
  return {
    code,
    loggedIn: !!code
  }
};

export default Home