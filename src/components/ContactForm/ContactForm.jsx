import { useState } from 'react';
import css from './ContactForm.module.css';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'phone') {
      setPhone(value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(name, phone);
    setName('');
    setPhone('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.formLabel} htmlFor="nameField">
        Name
      </label>
      <input
        className={css.formInput}
        id="nameField"
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        placeholder="Name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required
      />
      <label className={css.formLabel} htmlFor="phoneField">
        Number
      </label>
      <input
        className={css.formInput}
        id="phoneField"
        type="tel"
        name="phone"
        value={phone}
        onChange={handleChange}
        placeholder="Phone Number"
        pattern="\+?\d{1,4}?[ .\\-\\s]?\(?\d{1,3}?\)?[ .\\-\\s]?\d{1,4}[ .\\-\\s]?\d{1,4}[ .\\-\\s]?\d{1,9}"
        required
      />
      <button className={css.formBtn} type="submit">
        Add contact
      </button>
    </form>
  );
};