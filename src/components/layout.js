import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../Css/layout.css"
import Cart from "./Cart"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Cart/>
      <footer className="footer">
        <div className="footer-buttom">
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
        </div>
      </footer>
    </>
  )
}

export default Layout
