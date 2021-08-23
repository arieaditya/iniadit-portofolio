import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import { breakpoints } from '../components/Media';
import Logo from '../components/Logo';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';
import LandingImage from '../images/LandingImage.jpg';
import HeadingWrap from '../components/HeadingWrap';
import Footer from '../components/footer';
import '../index.css';
import { Float } from '../styles';

const Container = styled.div`
    margin: 100px 0 200px 0;
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    @media (min-width: ${breakpoints.mobileMax}) {
        flex-wrap: nowrap;
    }
`;

const SkillTable = styled.div`
    width: 100%;
    text-align: left;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (min-width: ${breakpoints.mobileMax}) {
        flex-wrap: nowrap;
    }

    p {
        color: black;
        font-weight: 700;
        min-width: 200px;
        margin: 20px 0 0 0;

        @media (min-width: ${breakpoints.mobileMax}) {
            min-width: unset;
            margin: 30px 0;
        }

        span {
            font-size: 20px;
            margin-right: 5px;
            color: #b4e1e7;
        }
    }
`;

const SubContainer = styled.div`
    margin: 0px 0;
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    @media (min-width: ${breakpoints.mobileMax}) {
        flex-wrap: nowrap;
    }
`;

const TextContent = styled.div`
    max-width: 700px;
    .Paragraph {
        a {
            border-bottom: 2px solid transparent;
            transition: 0.3s;

            :hover {
                border-bottom: 2px solid black;
            }
        }
    }
`;

const TextContentWrap = styled(TextContent)`
    width: 100%;

    ${Paragraph} {
        margin: 40px 0px;
    }
    :nth-child(2) {
        ${Paragraph} {
            margin: 0px 0px;

            @media (min-width: ${breakpoints.mobileMax}) {
                margin: 40px 0;
            }
        }
    }

    @media (min-width: ${breakpoints.mobileMax}) {
        width: 45%;
    }
`;

const SkillContent = styled.div`
    width: 100%;
`;

const HeadingImage = styled.div`
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 0px;
    width: 100%;
    border-radius: 4px;
    height: 300px;
    background-size: cover;
    background-image: url(${LandingImage});
    background-color: #f5f5f5;
    background-position: center;
    transform: translateY(30px);
    opacity: 0;
    animation: ${Float} 1s 0.6s forwards;

    @media (min-width: ${breakpoints.mobileMax}) {
        width: 100%;
        height: 400px;
        background-position-x: right;
        background-position-y: center;
    }
`;

// const SubParagraph = styled(Paragraph)`
//     margin-top: 10px;
//     max-width: unset;

//     @media (min-width: ${breakpoints.mobileMax}) {
//         max-width: 70%;
//     }
// `;

class Page extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        console.log(`Oh, Hi There!`);
    }

    render() {
        return (
            <>
                <Layout>
                    <Link title='Home - Arie Aditya Nugraha' to='/'>
                        <Logo />
                    </Link>
                    <Helmet>
                        <title>
                            Arie Aditya - Front End Developer
                        </title>
                        <meta
                            name='title'
                            content='Arie Aditya - Front End Developer'
                        />
                        <meta
                            name='description'
                            content="Technology has always been at the very core of my interests. From a young age, I've loved the idea of being able to build something new that people around the world can experience and interact with."
                        />
                        <meta property='og:type' content='website' />
                        <meta
                            property='og:url'
                            content='https://iniadit.com/'
                        />
                        <meta
                            property='og:title'
                            content='Arie Aditya - Front End Developer'
                        />
                        <meta
                            property='og:description'
                            content="Technology has always been at the very core of my interests. From a young age, I've loved the idea of being able to build something new that people around the world can experience and interact with."
                        />
                        <meta property='og:image' content={LandingImage} />
                        <meta
                            property='twitter:card'
                            content='summary_large_image'
                        />
                        <meta
                            property='twitter:url'
                            content='https://iniadit.com/'
                        />
                        <meta
                            property='twitter:title'
                            content='Arie Aditya - Front End Developer'
                        />
                        <meta
                            property='twitter:description'
                            content="Technology has always been at the very core of my interests. From a young age, I've loved the idea of being able to build something new that people around the world can experience and interact with."
                        />
                        <meta property='twitter:image' content={LandingImage} />
                        <html lang='en' />
                    </Helmet>
                    <HeadingWrap />
                    <HeadingImage />
                    <Container
                        style={{
                            alignItems: 'start',
                            margin: 0,
                            justifyContent: 'space-between'
                        }}
                    >
                        <TextContentWrap>
                            <Paragraph>
                                I'm a 28-years-old, and currently focusing
                                in web development, web performance, and design.
                                <br />
                                <br />
                                As I've grown as a developer in a startup 
                                industry, a lot of things happen which have 
                                raised my standards for what's expected of 
                                any web application.
                            </Paragraph>
                        </TextContentWrap>
                        <TextContentWrap>
                            <Paragraph> 
                                Through these experiences, I've gained many things
                                in front-end development. As a front-end developer, I maintain the bridge
                                between visual experience, back-end, general user flows, capturing
                                interactions, and translating a designer's intention into
                                something that the browser can understand.
                            </Paragraph>
                        </TextContentWrap>
                    </Container>
                    <Container>
                        <SubContainer>
                            <SkillContent>
                                <TextContent>
                                    <Heading>My Skills</Heading>
                                    <Paragraph>
                                        Through my experiences, I've gained many things
                                        in front-end development. From the concepts, 
                                        I have dedicated a lot of my free time to apply
                                        these concepts to real-world scenarios and 
                                        applications.
                                    </Paragraph>
                                </TextContent>
                                <SkillTable>
                                    <div>
                                        <Paragraph>
                                            <span>&#9675;</span> Javascript ES6
                                        </Paragraph>
                                        <Paragraph>
                                            <span>&#9675;</span> HTML & CSS
                                        </Paragraph>
                                    </div>
                                    <div>
                                        <Paragraph>
                                            <span>&#9675;</span> Material UI
                                        </Paragraph>
                                        <Paragraph>
                                            <span>&#9675;</span> SASS
                                        </Paragraph>
                                    </div>
                                    <div>
                                        <Paragraph>
                                            <span>&#9675;</span> ReactJS
                                        </Paragraph>
                                        <Paragraph>
                                            <span>&#9675;</span>{' '}
                                            Styled-Components
                                        </Paragraph>
                                    </div>
                                    <div>
                                        <Paragraph>
                                            <span>&#9675;</span> Git
                                        </Paragraph>
                                        <Paragraph>
                                            <span>&#9675;</span> PHP & SQL
                                        </Paragraph>
                                    </div>
                                    <div>
                                        <Paragraph>
                                            <span>&#9675;</span> Bootstrap
                                        </Paragraph>
                                        <Paragraph>
                                            <span>&#9675;</span> jQuery
                                        </Paragraph>
                                    </div>
                                </SkillTable>
                            </SkillContent>
                        </SubContainer>
                    </Container>
                    <SubContainer>
                        <TextContent>
                            <Heading>What I've been working on </Heading>
                            <Paragraph>
                                I like to stay busy and always have a project in the works. 
                                Take a look at some of the mockups, articles, and applications
                                I've dedicated my time to.
                            </Paragraph>

                            <Paragraph>
                              🚧 Content in progress 🚧
                            </Paragraph>
                        </TextContent>
                    </SubContainer>
                </Layout>
                <Footer instagramDisplay='flex' />
            </>
        );
    }
}

export default Page;
