import React from 'react';
import styled from 'styled-components/macro';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import { breakpoints } from '../Media';

const InstagramCTA = styled.div`
    margin-top: 100px;
    display: ${props => props.instagramDisplay || 'none'};
    justify-content: space-between;
    align-items: center;
    height: auto;
    width: 100%;
    flex-wrap: wrap-reverse;

    @media (min-width: ${breakpoints.mobileMax}) {
        flex-wrap: nowrap;
    }
`;

const LeftGrid = styled.div`
    flex: 100%;
    padding: 0px;
    margin-top: 40px;
    align-items: left;
    display: flex;
    max-width: 100%;

    @media (min-width: ${breakpoints.mobileMax}) {
        flex: 30%;
        margin-top: 0px;
        max-width: 200px;
        margin-right: 200px;
    }
`;

const CTAText = styled.div`
    flex: 1 0 auto;
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 0;
    background-position: center center;

    ${Heading} {
        font-style: normal;
        font-weight: 700;
        font-size: 25px;
        line-height: 129.69%;
        text-align: left;
        max-width: 90%;
        letter-spacing: normal;

        @media (min-width: ${breakpoints.mobileMax}) {
            max-width: 200px;
            text-align: left;
        }
    }
`;

const ProjectLink = styled(Paragraph)`
    font-weight: 700;
    font-size: 14px;
    line-height: 163.19%;
    display: inline;
    color: black;
    letter-spacing: 0.03em;
    text-align: left;
    text-transform: uppercase;
    border-bottom: 2px solid transparent;
    transition: border-bottom 0.2s;

    @media (min-width: ${breakpoints.mobileMax}) {
        text-align: right;
    }

    :hover {
        border-bottom: 2px solid black;
    }

    span {
        font-size: 20px;
    }
`;

function InstagramGrid(props) {
    return (
        <InstagramCTA instagramDisplay={props.instagramDisplay}>
            <LeftGrid>
                <CTAText>
                    <Heading>Let's connect on instagram!</Heading>
                    <a
                        target='_blank'
                        rel='noreferrer'
                        title='Instagram - Arie Aditya'
                        href='https://www.instagram.com/adit739/'
                    >
                        <ProjectLink>
                            See More <span>&#8250;</span>
                        </ProjectLink>
                    </a>
                </CTAText>
            </LeftGrid>
        </InstagramCTA>
    );
}

export default InstagramGrid;
