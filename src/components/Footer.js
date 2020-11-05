import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { FaLinkedin } from 'react-icons/fa';


// STYLES //
const FooterContainer = styled.footer`
  background-color: var(--color-bgColor);
`;
const FooterWrap = styled.div`
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
`;
const SocialMedia = styled.section`
  max-width: 1300px;
  width: 100%;
`;
const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 16px auto 0 auto;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;
const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;
const SocialIcons = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 240px;
  margin-bottom: 0.5rem;
`;
const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
  &:hover {
    color: var(--color-textSecondary)
  }
`;

// COMPONENT //
const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/'>Contact me at mikebailar@gmail.com or checkout my LinkedIn</SocialLogo>
            <SocialIcons>
              <SocialIconLink href='https://www.linkedin.com/in/michael-bailar' target='Michael Bailar LinkedIn' aria-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;