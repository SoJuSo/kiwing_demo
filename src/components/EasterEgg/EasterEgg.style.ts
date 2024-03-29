import styled, { css, keyframes } from "styled-components";

export const RainyEffect = keyframes`
    from { opacity: 0; }
    50% { opacity: 1; }
    to { transform: translateY(350px); }
`;

export const EasterEggContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 90%;
  top: 0;
  overflow: hidden;
  z-index: 7;
`;

export const EasterEggPiece = styled.div`
  position: absolute;
  width: 10px;
  height: 30px;
  background: #ffd300;
  top: 0;
  opacity: 0;

  &:nth-child(odd) {
    background: #7431e8;
  }

  &:nth-child(even) {
    z-index: 1;
  }

  &:nth-child(4n) {
    width: 5px;
    height: 12px;
    animation-duration: 2000ms;
  }

  &:nth-child(3n) {
    width: 3px;
    height: 10px;
    animation-duration: 2500ms;
    animation-delay: 1000ms;
  }

  &:nth-child(4n-7) {
    background: red;
  }
`;

export const AnimatedEasterEggPiece = styled(EasterEggPiece)<{
  $left: string;
  $rotate: string;
  $delay: number;
  $duration: number;
}>`
  ${({ $left, $rotate, $delay, $duration }) => css`
    left: ${$left};
    transform: rotate(${$rotate});
    animation: ${RainyEffect} ${$duration}ms infinite ease-out;
    animation-delay: ${$delay}ms;
  `}
`;
