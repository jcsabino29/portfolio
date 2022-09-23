import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to my<br/>
        Personal Portfolio
      </SectionTitle>
      <SectionText>
        The objective of this portfolio is to showcases my knowledge, credentials and skills to those who are interested and keep track of my personal development.
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;