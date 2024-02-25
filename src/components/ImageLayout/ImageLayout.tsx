/* eslint-disable @typescript-eslint/no-unused-vars */
import { ImageContainer, ImageSummary, ImageWrap } from "./ImageLayout.style";

interface LayoutProps {
  src: string;
  delay: number;
  alt: string;
}

const ImageLayout = ({ src, delay, alt }: LayoutProps) => {
  return (
    <ImageContainer $delay={delay}>
      <ImageWrap src={src} alt={alt} />
      <ImageSummary>
        <div>{alt}</div>
      </ImageSummary>
    </ImageContainer>
  );
};

export default ImageLayout;
