import React from "react"
import {connect, styled} from "frontity"
import FeaturedMedia from "@frontity/mars-theme/src/components/featured-media";

const Book = ({ state, libraries }) => {
    const data = state.source.get(state.router.link)
    const page = state.source[data.type][data.id]
    const post = state.source[data.type][data.id]

    const Html2React = libraries.html2react.Component

    return (
        <div>
            <CustomGrid>
                <div>
                    <FeaturedMedia id={post.featured_media} />
                </div>
                <div>
                    <h2>{page.title.rendered}</h2>
                    <Html2React html={page.content.rendered} />
                </div>
            </CustomGrid>
        </div>
    )
}

export default connect(Book)

const CustomGrid = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    & > div {
        padding: 15px;
    }
    & img {
        height: 600px;
        object-fit: cover;
    }
`