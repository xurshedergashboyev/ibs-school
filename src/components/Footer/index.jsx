import React from "react";
import {Gradient} from "react-gradient";

//styles
import {
    FooterSection,
    FooterInfo,
    FooterInfoItem,
    FooterInner,
    FooterMap,
    FooterBottom,
    FooterSocialItem,
    FooterSocialList,
    SocialList,
    FooterDesc,
    SocialItems,
    Heading,
    Container,
    SectionTitle,
} from "./styles";

// React Icons
import {FaTelegram, FaYoutube, FaFacebook} from "react-icons/fa";
import {Text} from "../Languages";

import {AiFillInstagram} from "react-icons/ai";

const gradients = [
    ["#9dd777", "#cd4640", "#7e9f4a"],
    ["#90c26f", "#5eafb4", "#7e9f4a"],
    ["#a8ff78", "#78ffd6"],
    ["#FFEFBA", "#FFFFFF"],
    ["#ddd6f3", "#faaca8"],
];

const Footer = () => {
    return (
        <FooterSection>
            <Gradient
                gradients={gradients} // required
                property="background"
                duration={3000}
                angle="45deg"
            >
                <Container>
                    <SectionTitle>
                        <Heading style={{padding: "20px 0"}}>
                            <Text tid="footerHeading"/>
                        </Heading>
                    </SectionTitle>
                    <FooterInner>
                        <FooterInfo>
                            <FooterInfoItem>
                                <Heading>
                                    <Text tid="footerAddress"/>
                                </Heading>
                                <FooterDesc>
                                    <Text tid="footerAddressDesc"/>
                                </FooterDesc>
                            </FooterInfoItem>
                            <FooterInfoItem>
                                <Heading>
                                    <Text tid="footerGraphic"/>
                                </Heading>
                                <FooterDesc>
                                    <Text tid="footerGraphicDesc"/>
                                </FooterDesc>
                            </FooterInfoItem>
                            <FooterInfoItem>
                                <Heading>
                                    <Text tid="footerPhone"/>
                                </Heading>
                                <FooterDesc>
                                    <Text tid="footerPhoneDesc"/>
                                </FooterDesc>
                            </FooterInfoItem>
                            <FooterInfoItem>
                                <Heading>
                                    <Text tid="footerEmail"/>
                                </Heading>
                                <FooterDesc>
                                    <Text tid="footerEmailDesc"/>
                                </FooterDesc>
                            </FooterInfoItem>
                        </FooterInfo>
                        <FooterMap>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.2364321558607!2d70.06775631354988!3d41.020083026650575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAxJzEyLjMiTiA3MMKwMDQnMTEuOCJF!5e0!3m2!1sru!2s!4v1612893785044!5m2!1sru!2s"
                                width="600"
                                height="450"
                                frameBorder="0"
                                style={{border: 0}}
                                allowFullScreen=""
                                aria-hidden="false" tabIndex="0"/>
                        </FooterMap>
                    </FooterInner>
                    <FooterBottom>
                        <FooterSocialList>
                            <SocialList>
                                <FooterSocialItem>
                                    <SocialItems>
                                        <FaTelegram/>
                                    </SocialItems>
                                </FooterSocialItem>
                                <FooterSocialItem>
                                    <SocialItems>
                                        <FaYoutube/>
                                    </SocialItems>
                                </FooterSocialItem>
                                <FooterSocialItem>
                                    <SocialItems>
                                        <FaFacebook/>
                                    </SocialItems>
                                </FooterSocialItem>
                                <FooterSocialItem>
                                    <SocialItems>
                                        <AiFillInstagram/>
                                    </SocialItems>
                                </FooterSocialItem>
                            </SocialList>
                        </FooterSocialList>
                    </FooterBottom>
                </Container>
            </Gradient>
        </FooterSection>
    );
};

export default Footer;
