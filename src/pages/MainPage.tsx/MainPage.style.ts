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
  justify-content: space-around;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 3rem;
`;

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25%;
  height: auto;
  visibility: hidden;

  animation: ${slideInImage} 1s ease forwards;
  animation-delay: 1.5s;

  /* :hover {
    animation: ${fadeOut} 0.5s ease forwards;
  } */
`;

export const IntroImage = styled.img`
  width: 100%;
  max-width: 350px;
  height: auto;
`;

export const EasterEggText = styled.span<{ $isShow: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  font-size: 1.8rem;
  position: absolute;
  top: 2rem;
  z-index: 2;

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
  font-size: 1.6rem;
  line-height: 2.5rem;
  box-shadow: 0.1rem 0.1rem 1rem 0.25rem rgba(55, 55, 55, 0.5);
  background-color: #48da79;
  color: #fefefe;
  border-radius: 1rem;
  transition: all 0.2s ease;
`;

export const IntroText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.6vw;
  font-weight: bold;
  color: #fefefe;
  white-space: nowrap;

  box-sizing: border-box;
  padding: 0.5rem;

  line-height: 2vw;
  box-shadow: 0.1rem 0.1rem 1rem 0.25rem rgba(55, 55, 55, 0.3);
  background-color: #48da79;
  border-radius: 1rem;
`;
