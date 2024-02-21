import { ImageContainer, ImageWrap } from "./ImageLayout.style";

const ImageLayout = ({ src, delay, alt }: { src: string; delay: number; alt: string }) => {
  return (
    <ImageContainer $delay={delay}>
      <ImageWrap src={src} alt={alt} />
    </ImageContainer>
  );
};

export default ImageLayout;
