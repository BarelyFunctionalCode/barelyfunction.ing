import React from 'react';
import styled from 'styled-components';


export function Showcase({
  title,
  link,
  children
}: {
  title: string;
  link: string;
  children: React.ReactNode;
}) {

  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <Container>
        <Title>{title}</Title>
        {children}
      </Container>
    </Link>
  );
}


const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 30vh;
  height: 30vh;

  padding: 1rem;

  border: 1px solid #ccc;
`;

const Link = styled.a`
  text-decoration: none;

  color: #FFF;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;

  border-bottom: 1px solid #ccc;
`;


export const ShowcaseContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  width: 100%;

  padding: 1rem 0;
`;