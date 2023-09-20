import React, { useState } from 'react';
import styled from 'styled-components';

const Search = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    // Function to handle the search terms
    const handleSearch = () => {
        if (searchTerm.length >= 3) {
            onSearch(searchTerm);
        } else if (searchTerm.length === 0) {
            onSearch(searchTerm);
        }
    };

    return (
        <Wrapper>
            <InputBox>
                {/* Input field for search usernames */}
                <Input
                    type="text"
                    placeholder="Search Gists for the username"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyUp={handleSearch}
                />
            </InputBox>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  padding: 8px;
  background-color: #ffffff;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 6px;
  margin: 0 16px;
  box-sizing:border-box;
  
  @media (max-width: 768px) {
    width: 100%;
    margin: 0px;
  }
`;

const InputBox = styled.div`
  border-radius: 4px;
  display: flex;
  width: 400px;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Input = styled.input`
  border: none;
  width: 100%;
  font-size: 16px;
  padding: 8px;
  border-radius: 4px 4px;

  &:focus {
    outline: 0;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 5px;
  }
`;

export default Search;



