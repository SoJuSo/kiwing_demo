import { useState } from "react";
import ImageLayout from "../../components/ImageLayout";
import {
  EasterEggText,
  Intro,
  IntroImage,
  IntroText,
  Layout,
  PTagText,
  TextWrap,
} from "./MainPage.style";
import EasterEgg from "../../components/EasterEgg";

const MainPage = () => {
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const handleLogoClick = () => {
    setShowEasterEgg(true);
    setTimeout(() => {
      setShowEasterEgg(false);
    }, 5000);
  };

  return (
    <>
      <EasterEggText $isShow={showEasterEgg}>
        <TextWrap>
          <PTagText>키윙 이스터 에그를 찾으셨네요!</PTagText>
          <PTagText>키윙은 여러분의 멋진 삶을 응원합니다.</PTagText>
        </TextWrap>
      </EasterEggText>

      {showEasterEgg && <EasterEgg />}
      <Layout>
        <ImageLayout src="/kiwing_demo_main.png" delay={700} alt="메인 페이지" />
        <ImageLayout src="/kiwing_demo_myList.png" delay={1400} alt="내 꾸러미 페이지" />
        <ImageLayout src="/kiwing_demo_shared.png" delay={2000} alt="공유된 꾸러미 페이지" />

        <Intro>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}
          >
            <IntroImage
              src="/kiwing_circle_green.png"
              alt="키윙 로고 이미지 데모"
              onClick={handleLogoClick}
            />
            <IntroText>
              <p>당신의 면접에 날개를, 키윙</p>
              <p>면접 준비를 더 편하고 더 빠르게</p>
            </IntroText>
          </div>
        </Intro>
      </Layout>
    </>
  );
};

export default MainPage;
