import React from "react"
import Moment from 'moment'
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Video from "../components/video"
import InsideTrackHeader from "../components/itrack-header"


const InsideTrackPage = ({ data }) => {
  const insideTrack = data.gcms.insideTrack
  insideTrack.events.forEach(event => {
    const eventDate = new Date(event.date)
    event.year = eventDate.getFullYear()
  })
  console.log(insideTrack.twitterId)
  return (
    <Layout>
      <SEO 
        type = "summary"
        title = { insideTrack.name }
        creator = { (insideTrack.twitterId !== null) ? '@'+insideTrack.twitterId : "" }
      />
      <div id="sticky-container">
        <InsideTrackHeader
          insideTrackSiteUrl = { insideTrack.websiteUrl }
          insideTrackName = { insideTrack.name }
          insideTrackHashtag = { insideTrack.hashtag }
          insideTrackLogoUrl = { insideTrack.logo.url }
          insideTrackTwitterId = { insideTrack.twitterId }
          insideTrackYoutubeUrl = { insideTrack.youTubeUrl }
        />
        <div className="insideTrack-container">
          { insideTrack.events.map(event => (
            <div className="row mt-5" key={event.id}>
              <div className={"col-sm-12"}>
                  <div className="insideTrack-date">
                    <h5>{ Moment(event.date).format('D MMM YYYY') }</h5>
                  </div>
                  <div className="card-deck insideTrack-card-deck">
                    {event.sessions.map(session => (
                      <Video.Player
                        sessionId = {session.id}
                        sessionTitle = {session.title}
                        sessionUrl = {session.recordingUrl}
                        hashtag = {insideTrack.hashtag}
                        eventYear = {event.year}
                      />
                    ))}
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query singleTrack($id: ID!) {
    gcms {
      insideTrack(
        where: {id: $id}
      ) {
        name
        city
        country
        websiteUrl
        twitterId
        youTubeUrl
        hashtag
        logo {
          url(
            transformation: {
              image: { resize: { width: 65, height: 65, fit: scale } }
            }
          )
          mimeType
        }
        events(orderBy: date_DESC) {
          id
          location
          date
          sessions {
            id
            title
            speaker
            recordingUrl
          }
        }
      }
    }
  }
`
export default InsideTrackPage