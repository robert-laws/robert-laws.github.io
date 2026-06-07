import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <p className="section-kicker">404</p>
      <h1>Page not found</h1>
      <p>The page you are looking for is not part of the current portfolio.</p>
      <Link className="button button--primary" href="/">
        Return home
      </Link>
    </main>
  );
}
