import React from 'react';
import styled from 'styled-components';


export function Showcase({
  title,
  link,
  rip,
  content
}: {
  title: string;
  link: string;
  rip?: string;
  content: React.ReactNode;
}) {

  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <Container $contentlength={content ? content.toString().length : 0}>
        <RIP>{rip}</RIP>
        <Title $title={title}>{title}</Title>
        {content}
      </Container>
    </Link>
  );
}


const Container = styled.div<{ $contentlength?: number }>`
  display: flex;
  flex-direction: column;

  width: clamp(18rem, 20vw, 30rem);
  height: 30vh;

  padding: 1rem;

  border: 1px solid #ccc;

  font-size: ${({ $contentlength }) => 0.9 + Math.max(0, 150 - ($contentlength || 0))/150 }rem;

  &:hover {
    background-color: #171717;
    border-radius: 1rem;
  }

  transition: background-color 0.3s ease, border-radius 0.5s ease;
`;

const Link = styled.a`
  text-decoration: none;

  color: #FFF;
`;

const Title = styled.h1<{ $title: string }>`
  font-size: ${({ $title }) => 1 + Math.max(0, 25 - $title.length)/25}rem;
  font-weight: 700;

  border-bottom: 1px solid #ccc;

  margin-top: 0;
`;

const RIP = styled.h4`
  font-size: 0.7rem;
  font-weight: 400;

  color: #bbb;

  margin: 0;
`;


export const ShowcaseContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  width: 100%;

  padding: 1rem 0;
`;