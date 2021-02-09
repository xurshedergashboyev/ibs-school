import React from "react";
import { GrPhone, GrMail } from "react-icons/gr";
import { bool } from "prop-types";

import { FaTelegram, FaYoutube, FaFacebook } from "react-icons/all";

import { AiFillInstagram } from "react-icons/ai";

//styles
import {
  MainWrapper,
  SideExtra,
  SideExtraContent,
  SideWrapperInner,
  SideWrapper,
  SideContent,
  SideContentItems,
  SideExtraSpan,
  Buttons,
  SideExtraItems,
  MainButtons,
  SideSocials,
  MainButton,
} from "./style";

import { Text } from "../Languages";
import LanguageSelector from "../LanguageSelector";

const styles = {
  cursor: "pointer",
};

const Sidebar = ({ open, ...props }) => {
  const isHidden = !!open;
  return (
    <MainWrapper open={open} aria-hidden={!isHidden} {...props}>
      <SideWrapper>
        <SideWrapperInner>
          <Buttons>
            <MainButtons>
              <MainButton
                to="#1"
                style={{ marginRight: 20, backgroundColor: "#fff" }}
              >
                <Text tid="sidebarButton" />
              </MainButton>
              <LanguageSelector />
            </MainButtons>
          </Buttons>
          <SideContent>
            <SideContentItems to="/courses">
              <Text tid="sidebarCoursePage" />
            </SideContentItems>
            <SideContentItems to="/blogs">
              <Text tid="sidebarBlogsPage" />
            </SideContentItems>
            <SideContentItems to="/webinars">
              <Text tid="sidebarWebinarsPage" />
            </SideContentItems>
          </SideContent>
          <SideExtraContent>
            <SideContentItems to="/tests">
              <Text tid="sidebarTestsPage" />
            </SideContentItems>
            <SideContentItems to="/forums">
              <Text tid="sidebarForumsPage" />
            </SideContentItems>
            <SideContentItems to="/careers">
              <Text tid="sidebarCareersPage" />
            </SideContentItems>
          </SideExtraContent>
          <SideExtra>
            <SideExtraItems>
              <GrPhone style={{ fontSize: 20 }} />
              <SideExtraSpan href="tel:998993696841">
                +998 99 369 68 41
              </SideExtraSpan>
            </SideExtraItems>
            <SideExtraItems>
              <GrMail style={{ fontSize: 20 }} />
              <SideExtraSpan>ibs@gmail.com</SideExtraSpan>
            </SideExtraItems>
          </SideExtra>
          <SideSocials>
            <FaFacebook style={styles} className="social-icon" />
            <AiFillInstagram style={styles} className="social-icon" />
            <FaYoutube style={styles} className="social-icon" />
            <FaTelegram style={styles} className="social-icon" />
          </SideSocials>
        </SideWrapperInner>
      </SideWrapper>
    </MainWrapper>
  );
};

Sidebar.propTypes = {
  open: bool.isRequired,
};

export default Sidebar;
