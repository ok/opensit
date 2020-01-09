/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import favicon48 from "../images/favicon-48x48.png"
import touchicon from "../images/touchicon-180x180.png"

function SEO({ description, title, creator, image }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            image
            twitter
          }
        }
      }
    `
  )

  const metaTitle = title || site.siteMetadata.title
  const metaDescription = description || site.siteMetadata.description
  const metaSiteUrl = site.siteMetadata.siteUrl
  const metaImage = image || site.siteMetadata.image
  const metaTwitter = creator || site.siteMetadata.twitter

  return (
    <Helmet>
      <html lang="en"/>
      {/* Icons */}
      <link rel="icon" type="image/png" href={favicon48} />
      <link rel="apple-touch-icon" sizes="180x180" href={touchicon} />

      {/* iOS meta tags */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="OpenSIT" />

      {/* General tags */}
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta name="image" content={metaImage} />

      {/* OpenGraph tags */}
      <meta property="og:url" content={metaSiteUrl} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={metaTwitter} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
  creator: PropTypes.string,
  image: PropTypes.string,
}

export default SEO
