import MoviesItem from 'components/ImageGalleryItem/ImageGalleryItem';

export default function MoviesList({ movies }) {
  const results = movies.results;
  return (
    <ul className="list">
      {results.map(result => {
        return (
          <MoviesItem
            key={result.id}
            tags={result.tags}
            title={result.title}
            img={result.img}
            reliseData={result.reliseData}
            genres={result.genres}
          />
        );
      })}
    </ul>
  );
}
