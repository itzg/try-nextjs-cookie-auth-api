import Link from 'next/link';

function Links() {
  return (
      <div className="root">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>

        <style jsx>{`
          .root {
            margin-top: 20px;
          }
          
          a + a {
            margin-left: 5px;
          }
        `}</style>
      </div>
  );
}

export default Links;