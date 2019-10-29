import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
// import { getYtEmbedUrl } from "../components/yt-helper.js"

export default ({ pageContext: { session } }) => {
  var sessionDate = new Date(session.event.date)
  session.event.year = sessionDate.getFullYear()
  session.event.path = `/${session.event.insideTrack.hashtag}/${session.event.year}`

  return (
    <Layout>
      <SEO title="Session" />
      <h1>{session.title}</h1>
      <p>{session.speaker}</p>
      <Link to={`${session.event.path}`}>{session.event.insideTrack.name}</Link>
      <iframe title={session.title} width="560" height="315" src={session.recordingUrl} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </Layout>
  )
}