import React from "react"
import { connect, styled } from "frontity"
import Link from "@frontity/components/link"
import FeaturedMedia from "@frontity/mars-theme/src/components/featured-media";

const List = ({ state, actions }) => {
    const data = state.source.get(state.router.link)

    return (
        <Items>
            {data.items.map((item) => {
                const post = state.source[item.type][item.id]
                return (
                    <Link key={item.id} link={post.link}>
                        <FeaturedMedia id={post.featured_media} />
                        <div className="imageText">
                            <h2>
                                {post.title.rendered}
                            </h2>
                            <FauxButton>Check It Out!</FauxButton>
                        </div>
                    </Link>
                )
            })}
            <PrevNextNav>
                {data.previous && (
                    <button
                        onClick={() => {
                            actions.router.set(data.previous)
                        }}
                    >
                        &#171; Prev
                    </button>
                )}
                {data.next && (
                    <button
                        onClick={() => {
                            actions.router.set(data.next)
                        }}
                    >
                        Next &#187;
                    </button>
                )}
            </PrevNextNav>
        </Items>
    )
}

export default connect(List)

const Items = styled.div`
  & a {
    display: block;
    margin: 6px 0;
    font-size: 1.2em;
    color: steelblue;
    text-decoration: none;
    position: relative;
  }
  & a:hover img {
    opacity: 70%;
  }
  & a:hover .imageText div {
    width: 250px;
  }
  & img {
    z-index: 0;
    opacity: 50%;
    transition: opacity 0.25s ease-in-out;
  }
  & .imageText {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 75%;
    text-align: center;
  }
`
const PrevNextNav = styled.div`
  padding-top: 1.5em;

  & > button {
    background: #eee;
    text-decoration: none;
    padding: 0.5em 1em;
    color: #888;
    border: 1px solid #aaa;
    font-size: 0.8em;
    margin-right: 2em;
  }
  & > button:hover {
    cursor: pointer;
  }
`

const FauxButton = styled.div`
  padding: 15px 30px;
  text-transform: uppercase;
  background-color: steelblue;
  width: 200px;
  color: #fff;
  text-align: center;
  margin: 0 auto;
  transition: width 0.25s ease-in-out;
`