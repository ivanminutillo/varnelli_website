const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock
const Container = CompLibrary.Container
const GridBlock = CompLibrary.GridBlock

const siteConfig = require(process.cwd() + '/siteConfig.js')

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

const TldrSection = ({ language }) => (
  <div className="tldrSection productShowcaseSection lightBackground">
    <Container>
      <div
        style={{
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "space-evenly"
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h2>What is VarnelliJs?</h2>
          <ul style={{ flex: "1" , textAlign: 'left'}}>
            <li>A Wallet for social and mutual currencies</li>
            <li>Supports the creation and management of shares and assets</li>
            <li>Supports both a centralized (mongoDB) or <br /> decentralized Database (Fairchains or SSB)</li>
          </ul>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h2>Why?</h2>
          <ul style={{ flex: "1" , textAlign: 'left' }}>
            <li>To create value and manage with your own political vision</li>
            <li>To enhance autonomy and self-management</li>
            <li>To experiment with new economies different <br />from the capitalistic one</li>
          </ul>
        </div>
      </div>
    </Container>
  </div>
)

const UsersSection = ({ language }) => {
  const showcase = siteConfig.users
    .filter(user => {
      return user.pinned;
    })
    .map((user, i) => {
      return (
        <a key={i} className="growOnHover" href={user.infoLink}>
          <img className="user" src={user.image} title={user.caption} />
        </a>
      );
    });

  return (
    <div className="usersSection productShowcaseSection lightBackground">
      <Container>
        <h2>Supported and backed by</h2>
        <div style={{ textAlign: "right" }} />
        <div
          style={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "space-around"
          }}
        >
          {showcase}
        </div>
      </Container>
    </div>
  )
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);



const ProjectTitle = props => (
  <div className='projectbasicinfo'>
    <h2 className="projectTitle">
      <small>{siteConfig.tagline}</small>
    </h2>
    <div className='projectBg' />
    <p className='projectDescription'>Today We’re forced to measure values accordingly to few centralized currencies, on which we don’t have any control neither power. <br />
We suffer rules that don’t reflect nothing about us and serve the interest of the financial elite.<br />
VarnelliJs is one of a set of tools that aim to empower social movements to fight the current capitalist system and explore new way of managing relationships inside communities and facilitate the creation of federations of communities. <br />
It provides the minimal technology infrastructure needed to empower groups to create and manage values, through a currency that can embody different governance rules according to different political and economic protocols, giving to humans the total control of data, code and knowldedge.
 </p>
  </div>
)

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render () {
    let language = this.props.language || '';
    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href="#try">Try It Out</Button>
            <Button href={docUrl('doc1.html', language)}>Example Link</Button>
            <Button href={docUrl('doc2.html', language)}>Example Link 2</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    )
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);



class Index extends React.Component {
  render () {
    let language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <TldrSection language={language} />
        <UsersSection language={language} />
      </div>
    );
  }
}

module.exports = Index;
