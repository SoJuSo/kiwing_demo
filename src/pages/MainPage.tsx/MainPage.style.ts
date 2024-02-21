import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    transform: translateY(20%);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  to {
    transform: translateY(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  to {
    transform: translateY(20%);
  }
`;

const slideInImage = keyframes`
from {
  transform: translateY(20%);
  opacity: 0;
  visibility: hidden;
}
50% {
  opacity: 0.8;
  visibility: visible;
}
to {
  transform: translateY(0);
  opacity: 1;
  visibility: visible;
}
`;
const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  gap: 3rem;
  box-sizing: border-box;
  padding: 2rem 0 1rem 0;
`;

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 4rem;
  align-items: center;
  justify-content: center;
  width: 28rem;
  height: 40rem;
  visibility: hidden;

  animation: ${slideInImage} 1s ease forwards;
  animation-delay: 1.5s;

  /* :hover {
    animation: ${fadeOut} 0.5s ease forwards;
  } */
`;

export const IntroImage = styled.img`
  width: 25rem;
  height: auto;
  margin: 1rem;
`;

export const EasterEggText = styled.span<{ $isShow: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.8rem;
  position: absolute;
  top: 2rem;

  visibility: ${({ $isShow }) => ($isShow ? "visible" : "hidden")};
  transform: translateY(20%);
  animation: ${({ $isShow }) => ($isShow ? slideIn : slideOut)} 0.5s ease forwards;
`;

export const PTagText = styled.p`
  display: flex;
  justify-content: center;
  white-space: pre-wrap;
  font-weight: 450;
`;

export const TextWrap = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 0.5rem;
  flex-direction: column;
  align-items: center;
  font-size: 2rem;
  line-height: 2.5rem;
  box-shadow: 0.1rem 0.1rem 1rem 0.25rem rgba(55, 55, 55, 0.5);
  background-color: #48da79;
  color: #fefefe;
  backdrop-filter: 1rem;
  border-radius: 1rem;
  transition: all 0.2s ease;
`;

export const IntroText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  font-weight: bold;
  color: #fefefe;

  box-sizing: border-box;
  padding: 0.5rem;

  line-height: 2rem;
  box-shadow: 0.1rem 0.1rem 1rem 0.25rem rgba(55, 55, 55, 0.3);
  background-color: #48da79;
  border-radius: 1rem;
`;
