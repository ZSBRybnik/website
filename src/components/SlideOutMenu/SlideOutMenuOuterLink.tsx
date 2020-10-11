import React, { FC, useContext, useState } from "react";
import SlideOutMenuItemWrapper from "./SlideOutMenuItemWrapper";
import GlobalContext, {
  GlobalContextCompleteValues,
  IsDarkThemeDispatcher,
} from "../../contextes/globalContext";
import { Helmet } from "react-helmet-async";

interface OuterLinkProps {
  route: string;
  title: string;
}

const OuterLink: FC<OuterLinkProps> = ({
  route,
  title,
}: OuterLinkProps): JSX.Element => {
  const { isDarkThemeDispatcher }: GlobalContextCompleteValues = useContext(
    GlobalContext
  );
  const [isDarkTheme]: IsDarkThemeDispatcher = isDarkThemeDispatcher;
  return (
    <a
      href={route}
      rel="noopener noreferrer"
      title={title}
      aria-label={title}
    >
      <SlideOutMenuItemWrapper isDarkTheme={isDarkTheme}>
        {title}
      </SlideOutMenuItemWrapper>
    </a>
  );
};

export default OuterLink;
