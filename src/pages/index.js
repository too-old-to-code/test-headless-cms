import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query FoodQuery {
      allCockpitMenu {
        nodes {
          items {
            value {
              name {
                value
              }
              priceIn {
                value
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Amazing</h1>
      <ul>
        {
          data.allCockpitMenu.nodes[0].items.value.map((item) => {

            console.log(item)
            return (
              <li key={item.name.value}>
                {item.name && item.name.value} - {item.priceIn && item.priceIn.value}
              </li>
            )
          })
        }
      </ul>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
