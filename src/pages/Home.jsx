import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Header,
  HeaderTitle,
  Ul,
  Li,
  FanCards,
  FanCardContainer,
  FanCard,
  FanCardTitleTime,
  CardComment,
  Form,
  Container,
  FormTitleInput,
  FormInput,
  FormInput2,
  FormButtonContainer,
} from "style/headerStyle";

function Home() {
  const [selectedButton, setSelectedButton] = useState(1);
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");
  const [selectedArtist, setSelectedArtist] = useState("카리나");
  const [letters, setLetters] = useState([]);

  const navigate = useNavigate();

  const buttonClicked = (i) => {
    setSelectedButton(i);
  };

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleArtistChange = (e) => {
    setSelectedArtist(e.target.value);
  };

  const handleLetterSubmit = (e) => {
    e.preventDefault();

    if (!nickname || !content) {
      alert("닉네임과 내용을 입력해주세요.");
      return;
    }

    const newLetter = {
      createdAt: new Date().toISOString(),
      nickname,
      content,
      writedTo: selectedArtist,
      id: letters.length + 1,
    };

    console.log("New Letter:", newLetter);

    setLetters((prevLetters) => [...prevLetters, newLetter]);
    setNickname("");
    setContent("");
  };

  const filteredData = letters.filter(
    (letter) =>
      (letter.writedTo === "카리나" && selectedButton === 1) ||
      (letter.writedTo === "윈터" && selectedButton === 2) ||
      (letter.writedTo === "닝닝" && selectedButton === 3) ||
      (letter.writedTo === "지젤" && selectedButton === 4)
  );

  const handleLetterClick = (letterId) => {
    navigate(`/letter/${letterId}`);
  };

  return (
    <Container>
      <Header>
        <HeaderTitle>에스파 펜레터</HeaderTitle>
        <Ul>
          <Li onClick={() => buttonClicked(1)} selected={selectedButton === 1}>
            카리나
          </Li>
          <Li onClick={() => buttonClicked(2)} selected={selectedButton === 2}>
            윈터
          </Li>
          <Li onClick={() => buttonClicked(3)} selected={selectedButton === 3}>
            닝닝
          </Li>
          <Li onClick={() => buttonClicked(4)} selected={selectedButton === 4}>
            지젤
          </Li>
        </Ul>
      </Header>

      <Form>
        <FormTitleInput>
          <p>닉네임 :&nbsp;</p>
          <FormInput
            placeholder="최대 20자까지 작성할 수 있습니다."
            maxLength="20"
            value={nickname}
            onChange={handleNicknameChange}
          ></FormInput>
        </FormTitleInput>
        <FormTitleInput>
          <p>내용 :&nbsp;</p>
          <FormInput2
            placeholder="최대 100자까지 작성할 수 있습니다."
            maxLength="100"
            value={content}
            onChange={handleContentChange}
          ></FormInput2>
        </FormTitleInput>
        <FormTitleInput>
          <p>누구에게 보내실 건가요?</p>
          <select value={selectedArtist} onChange={handleArtistChange}>
            <option value="카리나">카리나</option>
            <option value="윈터">윈터</option>
            <option value="닝닝">닝닝</option>
            <option value="지젤">지젤</option>
          </select>
        </FormTitleInput>
        <FormButtonContainer>
          <button onClick={handleLetterSubmit}>팬레터 등록</button>
        </FormButtonContainer>
      </Form>

      <FanCardContainer>
        <FanCards>
          {filteredData.map((letter) => (
            <FanCard
              key={letter.id}
              onClick={() => handleLetterClick(letter.id)}
            >
              <FanCardTitleTime>
                <p>{letter.nickname}</p>
                <time>{letter.createdAt}</time>
              </FanCardTitleTime>
              <CardComment>
                {letter.content.length > 50
                  ? `${letter.content.slice(0, 50)}...`
                  : letter.content}
              </CardComment>
            </FanCard>
          ))}
        </FanCards>
      </FanCardContainer>
    </Container>
  );
}

export default Home;
