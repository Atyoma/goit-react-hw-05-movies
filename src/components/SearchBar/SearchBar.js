import { useState } from 'react';
import s from '../../Pages/Nav.module.css';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Searchbar({ onSubmit }) {
  const [filmRequest, setFilmRequest] = useState('');

  const handleInputChange = event => {
    setFilmRequest(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (filmRequest.trim() === '') {
      toast.warning('Please enter search name');
      return;
    }

    onSubmit(filmRequest);
    setFilmRequest('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={s.inputSearch}
        type="text"
        placeholder="Enter search movies..."
        autoComplete="off"
        autoFocus
        value={filmRequest}
        onChange={handleInputChange}
      />
      <button type="submit" className={s.btnSearch}>
        <span>
          {' '}
          <ImSearch /> search
        </span>
      </button>
    </form>
  );
}

export default Searchbar;
