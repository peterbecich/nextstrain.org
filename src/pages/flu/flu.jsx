import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components"
import SEO from "../../components/SEO/SEO"
import Navigation from '../../components/Header'
// import Sidebar from "../components/Sidebar";
// import {colors} from "../theme";
// import {parseSlug} from "../utils/parseSlug"
// const _ = require("lodash");

export default class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>{`About Nextstrain`}</title>
        </Helmet>
        <SEO />
        <HeaderContainer>
          <Navigation location={this.props.location} />
        </HeaderContainer>
        <BodyContainer>
          <div>
            F L U
          </div>
        </BodyContainer>
      </div>
    );
  }
}

const HeaderContainer = styled.div`
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  z-index: 2;
   @media screen and (max-width: 600px) {
    order: 1;
  }
`
const BodyContainer = styled.div`
  overflow: scroll;
  justify-self: center;
  width: 100%;
  padding: ${props => props.theme.sitePadding};
  @media screen and (max-width: 600px) {
    order: 2;
  }

  & > div {
    max-width: ${props => props.theme.contentWidthLaptop};
    margin: auto;
  }

  & > h1 {
    color: ${props => props.theme.accentDark};
  }
`
