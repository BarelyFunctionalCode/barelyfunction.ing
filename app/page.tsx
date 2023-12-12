'use client';

import React from 'react';
import styled from 'styled-components';
import { MDXProps } from 'mdx/types';

import Theme from './theme';
import Header from './Header';
import About from './content/about.mdx';
import TopOfThePile from './content/totp.mdx';
import Graveyard from './content/graveyard.mdx';
import Contact from './content/contact.mdx';

export default function Page() {
  const [activeSection, setActiveSection] = React.useState('');

  const changeActiveSection = (section: string) => {
    setActiveSection(section);
  }

  interface Sections {
    [key: string]: React.ReactElement<MDXProps>;
  }
  const sections: Sections = {
    'About': <About />,
    'Top of the Pile': <TopOfThePile />,
    'Graveyard': <Graveyard />,
    'Contact': <Contact />
  }

  return (
    <Theme>
      <Container>
        <Header
          navSections={Object.keys(sections)}
          activeSection={activeSection}
          changeActiveSection={changeActiveSection}
        />
        {
          Object.keys(sections).map((section) => {
            return (
              <ContentContainer
                key={section}
                $activeSection={activeSection}
                $sectionName={section}
              >
                <Content
                  $activeSection={activeSection}
                  $sectionName={section}
                >
                  {sections[section]}
                </Content>
              </ContentContainer>
            )
          })
        }
      </Container>
    </Theme>
  );
}


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;
`;


interface ContentContainerProps {
  $activeSection: string;
  $sectionName: string;
}
const ContentContainer = styled.div<ContentContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 99%;
  height: ${({ $activeSection, $sectionName }) => $activeSection == $sectionName ? '100%' : '0%'};
  
  border: 1px solid ${({ theme, $activeSection, $sectionName }) => $activeSection == $sectionName ? theme.colors?.primary : 'transparent'};
  border-radius: 10px;
  
  overflow: ${({ $activeSection, $sectionName }) => $activeSection == $sectionName ? 'scroll' : 'hidden'};

  transition: height 0.5s ease-in-out, border 0.5s ease-in-out, padding 0.5s ease-in-out;
  transition-delay: ${({ $activeSection, $sectionName }) => $activeSection == $sectionName ? '1s' : '0.5s'};
`;

interface ContentProps {
  $activeSection: string;
  $sectionName: string;
}
const Content = styled.div<ContentProps>`
  display: flex;
  flex-direction: column;

  width: 90%;
  height: 100%;

  opacity: ${({ $activeSection, $sectionName }) => $activeSection == $sectionName ? '1' : '0'};

  
  transition: opacity 0.5s ease-in-out;
  transition-delay: ${({ $activeSection, $sectionName }) => $activeSection == $sectionName ? '1.5s' : '0s'};
`;