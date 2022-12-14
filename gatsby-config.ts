import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `IstneStudio`,
    siteUrl: `https://www.yourdomain.tld`,
    description: "Kolektyw dwóch osób pełnych pasji i zaangażowania w tym co robią. Specjalizujemy się w tworzeniu stron w oparciu o najnowsze technologie i rozwiązania. Dostarczymi Ci stronę odpowiadającą na dzisiejsze zapotrzebowanie rynkowe.",
    image: "/icon.png"
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [{
    resolve: 'gatsby-source-datocms',
    options: {
      "apiToken": "baea9b169e6f0fc7da246d61cf3dcd"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-styled-components", {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "I-WILL-SET-UP-LATER"
    }
  }, "gatsby-plugin-sitemap", "gatsby-plugin-mdx", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  },
    `gatsby-plugin-transition-link`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'static/images/icon.png',
      },
    },
  ]
};

export default config;
