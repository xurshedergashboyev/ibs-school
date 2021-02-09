import React from 'react'

import {
  FooterContent,
  FooterLink,
  FooterLinkBox,
  FooterNavs,
  FooterWrapper,
  SocialMedias,
  SocialMediasIcon,
} from "./styles";

//icons
import { ReactComponent as FaceBook } from "../../assets/icons/facebook-filled.svg";
import { ReactComponent as Instagram } from "../../assets/icons/instagram-filled.svg";
import { ReactComponent as YouTube } from "../../assets/icons/youtube-filled.svg";
import { ReactComponent as Telegram } from "../../assets/icons/telegram-filled.svg";

import { Text } from '../Languages'

function FooterMain() {
  return (
    <FooterWrapper>
      <FooterContent>
        <SocialMedias>
          <SocialMediasIcon>
            <FaceBook/>
          </SocialMediasIcon>
          <SocialMediasIcon>
            <Instagram/>
          </SocialMediasIcon>
          <SocialMediasIcon>
            <YouTube/>
          </SocialMediasIcon>
          <SocialMediasIcon>
            <Telegram/>
          </SocialMediasIcon>
        </SocialMedias>
        <FooterNavs>
          <FooterLinkBox>
            <FooterLink>
              <Text tid="coursePageFooterFeedback" />
            </FooterLink>
            <FooterLink>
              <Text tid="coursePageFooterHelp" />
            </FooterLink>
            <FooterLink>
              <Text tid="coursePageFooterAboutProject" />
            </FooterLink>
          </FooterLinkBox>
          <FooterLinkBox>
            <FooterLink>
              <Text tid="coursePageFooterLicence" />
            </FooterLink>
            <FooterLink>
              <Text tid="coursePageFooterVacancies" />
            </FooterLink>
            <FooterLink>
              <Text tid="coursePageFooterCompany" />
            </FooterLink>
            <FooterLink>
              <Text tid="coursePageFooterPartners" />
            </FooterLink>
            <span>©</span>
            <span>+998 99 999 16 41</span>
          </FooterLinkBox>
        </FooterNavs>
      </FooterContent>
    </FooterWrapper>
  );
}

export default FooterMain;