import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <>
      <p>
        Sorry. We didn't find anything matching your search{``} Go to the
        <Link to="/movies">movies</Link> to refine your search
      </p>
    </>
  );
}
