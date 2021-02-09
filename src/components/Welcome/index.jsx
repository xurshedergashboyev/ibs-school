import React from "react";

//styles
import {
  WelcomeInner,
  WelcomeWrapper,
  NoteContainer,
  NoteDesc,
  NoteHeading,
  NoteInner,
  NoteSignContainer,
  NoteSignWrapper,
  WelcomeImage,
  WelcomeAuthor,
  NoteAllInner,
} from "./styles";

import { Text } from "../Languages";

const Welcome = () => {
  return (
    <WelcomeWrapper>
      <WelcomeInner>
        <NoteContainer>
          <NoteInner>
            <NoteAllInner>
              <NoteHeading>
                <Text tid="welcomeHeading" />
              </NoteHeading>
              <NoteDesc>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aperiam blanditiis delectus deserunt dignissimos dolores impedit
                labore laudantium, necessitatibus provident saepe temporibus
                ullam voluptates voluptatibus. Accusamus animi atque dolorem
                ducimus ea expedita fugit hic illum iusto libero maxime mollitia
                neque, placeat quam quas quia, quo recusandae, repellendus rerum
                sapiente sint veritatis.
              </NoteDesc>
              <NoteSignWrapper>
                <NoteSignContainer>
                  <svg
                    width="93"
                    height="45"
                    viewBox="0 0 93 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="sig-path"
                      d="M1.91602 31.094C5.32542 29.1989 8.73483 27.3038 12.1874 25.5409C13.2663 25.012 14.5179 24.7476 15.7263 24.5713C16.2442 24.4832 17.021 24.6595 17.3231 25.0561C17.582 25.3206 17.4526 26.202 17.1936 26.5986C16.5031 27.7005 15.6831 28.7582 14.82 29.7278C11.8853 33.1654 8.90746 36.559 5.97278 39.9967C5.19595 40.9222 2.52752 42.8636 3.9444 43.0377C8.80991 43.6353 18.3306 30.1715 21.0346 26.8631C22.1636 25.4727 34.8592 9.66272 35.7228 10.4681C36.6125 11.2979 28.6311 22.0507 27.7819 23.3814C25.4946 27.0394 23.2072 30.7415 21.0062 34.4435C20.5746 35.1487 20.2725 35.942 20.0136 36.7353C19.7115 37.6168 20.0568 38.0575 20.9199 37.7049C22.4736 37.0438 24.0704 36.2946 25.4946 35.325C27.3191 34.1042 30.8836 32.1299 33.5218 29.1989C38.0893 24.1244 40.8928 17.3217 45.4331 12.0107C47.9806 9.04339 54.4342 -1.27118 59.2002 1.74181C62.8148 4.11478 48.4226 18.5719 46.9436 20.0319C43.7931 23.1169 40.4269 25.8053 37.0606 28.5819C35.8954 29.5515 34.687 30.3007 34.5575 32.0196C34.3849 33.9587 35.3775 35.1928 37.2333 34.752C39.2185 34.3113 41.1606 33.5621 43.0595 32.8129C47.9249 30.8862 59.5 20.9998 58.7255 23.2051C57.8206 25.7816 55.749 26.8617 54.1508 28.4938C52.7698 29.9482 51 33.4998 51.4751 34.0028C52.4079 34.9904 60.8298 31.8716 62.6096 31.9755C63.3001 32.0196 63.9475 32.1077 64.5949 32.2399C68.6085 32.901 72.2337 31.667 75.9452 30.3007C81.2103 28.3615 86.5618 26.7309 91.8701 24.968"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </NoteSignContainer>
              </NoteSignWrapper>
            </NoteAllInner>
            <WelcomeImage>
              <WelcomeAuthor src="https://ba.uz/wp-content/themes/landing/images/bobir.png" />
            </WelcomeImage>
          </NoteInner>
        </NoteContainer>
      </WelcomeInner>
    </WelcomeWrapper>
  );
};

export default Welcome;
