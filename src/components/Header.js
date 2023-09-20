import React from 'react';
import styled from 'styled-components';
import Search from "./Search";

function Header({onSearch}) {
    return (
        <Wrapper>
            <Img src="github-icon.png" alt="" />
            {/* Include the Search component and pass the `onSearch` prop */}
            <Search onSearch={onSearch}/>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  background-color: #24292e;
  color: #ffffff;
  z-index: 32;
  padding: 16px;
  font-size: 14px;
  line-height: 1.5;
  display: flex;
  align-items: center;
  
   @media (max-width: 768px) {
    width: 100%;
  }
`;

const Img = styled.img`
  width: 30px;
  margin-right: 10px;
`;

export default Header;



