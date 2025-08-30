import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../Media';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import { StaticImage } from 'gatsby-plugin-image';
// import Sungnikah from '../../images/sungnikah-presentation.jpg';

const ProjectContainer = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 0px;
    flex-wrap: wrap;
    margin-top: 0px;
    height: auto;
    @media (min-width: ${breakpoints.mobileMax}) {
        flex-wrap: nowrap;
        margin-bottom: 70px;
        margin-top: 40px;
        height: 700px;
    }
`;

const ProjectLink = styled(Paragraph)`
    font-weight: 700;
    font-size: 14px;
    line-height: 163.19%;
    display: inline;
    color: gray;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    border-bottom: 2px solid transparent;
    transition: border-bottom 0.3s;

    @media (min-width: ${breakpoints.mobileMax}) {
        width: 119px;
        display: block;
        margin: auto;
    }

    :hover {
        /* border-bottom: 2px solid black; */
    }

    span {
        font-size: 20px;
    }
`;

const ProjectImage = styled.div`
    width: 100%;
    height: 300px;
    border-radius: 4px;
    transition-duration: 0.3s;
    overflow: hidden;

    @media (min-width: ${breakpoints.mobileMax}) {
        height: 520px;
    }

    .gatsby-image-wrapper {
        width: 100%;
        height: 100%;
    }
`;

const Project = styled.div`
    width: 100%;
    height: auto;
    margin-bottom: 90px;
    transition-duration: 0.3s;

    :hover {
        ${ProjectImage} {
            .gatsby-image-wrapper {
                transform: scale(1.03);
            }
        }

        ${ProjectLink} {
            border-bottom: 2px solid black;
        }
    }

    :nth-child(1) {
        margin-right: 0;

        @media (min-width: ${breakpoints.mobileMax}) {
            margin-right: 0%;
        }
    }

    @media (min-width: ${breakpoints.mobileMax}) {
        width: 100%;
        margin-bottom: 0px;
    }
`;

const SubHeading = styled(Heading)`
    font-size: 30px;
    margin-bottom: 0;
    margin-top: 30px;

    @media (min-width: ${breakpoints.mobileMax}) {
        text-align: center;
        margin: 30px auto 0 auto;
    }
`;

const ProjectParagraph = styled(Paragraph)`
    margin-top: 10px;
    max-width: unset;
    margin-bottom: 20px;

    @media (min-width: ${breakpoints.mobileMax}) {
        max-width: 40%;
        text-align: center;
        margin: 10px auto 20px auto;
    }
`;

function FullProjectRow() {
    return (
        <ProjectContainer>
            <Project>
                <ProjectImage>
                    <StaticImage
                        src="../../images/sungnikah-presentation.jpg"
                        alt="Sungnikah project screenshot"
                        placeholder="blurred"
                        layout="constrained"
                        width={800}
                        height={520}
                        style={{
                            transition: 'transform 0.3s',
                        }}
                    />
                </ProjectImage>
                <SubHeading>Sungnikah</SubHeading>
                <ProjectParagraph>
                    My current work in progress, a digital custom wedding invitation that helps
                    couples spread their invitation through the web.
                </ProjectParagraph>
                
                <a href="https://sungnikah.com" target="_blank" rel="noreferrer">
                    <ProjectLink >View Project <span>&#8250;</span></ProjectLink>
                </a>
                
            </Project>
        </ProjectContainer>
    );
}

export default FullProjectRow;
