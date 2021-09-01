
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout>
      <title>Home Page</title>
      <h1>Welcome to my Gatsby site!</h1>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <Link to="/about">About</Link>
      <div>
        <Greeting/>
        <ValidComponent/>
      </div>
    </Layout>
    
  )
}

//tutorial2

const Greeting = () => {
  const hello = <h1>Hello world!</h1>
  return hello
}

const ValidComponent = () => {
  return (
    <div>
      <h1>A valid component!</h1>
      <p>This will work fine.</p>
      <p>
        Since there is only one top-level element: the div.
      </p>
    </div>
  )
}
/* エラーになる
const InvalidComponent = () => {
  return (
    <h1>This won't work.</h1>
    <p>Because there are two elements at the top level.</p>
  )
}
*/

export default IndexPage
