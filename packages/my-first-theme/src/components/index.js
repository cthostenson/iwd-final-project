import React from "react"
import { connect, Global, css, styled, Head } from "frontity"
import Link from "@frontity/components/link"
import Switch from "@frontity/components/switch"
import List from "./list"
import Post from "./post"
import Page from "./page"
import Book from "./book"
import Review from "./review"
import Loading from "./loading"
import Error from "./error"
import link from "@frontity/html2react/processors/link";


const Root = ({ state, actions }) => {
    const data = state.source.get(state.router.link)

    return (
        <>
            <Head>
                <title>My First Frontity Theme</title>
                <meta
                    name="description"
                    content="Based on the Frontity step by step tutorial"
                />
            </Head>
            <Global
                styles={css`
                    * {
                      margin: 0;
                      padding: 0;
                      box-sizing: border-box;
                    }
                    html {
                      font-family: system-ui, Verdana, Arial, sans-serif;
                      background-color: #0a0a0a;
                    }
                    h1, h2, h3, h4, h5, h6, p, span {
                        color: #fff;
                    }
                    h1 {
                        text-transform: uppercase;
                        text-align: center;
                        font-size: 3em;
                    }
                    .showURL {
                        text-align: center;
                        color: #fff;
                    }
                    
                    hr {
                    width: 75%;
                    }
                `}
            />
            <Header isPostType={data.isPostType} isPage={data.isPage}>
                <HeaderContent>
                    <h1>Space Archives</h1>
                    <div className="showURL">
                        {
                            state.theme.isUrlVisible ? (
                                <>
                                    Current URL: {state.router.link}{" "}
                                    <Button onClick={actions.theme.toggleUrl}>&#x3c; Hide URL</Button>
                                </>
                            ) : (
                                <Button onClick={actions.theme.toggleUrl}>Show URL &#x3e;</Button>
                            )
                        }
                    </div>
                    <Menu>
                        <Link link="/">Home</Link>
                        <Link link="/about">About</Link>
                        <Link link="/book">Books</Link>
                        <Link link="/review">Reviews</Link>
                        <Link link="/contact">Contact</Link>
                    </Menu>
                </HeaderContent>
            </Header>
            <hr />
            <Main>
                <Switch>
                    <Loading when={data.isFetching} />
                    <List when={data.isArchive} />
                    <Post when={data.isPost} />
                    <Page when={data.isPage} />
                    <Book when={data.isBook} />
                    <Review when={data.isReview} />
                    <Error when={data.isError} />
                </Switch>
            </Main>
        </>
    )
}

export default connect(Root)

const Header = styled.header`
`
const HeaderContent = styled.div`
  max-width: 800px;
  padding: 2em 1em;
  margin: auto;
`
const Main = styled.main`
  max-width: 800px;
  padding: 1em;
  margin: auto;

  img {
    max-width: 100%;
  }
  h2 {
    margin: 0.5em 0;
  }
  p {
    line-height: 1.25em;
    margin-bottom: 0.75em;
  }
  figcaption {
    color: #828282;
    font-size: 0.8em;
    margin-bottom: 1em;
  }
`

const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  margin-top: 1em;
  justify-content: center;
  transition: color 0.3s;
  & > a {
    margin-right: 1em;
    color: #fff;
    text-decoration: none;
  }
  & > a:hover {
    color: steelblue;
  }
`
const Button = styled.button`
  background: transparent;
  border: none;
  color: #aaa;

  :hover {
    cursor: pointer;
    color: #888;
  }
`

/*
  background-color: #e5edee;
  border-width: 0 0 8px 0;
  border-style: solid;
  border-color: ${ props => props.isPostType ? ( props.isPage ? 'lightsteelblue' : 'lightseagreen' ) : 'maroon'};
 */