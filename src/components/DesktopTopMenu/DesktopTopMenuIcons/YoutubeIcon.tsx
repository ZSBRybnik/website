import { mdiYoutube } from "@mdi/js";
import Icon from "@mdi/react";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { UseTranslationResponse, useTranslation } from "react-i18next";
import { iconSize } from "../../../other/variables";

const YoutubeIcon = () => {
  const { t }: UseTranslationResponse = useTranslation();
  const youtubeTitle: string = t("menu.youtube");
  let hoverTimeout: number;
  const href: string =
    "https://www.youtube.com/channel/UCMzNuGK3NB6CmNn-JlRvWww";
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      {isHovered && (
        <Helmet>
          <link rel="preload" href={href} />
        </Helmet>
      )}
      <a
        rel="noopener noreferrer"
        href={href}
        aria-label={youtubeTitle}
        title={youtubeTitle}
        onMouseEnter={(): void => {
          hoverTimeout = setTimeout(() => {
            setIsHovered(true);
          }, 100);
        }}
        onMouseLeave={(): void => {
          clearTimeout(hoverTimeout);
        }}
      >
        <Icon
          path={mdiYoutube}
          title={youtubeTitle}
          aria-label={youtubeTitle}
          size={iconSize}
          color="#fff"
        />
      </a>
    </>
  );
};

export default YoutubeIcon;
