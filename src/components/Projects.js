import React from 'react'
import styled from 'styled-components'




// STYLES //
const ProjectsContainer = styled.div`
  /* width: 100vw; */
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #00000d;
  color: #fff;
`;
const ProjectWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;
const ProjectCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`;
const ProjectImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px grey;
`;
const ProjectsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;
const ProjectTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
`;
const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;
const ProjectDesc = styled.p`
  margin-bottom: 1rem;
`;
const ProjectButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: var(--color-bgColorSecondary);
  color: #fff;
  &:hover {
    background: grey;
    cursor: pointer;
    color: #000;
  }
`;

// COMPONENT //
const Projects = ({ heading, data }) => {
    return (
      <ProjectsContainer>
        <ProjectsHeading>{heading}</ProjectsHeading>
        <ProjectWrapper>
          {data.map((project, index) => {
            return (
              <ProjectCard key={index}>
                <ProjectImg src={project.img} alt={project.alt} />
                <ProjectInfo>
                  <ProjectTitle>{project.name}</ProjectTitle>
                  <ProjectDesc>{project.desc}</ProjectDesc>
                  <ProjectButton>{project.button}</ProjectButton>
                </ProjectInfo>
              </ProjectCard>
            );
          })}
        </ProjectWrapper>
      </ProjectsContainer>
    );
  };
  
  export default Projects;
