require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: "MailMoreLV",
    description:
      "MailMoreLV is a virtual mailbox provider based out of Las Vegas. We help businesses and individuals by managing their mail.",
    url: "https://MailMoreLV.com",
    image: "/mailmorelv.jpg"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: "https://mailmorelv.us17.list-manage.com/subscribe/post?u=4dfb55d8c1107b210f977584f&amp;id=18eb91a4aa",
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-WXESJCMF2L", // Google Analytics / GA
        ],
      },
    },
  ],
}
