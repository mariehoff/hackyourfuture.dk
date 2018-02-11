import Head from 'next/head'

export default () => {
  return (
    <div>
      <Head>
        <title>HackYourFuture Copenhagen</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <style global jsx>{`
        body {
          font-size: 1.2rem;
          line-height: 1.6rem;
          font-family: 'Source Sans Pro', sans-serif;
        }
        img {
          max-width: 100%;
        }
      `}</style>
      <style jsx>
        {`
          .content {
            max-width: 760px;
            margin: 0 auto;
          }
          .facebook {
            max-width: 360;
            margin: 0 auto;
          }
          .logo {
            text-align: center;
          }
        `}
      </style>
      <link
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro"
        rel="stylesheet"
      />
      <div className="content">
        <div className="logo">
          <img src="/static/hackyourfuture.png" />
        </div>
        <p>
          HackYourFuture is a non-profit that aims to train refugees and asylum
          seekers to become web-developers and empower them by opening the doors
          to a very in-demand job market.
        </p>
        <p>
          In our 6-month program we train students with and without a coding
          background in modern JavaScript software development. Our aim is to
          have our students land their first software development job after
          finishing our course and we do everything we can to prepare them as
          well as possible. With our team of experienced senior developers we
          have created a program around the special needs of refugees. Our
          teachers are all volunteers and extremely passionate about coding.
        </p>
        <p>
          We believe talented refugees are a great opportunity for society and
          we are here to give them a helping hand to make use of their
          potential.
        </p>
        <p>- Christopher Klüter</p>
        <div className="facebook">
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhackyourfuturecopenhagen%2F&tabs=timeline&width=360&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1094159287288856"
            width="360"
            height="500"
            styles={{ border: 'none', overflow: 'hidden' }}
            scrolling="no"
            frameBorder="0"
          />
        </div>
      </div>
    </div>
  )
}