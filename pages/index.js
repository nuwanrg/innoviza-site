import Head from 'next/head'

import {
  Header,
  Footer,
  Hero,
  SummaryInNumbers,
  Testimonials,
  TechScroll,
  Services,
  CallToAction,
  CharactersBlock,
} from 'components/molecules'

export default function Home() {
  return (
    <>
      <Head>
        <title>Block365 — Engineering Web 3.0 Projects</title>
        <meta name='title' content='Block365 — Engineering Web 3.0 Projects' />
        <meta
          name='description'
          content='Hire Web 3 software engineers to build your metaverse project. Solidity and Rust developers, Solana and Ethereum based blockchain project development including NFT’s, P2E, and marketplaces.'
        />

        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://block365.io' />
        <meta
          property='og:title'
          content='Block365 — Engineering Web 3.0 Projects'
        />
        <meta
          property='og:description'
          content='Hire Web 3 software engineers to build your metaverse project. Solidity and Rust developers, Solana and Ethereum based blockchain project development including NFT’s, P2E, and marketplaces.'
        />
        <meta
          property='og:image'
          content='https://block365.io/social-covers/og-image.png'
        />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://block365.io' />
        <meta
          property='twitter:title'
          content='Block365 — Engineering Web 3.0 Projects'
        />
        <meta
          property='twitter:description'
          content='Hire Web 3 software engineers to build your metaverse project. Solidity and Rust developers, Solana and Ethereum based blockchain project development including NFT’s, P2E, and marketplaces.'
        />
        <meta
          property='twitter:image'
          content='https://block365.io/social-covers/og-image.png'
        />

        {/* <link rel='icon' href='/favicon.png' /> */}

        <script
          dangerouslySetInnerHTML={{
            __html: `window.pipedriveLeadboosterConfig = {base: 'leadbooster-chat.pipedrive.com',companyId: 10739542,playbookUuid: 'b2731fea-0d89-4b35-95b9-688c54d84801',version: 2};(function () {var w = window;if (w.LeadBooster) {console.warn('LeadBooster already exists');} else {w.LeadBooster = {q: [],on: function (n, h) {this.q.push({ t: 'o', n: n, h: h });},trigger: function (n) {this.q.push({ t: 't', n: n });},};}})();`,
          }}></script>
        <script
          src='https://leadbooster-chat.pipedrive.com/assets/loader.js'
          async></script>
      </Head>

      <Header />
      <Hero />
      <TechScroll />
       {/*<Services />
      <SummaryInNumbers />

      <Testimonials />
      <CallToAction /> */}
      <Footer />
    </>
  )
}
