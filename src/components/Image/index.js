import { graphql } from 'gatsby';
import get from 'lodash/get';
import Img from './Image';
import React from 'react';

export default function Image(props) {
  const image = get(props, 'data.contentfulComponentImage');

  return image && <Img {...image} />;
}

export const query = graphql`
  fragment image on ContentfulComponentImage {
    id
    contentful_id
    caption
    alternativeText
    licenseNotice
    licenseUrl
    image {
      id
      description
      fluid(maxWidth: 600) {
        ...GatsbyContentfulFluid_withWebp_noBase64
      }
      fixed(width: 600) {
        ...GatsbyContentfulFixed_withWebp_noBase64
      }
    }
  }

  query ContentfulComponentImageById($id: String!) {
    contentfulComponentImage(id: { eq: $id }) {
      ...image
    }
  }
`;
