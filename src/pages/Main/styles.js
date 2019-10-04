import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-width: 700px;
  margin: 100px auto;
  flex-flow: row wrap;
  align-content: center;
  justify-content: center;
`;

export const List = styled.div`
  padding: 30px 10px 10px 10px;
  background: #fff;
  border-radius: 10px;
  width: 225px;
  height: 200px;
  margin: 3px;
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
  text-align: center;
  font-size: 20px;
  padding: 10px;
`;

export const Position = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: center;
`;
