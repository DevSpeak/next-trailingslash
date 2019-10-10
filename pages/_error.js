import React from 'react'
import Error from 'next/error'

const Page = ({ errorCode, stars }) => {
  if (errorCode) {
    return <Error statusCode={errorCode} />
  }

  return <div>No error</div>
}

Page.getInitialProps = async ({req, res}) => {
  const errorCode = res.statusCode > 200 ? res.statusCode : false
  
  if (req.url.endsWith('/')) {
      const newUrl = req.url.substring(0, req.url.length - 1)
      res.writeHead(303, { Location: newUrl })
      res.end()
  }

  return { errorCode }
}

export default Page