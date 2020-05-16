import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Container, Section } from '@components/global';
import ExternalLink from '@common/ExternalLink';

const Projects = () => (
  <StaticQuery
    query={graphql`
      query {
        art_test: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "test" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="projects" accent>
          <Container>
            <Grid>
              <Art>
                <Img fluid={data.art_test.childImageSharp.fluid} />
              </Art>
              <Text>
                <h1>
                  My latest committments:
                </h1>
                
                <p>
                  <ul>
                  <li> <a href="http://www.sito.ext/pagina.html">1895</a>: New super premium coffee brand launch </li>
                  <li>This incredible website made with Federico and Letizia</li>
                  <li> <a href="http://www.sito.ext/pagina.html">Orijeans</a>: my first denim brand</li>

                  </ul>

                </p>
              </Text>
            </Grid>
          </Container>
      </Section>
    )}
  />
);

const Art = styled.figure`
  width: 100%;
  margin: 0;

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${props => props.theme.screen.md}) {
      width: 100%;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 64px;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 80px;

    > ${Art} {
      order: 2;
    }
  }
`;

const Text = styled.div`
  justify-self: center;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: start;
  }
`;

const StyledExternalLink = styled(ExternalLink)`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.color.black.regular};
  }
`;



export default Projects;
