/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import {
  ImageContainer,
  ImageSummary,
  ImageWrap,
  ReplaceImage,
  TextTitleContainer,
  TextBodyContainer,
} from "./ImageLayout.style";

interface LayoutProps {
  src: string;
  delay: number;
  alt: string;
}

const ImageLayout = ({ src, delay, alt }: LayoutProps) => {
  const [isImageClicked, setIsImageClicked] = useState(false);
  const handleClick = () => {
    setIsImageClicked(!isImageClicked);
  };
  return (
    <ImageContainer $delay={delay}>
      {!isImageClicked ? (
        <ImageWrap onClick={handleClick} src={src} alt={alt} />
      ) : (
        <ReplaceImage onClick={handleClick}>
          <TextTitleContainer>{"📄" + alt}</TextTitleContainer>
          {alt === "메인 페이지" && (
            <>
              <TextBodyContainer>
                📍사용자는 메인 페이지에서 내 정보를 관리할 수 있습니다.
              </TextBodyContainer>
              <TextBodyContainer>
                📍사용자는 최근 등록된 질문과 최근 공유된 꾸러미를 확인할 수 있습니다.
              </TextBodyContainer>
              <TextBodyContainer>
                📍사용자는 해당 질문이나 꾸러미를 확인하거나 나의 리스트에 추가할 수도 있습니다.
              </TextBodyContainer>
              <TextBodyContainer>
                📍사용자는 라우팅 기능을 이용하여 다른 페이지로 이동할 수 있습니다.
              </TextBodyContainer>
            </>
          )}
          {alt === "내 꾸러미 페이지" && (
            <>
              <TextBodyContainer>
                📍사용자는 내 꾸러미 페이지에서 내 꾸러미들을 관리할 수 있습니다.
              </TextBodyContainer>
              <TextBodyContainer>📍사용자는 새로운 꾸러미를 추가할 수 있습니다.</TextBodyContainer>
              <TextBodyContainer>
                📍사용자는 꾸러미의 공개 여부 설정, 링크 복사, 꾸러미 삭제, 꾸러미 수정을 진행할 수
                있습니다.
              </TextBodyContainer>
              <TextBodyContainer>
                📍사용자는 꾸러미 내부에 질문을 답변 공개 여부 설정 추가, 삭제, 수정할 수 있습니다.
              </TextBodyContainer>
            </>
          )}
          {alt === "공유된 꾸러미 페이지" && (
            <>
              <TextBodyContainer>
                📍사용자는 공유된 꾸러미 페이지에서 공유된 꾸러미들을 확인할 수 있습니다.
              </TextBodyContainer>
              <TextBodyContainer>📍사용자는 공유된 꾸러미를 확인할 수 있습니다.</TextBodyContainer>
              <TextBodyContainer>
                📍사용자는 공유된 꾸러미의 질문들과 공개된 답변을 확인할 수 있습니다.
              </TextBodyContainer>
              <TextBodyContainer>
                📍사용자는 공유된 꾸러미의 질문을 가져올 수 있습니다.
              </TextBodyContainer>
              <TextBodyContainer>
                📍사용자는 공유된 꾸러미의 URL을 복사할 수 있습니다.
              </TextBodyContainer>
            </>
          )}
        </ReplaceImage>
      )}
      <ImageSummary>
        <div>{alt}</div>
      </ImageSummary>
    </ImageContainer>
  );
};

export default ImageLayout;
