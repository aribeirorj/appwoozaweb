import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  margin: 50px auto;
  padding: 10px;

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    -webkit-column-gap: 40px;
    grid-row-gap: 20px;
    margin-top: 30px;
    list-style: none;
  }
`;

export const List = styled.div`
  padding: 20px;
  background: #fff;
  align-items: center;
  border-radius: 10px;
`;

export const Avatar = styled.img`
  border-radius: 40px;
  background: #eee;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
`;

export const Name = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  font-size: 20px;
  padding: 10px;
`;

export const Position = styled.div`
  text-align: center;
`;
