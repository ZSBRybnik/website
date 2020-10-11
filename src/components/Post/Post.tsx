import React, {
  FC,
  useContext,
} from "react";
import { Link } from "react-router-dom";
import scrollTop from "../../other/scrollTop";
import PostWrapper from "./PostWrapper";
import PostImage from "./PostImage";
import PostTextWrapper from "./PostTextWrapper";
import PostTitle from "./PostTitle";
import PostHeader from "./PostHeader";
import GlobalContext, {
  GlobalContextCompleteValues,
  IsDarkThemeDispatcher,
} from "../../contextes/globalContext";

export interface PostProps {
  id: number;
  title: string;
  introduction: string;
  img?: string;
  imgAlt?: string;
  isLast?: boolean;
}

const Post: FC<PostProps> = (
  { id, title, introduction, img, imgAlt, isLast }: PostProps,
): JSX.Element => {
  const { isDarkThemeDispatcher }: GlobalContextCompleteValues = useContext(
    GlobalContext,
  );
  const [isDarkTheme]: IsDarkThemeDispatcher = isDarkThemeDispatcher;
  const path: string = `/post/${id}`;
  return (
    <Link to={path}>
      <PostWrapper
        isLast={isLast}
        isDarkTheme={isDarkTheme}
        onClick={(): void => {
          scrollTop();
        }}
      >
        <PostImage>
          <img
            loading="lazy"
            width="250px"
            height="250px"
            src={img}
            alt={imgAlt}
            title={imgAlt}
          />
        </PostImage>
        <PostTextWrapper>
          <PostTitle>
            {title}
          </PostTitle>
          <PostHeader>
            {introduction}
          </PostHeader>
        </PostTextWrapper>
      </PostWrapper>
    </Link>
  );
};

export default Post;
