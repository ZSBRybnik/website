import React, {
  FC,
  useState,
  Dispatch,
  SetStateAction,
  DetailedHTMLProps,
  ImgHTMLAttributes,
} from "react";
import ImageFigure from "./ImageFigure";
import ImageWrapper from "./ImageWrapper";
import ImageFigcaption from "./ImageFigcaption";

interface ImageProps
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  fallback?: string | string[];
  text?: string;
  alt: string;
  src: string;
}

type ImageSrcDispatcher = [string, Dispatch<SetStateAction<string>>];
type ArraySourcesCounterDispatcher = [number, Dispatch<SetStateAction<number>>];

const Image: FC<ImageProps> = ({
  src,
  alt,
  text,
  fallback,
}: ImageProps): JSX.Element => {
  const [
    arraySourcesCounter,
    setArraySourcesCounter,
  ]: ArraySourcesCounterDispatcher = useState(0);
  const [imageSrc, setImageSrc]: ImageSrcDispatcher = useState(src);
  const setFallbackImage = (): void => {
    if (fallback) {
      const isFallbackArray: boolean = Array.isArray(fallback);
      const fallbackArrayLength = fallback.length;
      if (isFallbackArray) {
        if (fallbackArrayLength - 1 > arraySourcesCounter) {
          setArraySourcesCounter(arraySourcesCounter + 1);
        }
      }
      setImageSrc(
        isFallbackArray ? fallback[arraySourcesCounter] : (fallback as string)
      );
    }
  };
  return (
    <ImageFigure>
      <ImageWrapper onError={setFallbackImage} src={imageSrc} alt={alt} />
      {text && <ImageFigcaption>{text}</ImageFigcaption>}
    </ImageFigure>
  );
};

export default Image;
