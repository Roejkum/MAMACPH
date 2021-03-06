import React from 'react';
import PropTypes from 'prop-types';
import Masonry from '../components/Masonry/Masonry';
import Layout from '../components/Layouts/Layout';
import { graphql } from 'gatsby';
import Jumbotron from '../components/Jumbotron/Jumbotron';

import cowiLogo from '../../static/img/clientlogoes/cowi.png';
import FLogo from '../../static/img/clientlogoes/3f-logo-horizontal.png';
import dlfLogo from '../../static/img/clientlogoes/dlf_logo_png_sort.png';
import egmontLogo from '../../static/img/clientlogoes/Egm_fonden_logo_col_pos_CMYK.png';
import energiLogo from '../../static/img/clientlogoes/energi.png';
import miljoeLogo from '../../static/img/clientlogoes/miljoe.png';

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    
    return (
      <Layout>
        <Jumbotron />
          <section className="section">
            <div className="container-fluid wrap">
              <div className="row middle-xs clientlogoes">
                <div className="col-xs-12">
                </div>
                <div className="col-xs-4 col-sm-2"><img src={dlfLogo} alt="DLF logo"/></div>
                <div className="col-xs-4 col-sm-2"><img src={egmontLogo} alt="Egmont logo"/></div>
                <div className="col-xs-4 col-sm-2"><img src={FLogo} alt="F logo"/></div>
                <div className="col-xs-4 col-sm-2"><img src={miljoeLogo} alt="Miljøstyrelsen logo"/></div>
                <div className="col-xs-4 col-sm-2"><img src={cowiLogo} alt="COWI logo"/></div>
                <div className="col-xs-4 col-sm-2"><img src={energiLogo} alt="Klima-, Energi- og forsyningsministeriet logo"/></div>
              </div>
            </div>
          </section>

          <section className=" section">
          <div className="wrap container-fluid">
            <div className="row">
              <div className="col-xs-12">
                <div className="content-padding">
                  <h2 className="bold center secondary section-heading">Cases</h2>
                </div>
                <Masonry posts={posts} />
              </div>
            </div>
            </div>
          </section>

        <section  className="section">
          <div className="container-fluid">
            <div className="row middle-xs clientlogoes">
              <div className="col-xs-12 col-sm-6 col-sm-offset-3">
                <h2 className="center secondary">Hvem er vi?</h2>
                <p className="center">
                  Vi designer og udvikler digitale interaktive løsninger og visuel kommunikation. Vi arbejder med at gøre nye teknologier tilgængelige på devices som brugerne allerede har, med det formål at skabe engagerende oplevelser.<br/><br/>

                  Vi kommer gerne forbi og giver en demo eller snakker jeres muligheder igennem.
                    Hvis vi har vækket din interesse kan du se vores kontaktinfo nedenfor 👇
                </p><br/><br/>
                <p className="center" >
                  Blågårdsgade 19, kld <br/>
                  2200 København N <br/>
                  CVR 34403139
                </p><br/>
                <p className="center bold">
                  <a href="tel:004523373724">+45 23 37 37 24</a><br/>
                  <a href="mailto:mama@mamacph.dk">mama@mamacph.dk</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "cases-post" } }}
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            image {
              childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fluid {
                  sizes
                  srcSet
                  aspectRatio
                  src
                }
              }
              publicURL
            }
            path
            manchet
          }
        }
      }
    }
  }
`
