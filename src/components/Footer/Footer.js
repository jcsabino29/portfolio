import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle> Call </LinkTitle> 
          <LinkItem href="tel:858-405-7869">858-405-7869</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle> Email </LinkTitle> 
          <LinkItem href="mailto:jhaymarsabino@gmail.com">jhaymarsabino@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer> CS Grad, Hobbyist, Tech Enthusiast </CompanyContainer>
        <SocialIcons href="www.github.com/jcsabino29">
          <AiFillGithub size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/jhaymar-sabino-697305133">
          <AiFillLinkedin size="3rem"/>
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
