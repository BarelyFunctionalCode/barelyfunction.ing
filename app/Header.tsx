import React from 'react';
import styled from 'styled-components';


export default function Header({
  navSections,
  activeSection,
  changeActiveSection
}: {
  navSections: Array<string>,
  activeSection: string,
  changeActiveSection: Function
}) {
  const [isNavSmall, setNavSmall] = React.useState(false);

  const shrinkNav = (doShrink: boolean) => {
    setNavSmall(doShrink);
  }

  return (
    <HeaderContainer $isNavSmall={isNavSmall}>
      <TitleContainer onClick={() => {shrinkNav(false); changeActiveSection('')}}>
        <Title>barelyfunction.ing</Title>
        <BlinkText style={{marginLeft: '1rem', fontSize: '3vw'}}>█</BlinkText>
      </TitleContainer>
      
      <NavContainer $isNavSmall={isNavSmall}>
        {
          navSections.map((section) => {
            return (
              <NavSection
                key={section}
                onClick={() => {shrinkNav(true); changeActiveSection(section)}}
                $sectionName={section}
                $isNavSmall={isNavSmall}
                $activeSection={activeSection}
              >
                {section}
              </NavSection>
            )
          })
        }
      </NavContainer>
    </HeaderContainer>
  );
}


interface HeaderContainerProps {
  $isNavSmall: boolean;
}
const HeaderContainer = styled.div<HeaderContainerProps>`
  display: flex;
  flex: ${({ $isNavSmall }) => $isNavSmall ? '0 0 0' : '1 1 0'};
  flex-direction: column;
  justify-content: center;

  padding: 2rem 0;

  transition: flex 0.5s ease-in-out;
`;


const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  align-self: center;
  align-items: center;
  justify-content: center;

  margin-bottom: 2rem;
  cursor: pointer;

  animation: type-out 2s ease-in-out;
  @keyframes type-out {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
`;

const Title = styled.span`
  display: flex;

  font-size: 4vw;
  color: ${({ theme }) => theme.colors?.primary};

  overflow: hidden;
`;

const BlinkText = styled.span`
  color: ${({ theme }) => theme.colors?.primary};

  animation: blink 1s infinite;

  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
`;

interface NavContainerProps {
  $isNavSmall: boolean;
}
const NavContainer = styled.div<NavContainerProps>`
  display: flex;
  width: ${({ $isNavSmall }) => $isNavSmall ? '100%' : '20rem'};

  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
  align-self: center;
  justify-content: center;

  transition: width 0.5s ease-in-out;
  transition-delay: ${({ $isNavSmall }) => $isNavSmall ? '0s' : '0.5s'};

  animation: fade-in 2s ease-in-out;
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    60% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

interface NavSectionProps {
  $isNavSmall: boolean;
  $activeSection: string;
  $sectionName: string;
}
const NavSection = styled.div<NavSectionProps>`
  display: flex;
  width: ${({ $isNavSmall }) => $isNavSmall ? '12rem' : '8rem'};
  height: ${({ $isNavSmall }) => $isNavSmall ? '2rem' : '4rem'};

  align-items: center;
  justify-content: center;

  font-size: 15px;
  
  padding: 1rem;

  border-right: 1px solid ${({ theme }) => theme.colors?.primary};
  border-bottom: 1px solid ${({ theme }) => theme.colors?.primary};
  border-bottom-right-radius: 10px;

  color: ${({ theme, $sectionName, $activeSection }) => $sectionName == $activeSection ? 'black' : theme.colors?.primary};
  background-color: ${({ theme, $sectionName, $activeSection }) => $sectionName == $activeSection ? theme.colors?.primary : 'black'};

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors?.primary};
    color: black;
  }

  transition: all 0.5s ease-in-out, color 0.5s ease-in-out;
  transition-delay: ${({ $isNavSmall }) => $isNavSmall ? '0.5s' : '0s'};
`;