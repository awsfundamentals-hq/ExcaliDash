import React from "react";
import { MainMenu, WelcomeScreen } from "@excalidraw/excalidraw";
import lightsailIconUrl from "../../assets/lightsail.svg";
import { BrandMark } from "../../components/BrandMark";
import { BADGE_TEXT, BADGE_URL } from "../../brand";

export const LightsailMenuItem: React.FC = () => (
  <MainMenu.ItemLink
    href={BADGE_URL}
    target="_blank"
    rel="noopener noreferrer"
    icon={<img src={lightsailIconUrl} alt="" className="h-4 w-4 rounded" />}
  >
    {BADGE_TEXT}
  </MainMenu.ItemLink>
);

export const EditorWelcome: React.FC = () => (
  <>
    <WelcomeScreen.Hints.MenuHint />
    <WelcomeScreen.Hints.ToolbarHint />
    <WelcomeScreen.Hints.HelpHint />
    <WelcomeScreen.Center>
      <WelcomeScreen.Center.Logo>
        <BrandMark />
      </WelcomeScreen.Center.Logo>
      <WelcomeScreen.Center.Heading>{BADGE_TEXT}</WelcomeScreen.Center.Heading>
      <WelcomeScreen.Center.Menu>
        <WelcomeScreen.Center.MenuItemHelp />
      </WelcomeScreen.Center.Menu>
    </WelcomeScreen.Center>
  </>
);
