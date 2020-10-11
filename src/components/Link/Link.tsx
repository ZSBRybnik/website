import React, { FC, useContext } from "react";
import { mdiDownload, mdiShare } from "@mdi/js";
import Icon from "@mdi/react";
import GlobalContext, {
  GlobalContextCompleteValues,
  IsDarkThemeDispatcher,
} from "../../contextes/globalContext";
import LinkWrapper from "./LinkWrapper";
import LinkContentWrapper from "./LinkContentWrapper";
import LinkHeader from "./LinkHeader";
import { iconSize } from "../../other/variables";

interface LinkProps {
  title: string;
  href: string;
  toDownload?: boolean;
  inNewCard?: boolean;
}

const Link: FC<LinkProps> = ({
  title,
  href,
  toDownload,
  inNewCard,
}: LinkProps): JSX.Element => {
  const { isDarkThemeDispatcher }: GlobalContextCompleteValues = useContext(
    GlobalContext
  );
  const [isDarkTheme]: IsDarkThemeDispatcher = isDarkThemeDispatcher;
  const color: string = isDarkTheme ? "#fff" : "#111";
  const icon: string = toDownload ? mdiDownload : mdiShare;
  return (
    <LinkWrapper
      isDarkTheme={isDarkTheme}
      href={href}
      rel="noopener noreferrer"
      target={inNewCard === true ? "_blank" : ""}
      aria-label={title}
      title={title}
    >
      <LinkContentWrapper isDarkTheme={isDarkTheme}>
        <LinkHeader>{title}</LinkHeader>
        <div>
          <Icon path={icon} size={iconSize} color={color} />
        </div>
      </LinkContentWrapper>
    </LinkWrapper>
  );
};

export default Link;
