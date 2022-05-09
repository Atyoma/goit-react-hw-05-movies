import { useState } from 'react';
import s from './searchbar.module.css';
import { ImSearch } from 'react-icons/im';
import propTypes from 'prop-types';
// import MoviesPage from 'Pages/MoviesPage';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Searchbar({ onSubmit }) {
  const [movieName, setMovieName] = useState(''),
    handleNameChange = e => {
      setMovieName(e.currentTarget.value.toLowerCase());
    };

  const handleSubmit = e => {
    e.preventDefault();
    if (movieName.trim() === '') {
      toast.warning('Please enter search name'); //info    success   warning  error  default
      return;
    }
    onSubmit(movieName);
    setMovieName('');
  };

  return (
    <form onSubmit={handleSubmit} className={s.searchForm}>
      <button type="submit" className={s.searchFormButton}>
        <ImSearch />
        <span className={s.searchFormButtonLabel}>Search</span>
      </button>

      <input
        className={s.searchFormInput}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies..."
        value={movieName}
        onChange={handleNameChange}
      />
    </form>
  );
}

Searchbar.propTypes = {
  onSubmit: propTypes.func,
};
