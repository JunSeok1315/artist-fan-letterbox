import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.header`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  margin-bottom: 20px;
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
  background-color: blanchedalmond;
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

export const FanCardContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const FanCards = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: beige;
  width: 500px;
  border-radius: 10px;
  padding: 20px;
  gap: 10px;
`;

export const FanCard = styled.li`
  background-color: blanchedalmond;
  display: flex;
  flex-direction: column;
  width: 450px;
  height: 100px;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
`;

export const FanCardTitleTime = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  margin-bottom: 10px;
`;

export const CardComment = styled.p`
  background-color: #d89191;
  border-radius: 10px;
  padding: 5px;
`;

export const Form = styled.form`
  background-color: beige;
  width: 500px;
  height: auto;
  margin-bottom: 20px;
  border-radius: 10px;
  padding: 20px;
`;

export const FormTitleInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const FormInput = styled.input`
  width: 350px;
  height: 30px;
`;

export const FormInput2 = styled.input`
  width: 350px;
  height: 100px;
`;

export const FormButtonContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;
