import cookies from 'next-cookies';
import Links from '../components/Links';

function Home({ code }) {

  function login() {
    window.location = '/login';
  }

  return (
      <div>

        <h1>Home</h1>

        { code && <div>Your code is {code}</div>}

        <div>
          <button onClick={login}>Login</button>
        </div>

        <Links/>
      </div>
  )
}

Home.getInitialProps = async (ctx) => {
  const {code} = cookies(ctx);
  return {
    code
  }
};

export default Home