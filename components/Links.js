import Link from 'next/link';
import {useRouter} from "next/router";

function RouterAwareLink({ href, title }) {
  const router = useRouter();

  return (
      <div className="root">

        <Link href={href}>
          { router.pathname == href ?
            <span>{title}</span> :
            <a>{title}</a>
          }
        </Link>

        {/*language=css*/}
        <style jsx>{`
          .root {
            display: inline-block;
          }
          .root + .root {
            margin-left: 5px;
          }
        `}</style>
      </div>
  )
}

function Links() {
  return (
      <div className="root">
        <RouterAwareLink href="/" title="Home"/>
        <RouterAwareLink href="/about" title="About"/>

        {/*language=css*/}
        <style jsx>{`
          .root {
            margin-top: 20px;
          }
        `}</style>
      </div>
  );
}

export default Links;