import React from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  BoxButtons,
  BoxContent,
  BoxName,
  BoxTime,
  Button,
  Container,
  HomeButton,
} from "style/detailStyle";

function Detail({ fakeData }) {
  const { id } = useParams();
  const letter = fakeData.find((letter) => letter.id === id);

  if (!letter) {
    return <div>해당하는 팬레터가 없습니다.</div>;
  }

  return (
    <div>
      <HomeButton>홈으로</HomeButton>
      <Container>
        <Box>
          <BoxName>{letter.nickname}</BoxName>
          <BoxTime>{letter.createdAt}</BoxTime>
          <BoxContent>
            <p>{letter.content}</p>
          </BoxContent>
          <BoxButtons>
            <Button>수정</Button>
            <Button>삭제</Button>
          </BoxButtons>
        </Box>
      </Container>
    </div>
  );
}

export default Detail;
