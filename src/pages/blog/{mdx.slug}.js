import * as React from 'react'
import { graphql } from 'gatsby' // highlight-line
import { MDXRenderer } from 'gatsby-plugin-mdx' // highlight-line
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
const BlogPost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image)
  return (

    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>Posted: {data.mdx.frontmatter.date}</p>
      
      {data.mdx.tableOfContents.items.map((items,index) =>{
        return(
          <div key={index}>
            <p >{items.url}</p>
            <p>{items.title}</p>
            <a href={items.url}>{items.title}</a>
          </div>
        )
      })}
      <GatsbyImage
        image={image}
        alt={data.mdx.frontmatter.hero_image_alt}
      />
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
    </Layout>
  )
}
export const query = graphql`
query ($slug: String) {
  mdx(slug: {eq: $slug}) {
    body
    frontmatter {
      title
      date(formatString: "MMMM DD, YYYY")
      hero_image_alt
      hero_image_credit_link
      hero_image_credit_text
      hero_image {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    tableOfContents
  }
}

`

export default BlogPost
