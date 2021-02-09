import {
  Logo,
  NavbarStyled,
  NavIcon,
  NavLinkStyled,
  NavName,
  NavsStyled,
  LogoImg,
} from "./styles";

import { Text } from "../Languages";
import ibsSvg from "../../assets/images/ibs.png";

//Icons
import { ReactComponent as CoursesIcon } from "../../assets/icons/courses.svg";
import { ReactComponent as WebinarsIcon } from "../../assets/icons/webinar.svg";
import { ReactComponent as ForumIcon } from "../../assets/icons/forum.svg";
import { ReactComponent as BlogIcon } from "../../assets/icons/blog.svg";
import { ReactComponent as TestsIcon } from "../../assets/icons/tests.svg";
import { ReactComponent as CareersIcon } from "../../assets/icons/careers.svg";

function NavbarLeft({ left }) {
  return (
    <NavbarStyled left={left}>
      <Logo to="/">
        <LogoImg src={ibsSvg} />
      </Logo>
      <NavsStyled>
        <NavLinkStyled to={"/courses"}>
          <NavIcon>
            <CoursesIcon />
          </NavIcon>
          <NavName>
            <Text tid="leftSidebarCourseIcon" />
          </NavName>
        </NavLinkStyled>
        <NavLinkStyled to={"/webinars"}>
          <NavIcon>
            <WebinarsIcon />
          </NavIcon>
          <NavName>
            <Text tid="leftSidebarWebinarsIcon" />
          </NavName>
        </NavLinkStyled>
        <NavLinkStyled to={"/forums"}>
          <NavIcon>
            <ForumIcon />
          </NavIcon>
          <NavName>
            <Text tid="leftSidebarForumIcon" />
          </NavName>
        </NavLinkStyled>
        <NavLinkStyled to={"/blogs"}>
          <NavIcon>
            <BlogIcon />
          </NavIcon>
          <NavName>
            <Text tid="leftSidebarBlogIcon" />
          </NavName>
        </NavLinkStyled>
        <NavLinkStyled to={"/tests"}>
          <NavIcon>
            <TestsIcon />
          </NavIcon>
          <NavName>
            <Text tid="leftSidebarTestsIcon" />
          </NavName>
        </NavLinkStyled>
        <NavLinkStyled to={"/careers"}>
          <NavIcon>
            <CareersIcon />
          </NavIcon>
          <NavName>
            <Text tid="leftSidebarCareersIcon" />
          </NavName>
        </NavLinkStyled>
      </NavsStyled>
    </NavbarStyled>
  );
}

export default NavbarLeft;
