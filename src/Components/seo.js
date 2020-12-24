import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)
  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    defaultImage,
  } = site.siteMetadata

  // Seo object uses default Title or description, unless new title or description is passed down from a component.
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${defaultImage}`,
    url: `${siteUrl}${pathname}`,
  }

  // Returns metatags in header.
  return (
    <Helmet title={`${seo.title} | ${defaultTitle}`}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={defaultImage} />
      {seo.url && <meta property="og:url" content={`${siteUrl}${seo.url}`} />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={defaultImage} />}
    </Helmet>
  )
}

export default SEO

// Seo expects props to be strings.
SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
}

// Sets default props as null. They get changed if props are passed down from component.
SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
}

// Takes title, description, and url from config file, and sets them to default title, description and url.
const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl: url
        defaultImage: image
      }
    }
  }
`
