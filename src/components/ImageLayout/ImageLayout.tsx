import { ImageContainer, ImageSummary, ImageWrap } from "./ImageLayout.style";

const ImageLayout = ({ src, delay, alt }: { src: string; delay: number; alt: string }) => {
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
