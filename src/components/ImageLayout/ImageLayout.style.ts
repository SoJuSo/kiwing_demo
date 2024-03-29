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

export const ImageContainer = styled.div<{ $delay: number }>`
  position: relative;
  user-select: none;
  transform: translateY(20%);
  animation: ${slideIn} ${({ $delay }) => `${$delay}ms`} ease forwards;
  width: 20%;
  max-width: 300px;
  z-index: 1;

  :hover {
    transition: all 0.3s ease;
    transform: scale(1.2);
    @media (max-width: 1500px) {
      transform: scale(1.3); /* 원하는 크기로 조정합니다. */
    }
  }
  :not(:hover) {
    transition: all 0.3s ease;
  }
`;

export const ImageWrap = styled.img`
  width: 100%;
  height: auto;

  object-fit: contain;
`;

export const ReplaceImage = styled.div`
  width: 100%;
  height: auto;
  backdrop-filter: 1.2px;
  background-color: #009c4dfc;
  border-radius: 1vw;
  padding: 1rem;
  box-sizing: border-box;
  aspect-ratio: 3385 / 6992;
`;

export const ImageSummary = styled.div`
  position: absolute;
  z-index: -1;
  box-sizing: border-box;
  font-size: 1.3vw;
  font-weight: bold;
  padding: 1vw 0.1vw;
  display: flex;
  width: 100%;
  justify-content: center;

  pointer-events: none;

  div {
    padding: 1vw;
    box-shadow: 0.1rem 0.1rem 1rem 0.25rem rgba(55, 55, 55, 0.5);
    background-clip: border-box;
    background-color: #48da79;
    color: #fefefe;
    border-radius: 1rem;
  }
`;

export const TextTitleContainer = styled.div`
  color: #fefefe;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2vw;
  margin-bottom: 1vw;

  pointer-events: none;
  font-weight: 700;
`;

export const TextBodyContainer = styled.p`
  color: #eaeaea;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1vw;
  margin-bottom: 1vw;
  pointer-events: none;
  font-weight: 550;
  line-height: normal;
`;
