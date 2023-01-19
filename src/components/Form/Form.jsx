import { Container } from 'components/App/App.styled';
import { SearchForm, InputForm, BtnSubmit } from './Form.styled';
import { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = e => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(searchQuery);
    setSearchQuery('');
  };

  return (
    <Container>
      <SearchForm onSubmit={handleSubmit}>
        <InputForm
          type="text"
          name="value"
          value={searchQuery}
          onChange={handleChange}
          placeholder="enter movies name"
        />
        <BtnSubmit type="submit" disabled={searchQuery.trim() === ''}>
          Search
        </BtnSubmit>
      </SearchForm>
    </Container>
  );
};

export default Form;
