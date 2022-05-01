import s from './Nav.module.css';
export default function MoviesPage() {
  return (
    <>
      <form>
        <label>
          <input className={s.inputSearch} type="email" name="email" />
        </label>
        <button type="button">Search</button>
      </form>
    </>
  );
}
