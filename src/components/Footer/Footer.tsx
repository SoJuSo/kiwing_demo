import styled from "styled-components";

// Styled-components를 사용하여 Footer 스타일 정의
const FooterContainer = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 0.75rem;
  width: auto;
  background-color: transparent;
  color: #dcdcdc;
  padding: 5px;
  margin: 1px;
  text-align: center;
`;

// Footer 컴포넌트 정의
const Footer = () => {
  return <FooterContainer>Copyright 2024. Team 삼시세코 All Rights Reserved</FooterContainer>;
};

export default Footer;
