import cookies from 'next-cookies';
import Links from '../components/Links';

function About({ code }) {
  return (
      <div>
        <h1>About</h1>

        { code && <div>Your code is {code}</div>}

        <Links/>
      </div>
  );
}

About.getInitialProps = async (ctx) => {
  const {code} = cookies(ctx);
  return {
    code
  }
};

export default About;