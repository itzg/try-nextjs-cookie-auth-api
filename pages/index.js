function Home() {

  function login() {
    window.location = '/login';
  }

  return (
      <div>

        Welcome to Next.js!

        <div>
          <button onClick={login}>Login</button>
        </div>
      </div>
  )
}

export default Home