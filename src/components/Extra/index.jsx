import React, { useState } from "react";
import {
  ExtraWrapper,
  ExtraContainer,
  CodeSvgContainer,
  LearnCodeContainer,
  LearnCodeDesc,
  LearnCodeHeading,
  LearnCodeWrapper,
} from "./styles";
import PopupForm from "../PopupForm";
import { Text } from "../Languages";

const Extra = () => {
  const [show, setShow] = useState(false);

  // handleCardClick
  const handleCardClick = () => {
    setShow(true);
  };
  return (
    <ExtraWrapper>
      <ExtraContainer>
        {/*<NoteContainer>*/}
        {/*  <NoteInner>*/}
        {/*    <NoteHeading>Note from IBS</NoteHeading>*/}
        {/*    <NoteDesc>*/}
        {/*      Everything here—words, curriculum, recording, editing, design,*/}
        {/*      code—was produced by my own two fallable human hands. I could've*/}
        {/*      outsourced some of it to make the project go faster, but I wanted*/}
        {/*      to personally showcase my own capabilities by using the exact same*/}
        {/*      techniques that I teach in the course. Thanks for taking the time*/}
        {/*      to check everything out!*/}
        {/*    </NoteDesc>*/}
        {/*    <NoteSignWrapper>*/}
        {/*      <NoteSignContainer>*/}
        {/*        <svg*/}
        {/*          width="93"*/}
        {/*          height="45"*/}
        {/*          viewBox="0 0 93 45"*/}
        {/*          fill="none"*/}
        {/*          xmlns="http://www.w3.org/2000/svg"*/}
        {/*        >*/}
        {/*          <path*/}
        {/*            className="sig-path"*/}
        {/*            d="M1.91602 31.094C5.32542 29.1989 8.73483 27.3038 12.1874 25.5409C13.2663 25.012 14.5179 24.7476 15.7263 24.5713C16.2442 24.4832 17.021 24.6595 17.3231 25.0561C17.582 25.3206 17.4526 26.202 17.1936 26.5986C16.5031 27.7005 15.6831 28.7582 14.82 29.7278C11.8853 33.1654 8.90746 36.559 5.97278 39.9967C5.19595 40.9222 2.52752 42.8636 3.9444 43.0377C8.80991 43.6353 18.3306 30.1715 21.0346 26.8631C22.1636 25.4727 34.8592 9.66272 35.7228 10.4681C36.6125 11.2979 28.6311 22.0507 27.7819 23.3814C25.4946 27.0394 23.2072 30.7415 21.0062 34.4435C20.5746 35.1487 20.2725 35.942 20.0136 36.7353C19.7115 37.6168 20.0568 38.0575 20.9199 37.7049C22.4736 37.0438 24.0704 36.2946 25.4946 35.325C27.3191 34.1042 30.8836 32.1299 33.5218 29.1989C38.0893 24.1244 40.8928 17.3217 45.4331 12.0107C47.9806 9.04339 54.4342 -1.27118 59.2002 1.74181C62.8148 4.11478 48.4226 18.5719 46.9436 20.0319C43.7931 23.1169 40.4269 25.8053 37.0606 28.5819C35.8954 29.5515 34.687 30.3007 34.5575 32.0196C34.3849 33.9587 35.3775 35.1928 37.2333 34.752C39.2185 34.3113 41.1606 33.5621 43.0595 32.8129C47.9249 30.8862 59.5 20.9998 58.7255 23.2051C57.8206 25.7816 55.749 26.8617 54.1508 28.4938C52.7698 29.9482 51 33.4998 51.4751 34.0028C52.4079 34.9904 60.8298 31.8716 62.6096 31.9755C63.3001 32.0196 63.9475 32.1077 64.5949 32.2399C68.6085 32.901 72.2337 31.667 75.9452 30.3007C81.2103 28.3615 86.5618 26.7309 91.8701 24.968"*/}
        {/*            stroke="currentColor"*/}
        {/*            strokeWidth="2"*/}
        {/*            strokeLinecap="round"*/}
        {/*            strokeLinejoin="round"*/}
        {/*          />*/}
        {/*        </svg>*/}
        {/*      </NoteSignContainer>*/}
        {/*    </NoteSignWrapper>*/}
        {/*  </NoteInner>*/}
        {/*</NoteContainer>*/}
        <LearnCodeWrapper>
          <LearnCodeContainer>
            <LearnCodeHeading>
              <Text tid="learnCoding" />
            </LearnCodeHeading>
            <LearnCodeDesc onClick={handleCardClick}>
              <Text tid="heroFormButtonSubmit" />
            </LearnCodeDesc>
            <CodeSvgContainer>
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="100%"
                height="100%"
                viewBox="0 0 156 183"
                style={{ enableBackground: "new 0 0 156 183" }}
                xmlSpace="preserve"
              >
                <title>Group 18</title>
                <desc>Created with Sketch.</desc>
                <path
                  id="Fill-1"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  fill="#6D3ACF"
                  d="M103.21,116.64c0.5,1.6,3.98,1.76,8.27,0.67c3.88-0.99,8.54-0.13,8.9,2.18l-6.43-22.23l-18.72,8.31 L103.21,116.64z"
                />
                <path
                  id="Fill-3"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  fill="#8147E0"
                  d="M122,105.12c-11.09,2.07-20.23,6.91-18.78,11.52c0.5,1.6,3.98,1.76,8.27,0.67 c3.88-0.99,8.54-0.13,8.9,2.18c0.44,2.8-2.16,6.25-11.35,5.91c-53.07-1.97-57.08,13.51-103.15-9.58c-3.76-1.88-7.89-3.17-1.94-8.45 c41.81-37.13,36.71-54.29,76.51-66.84"
                />
                <path
                  id="Fill-5"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  fill="#F8F9FE"
                  d="M25.8,110.44c-3.46-1.3-5.16-1.89-2.85-4.76c5.18-6.44,9.73-13.81,12.66-17.75 c1.38-1.85,2.52-2.38,5.14-0.12c2.13,1.84,2.84,1.76,1.5,3.79c-1.87,2.82-7.04,9.75-8.54,11.62c-1.5,1.87,0.3,2.51,1.36,2.8 c3.61,1.01,9.61,1.29,14.65,1.94c2.03,0.26,2.57,1.8,3.13,4.46c0.57,2.69-0.52,3.32-3.07,3.13 C42.49,115.01,33.34,113.29,25.8,110.44"
                />
                <path
                  id="Fill-7"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  fill="#F8F9FE"
                  d="M66.64,67.34c-2.64,1.1-3.23,2.17-3.57,3.78c-2.21,10.68-4.25,28.5-4.63,40.3 c-0.08,2.51-0.46,4.63,2.43,3.32c2.89-1.3,3.64-2.64,3.72-4.26c0.76-14.59,2.92-29.07,4.67-40.86 C69.67,67.02,68.63,66.51,66.64,67.34"
                />
                <path
                  id="Fill-9"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  fill="#F8F9FE"
                  d="M84.03,95.4c-1.07,1.75-1.63,2.62-0.37,3.58c1.26,0.97,2.51,2.12,3.32,2.74 c0.81,0.62,1.7,1.16,2.39,0.02c5.93-9.78,16.4-24.56,18.41-27.33c2.02-2.77,1.56-3.85-1.53-4.3c-3.09-0.45-27.44-2.4-29.87-2.67 c-2.43-0.27-3.27,0.37-2.67,3.65c0.52,2.89,1.3,3.86,3.26,3.91c1.96,0.05,13.63,1.05,15.45,1.27c1.82,0.22,3.24,0.83,2.24,2.4 C93.68,80.24,85.6,92.82,84.03,95.4"
                />
                <path
                  id="Fill-11"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  fill="#9553F1"
                  d="M94.93,20.89c-6.64,2.31-18.43,8.09-16.48,16.29c1.95,8.2,24.76,79.46,24.76,79.46 c-1.44-4.61,7.69-9.45,18.78-11.52"
                />
                <g id="Group-15" transform="translate(51.480000, 0.022000)">
                  <g id="Clip-14" />
                  <defs>
                    <filter
                      id="Adobe_OpacityMaskFilter"
                      filterUnits="userSpaceOnUse"
                      x="32.21"
                      y="0.2"
                      width="20"
                      height="20.54"
                    >
                      <feColorMatrix
                        type="matrix"
                        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"
                      />
                    </filter>
                  </defs>
                  <mask
                    maskUnits="userSpaceOnUse"
                    x="32.21"
                    y="0.2"
                    width="20"
                    height="20.54"
                    id="mask-2_1_"
                  >
                    <g filter="url(#Adobe_OpacityMaskFilter)">
                      <polygon
                        id="path-1_1_"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#FFFFFF"
                        points="52.2,0.2 32.21,0.2 32.21,20.74 52.2,20.74"
                      />
                    </g>
                  </mask>
                  <path
                    id="Fill-13"
                    mask="url(#mask-2_1_)"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#FFAB00"
                    d="M43.89,0.35c-7.35-1.21-10.91,5.12-11.56,8.92c-0.65,3.8,1.14,10.72,8.87,11.42 c5.3,0.48,10.66-3.41,10.98-8.98C52.45,7.1,49.75,1.32,43.89,0.35"
                  />
                </g>
                <path
                  id="Fill-16"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  fill="#FFD630"
                  d="M95.1,14.8c4.03-1.51,5.76,1.15,5.76,1.15s32.21,92.61,54.73,158.69 c2.5,7.34-6.96,10.54-9.08,4.01C124.17,109.72,90.95,18.53,90.95,18.53S91.28,16.23,95.1,14.8"
                />
              </svg>
            </CodeSvgContainer>
          </LearnCodeContainer>
        </LearnCodeWrapper>
        {show ? <PopupForm callback={() => setShow(false)} /> : null}
      </ExtraContainer>
    </ExtraWrapper>
  );
};

export default Extra;
