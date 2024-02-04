import React, { useState } from "react";
import { Header, HeaderTitle, Ul, Li } from "style/headerStyle";

function Home() {
  const [selectedButton, setSelectedButton] = useState(1);

  const buttonClicked = (i) => {
    setSelectedButton(i);
  };

  return (
    <div>
      <Header>
        <HeaderTitle>뭐뭐 시기 펜레터</HeaderTitle>
        <Ul>
          <Li onClick={() => buttonClicked(1)} selected={selectedButton === 1}>
            1번마
          </Li>
          <Li onClick={() => buttonClicked(2)} selected={selectedButton === 2}>
            2번마
          </Li>
          <Li onClick={() => buttonClicked(3)} selected={selectedButton === 3}>
            3번마
          </Li>
          <Li onClick={() => buttonClicked(4)} selected={selectedButton === 4}>
            4번마
          </Li>
        </Ul>
      </Header>
    </div>
  );
}

export default Home;
