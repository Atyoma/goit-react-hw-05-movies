//=========================Hook================================

import { useState } from 'react';
import s from './searchbar.module.css';
import { ImSearch } from 'react-icons/im';
import propTypes from 'prop-types';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Searchbar({ onSubmit }) {
  const [pictureName, setPictureName] = useState(''),
    handleNameChange = e => {
      setPictureName(e.currentTarget.value.toLowerCase());
    };

  const handleSubmit = e => {
    e.preventDefault();
    if (pictureName.trim() === '') {
      toast.warning('Please enter search name'); //info    success   warning  error  default
      return;
    }
    onSubmit(pictureName);
    setPictureName('');
  };

  return (
    <header className={s.searchBar}>
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
          placeholder="Search images and photos"
          value={pictureName}
          onChange={handleNameChange}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: propTypes.func,
};

//=======================Class================================

// import { Component } from 'react';
// import s from './searchbar.module.css';
// import { ImSearch } from 'react-icons/im';
// import propTypes from 'prop-types';

// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export default class Searchbar extends Component {
//   state = {
//     pictureName: '',
//   };

//   handleNameChange = e => {
//     this.setState({ pictureName: e.currentTarget.value.toLowerCase() });
//   };

// handleSubmit = e => {
//   e.preventDefault();
// // console.log(this.state.pictureName);
// // предотвращение отпраавки пустой строки
//   if (this.state.pictureName.trim() === '') {
//     toast.warning('Please enter search name'); //info    success   warning  error  default
//     return;
//   }
//   this.props.onSubmit(this.state.pictureName);
//   this.setState({ pictureName: '' });
// };

//   render() {
//     return (
//       <header className={s.searchBar}>
//         <form onSubmit={this.handleSubmit} className={s.searchForm}>
//           <button type="submit" className={s.searchFormButton}>
//             <ImSearch />
//             <span className={s.searchFormButtonLabel}>Search</span>
//           </button>

//           <input
//             className={s.searchFormInput}
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             value={this.state.pictureName}
//             onChange={this.handleNameChange}
//           />
//         </form>
//       </header>
//     );
//   }
// }

// Searchbar.propTypes = {
//   onSubmit: propTypes.func,
// };
