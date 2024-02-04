import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`;

export const Box = styled.div`
  background-color: gray;
  width: 800px;
  height: 500px;
  padding: 30px;
`;

export const BoxName = styled.p`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const BoxTime = styled.time`
  font-size: 20px;
  font-weight: bold;
`;

export const BoxContent = styled.div`
  width: auto;
  height: 300px;
  border-radius: 20px;
  background-color: white;
  padding: 20px;
  font-size: 20px;
  line-height: 40px;
  margin-top: 10px;
`;

export const BoxButtons = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 20px;
  padding: 20px;
`;

export const Button = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 10px;
  font-size: 20px;
`;

export const HomeButton = styled.button`
  width: 80px;
  height: 40px;
  margin: 10px 0 -30px 10px;
`;
