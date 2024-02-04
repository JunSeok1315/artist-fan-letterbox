import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 300px;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
`;

export const HeaderTitle = styled.h1`
  font-size: 50px;
  font-weight: bold;
  margin-top: 80px;
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: aqua;
  border-radius: 10px;
  width: 500px;
  height: 70px;
`;

export const Li = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  border-radius: 10px;
  background-color: ${(props) => (props.selected ? "gray" : "white")};
  cursor: pointer;
`;
