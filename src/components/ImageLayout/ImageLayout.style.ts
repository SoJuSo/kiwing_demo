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
  transform: translateY(20%);
  animation: ${slideIn} ${({ $delay }) => `${$delay}ms`} ease forwards;
  width: 20rem;

  :hover {
    transition: all 0.3s ease;
    transform: scale(1.1);
  }
  :not(:hover) {
    transition: all 0.3s ease;
  }
`;

export const ImageWrap = styled.img`
  width: 20rem;
  height: auto;

  object-fit: contain;
`;
