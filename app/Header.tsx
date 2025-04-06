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
    <Container $isNavSmall={isNavSmall}>
        <TitleHorizontalContainer onClick={() => {shrinkNav(false); changeActiveSection('')}}>
          <TitleContainer>
            <Title>barelyfunction.ing</Title>
            <ZigZag />
            <div className='popup'>
              <PopupBox>
                <PopupTitle>(1/1) [DEP00P] DeprecationWarning:</PopupTitle>
                <PopupContent>This will be unsupported in the next version.</PopupContent>
              </PopupBox>
            </div>
          </TitleContainer>
          <BlinkText>█</BlinkText>
        </TitleHorizontalContainer>
      
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
    </Container>
  );
}


interface ContainerProps {
  $isNavSmall: boolean;
}
const Container = styled.div<ContainerProps>`
  display: flex;
  flex: ${({ $isNavSmall }) => $isNavSmall ? '0 0 0' : '1 1 0'};
  flex-direction: column;
  justify-content: center;

  padding: 2rem 0;

  transition: flex 0.5s ease-in-out;
`;

const TitleHorizontalContainer = styled.div`
  display: flex;
  width: 100%;
  align-self: center;
  align-items: center;
  justify-content: center;

  margin-bottom: 1rem;
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

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-self: center;
  flex-basis: fit-content;

  & > .popup {
    display: none;
  }

  &:hover > .popup {
    display: flex;
  }
`;

const Title = styled.span`
  display: flex;

  font-size: 4vh;
  color: ${({ theme }) => theme.colors?.primary};

  overflow: hidden;
`;

const ZigZag = styled.div`
  margin-top: -0.4rem;
  --a: 120deg; /* control the angle */
  --s: 8px; /* size of the zig-zag */
  --b: 2px;  /* control the thickness */
  
  background: #b2cc0dbf;
  height: calc(var(--b) + var(--s)/(2*tan(var(--a)/2)));
  width: 100%;
  --_g:var(--s) repeat-x conic-gradient(from calc(var(--a)/-2) at bottom,
    #0000,#000 1deg calc(var(--a) - 1deg),#0000 var(--a));
  mask: 50% calc(-1*var(--b))/var(--_g) exclude,50%/var(--_g);

  z-index: -1;

  animation: appear 2.1s linear;
  @keyframes appear {
    0% {
      opacity: 0;
    }
    99% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

// popup box thar appears when you hover over the title
const PopupBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;

  margin-top: 0.5rem;
  padding: 0.3rem;
  border: #aaa 1px solid;
  background-color: #222;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const PopupTitle = styled.span`
  font-family: 'Courier New', Courier, monospace;
  font-weight: 400;
  font-size: 0.7rem;
  font-style: italic;

  margin-bottom: 0.2rem;

  color: #888;
`;

const PopupContent = styled.span`
  font-family: 'Courier New', Courier, monospace;
  font-weight: 400;
  font-size: 0.8rem;
`;


const BlinkText = styled.span`
  font-size: 3vh;
  color: ${({ theme }) => theme.colors?.primary};

  margin-left: 1rem;

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
  width: ${({ $isNavSmall }) => $isNavSmall ? '100%' : '50vh'};

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
  width: ${({ $isNavSmall }) => $isNavSmall ? '8rem' : '6rem'};
  height: ${({ $isNavSmall }) => $isNavSmall ? '1rem' : '4rem'};

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