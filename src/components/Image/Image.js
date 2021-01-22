import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

const Image = ({
  alternativeText,
  caption,
  className,
  fixed,
  fluid = true,
  licenseNotice,
  licenseUrl,
  ...props
}) => {
  const imgProps = Object.assign(
    {
      alt: alternativeText || props.image.description,
      className,
      fadeIn: true,
      fixed: fixed && props.image.fixed,
      fluid: fluid && props.image.fluid,
      title: caption,
    },
    props
  );

  return (
    <figure className={className ? `${className}-wrapper` : null}>
      <Img {...imgProps} />
      <footer>
        {caption && <figcaption>{caption}</figcaption>}

        {licenseNotice && licenseUrl ? (
          <small>
            <a rel="license" href={licenseUrl}>
              {licenseNotice}
            </a>
          </small>
        ) : (
          licenseNotice && <small>{licenseNotice}</small>
        )}
      </footer>
    </figure>
  );
};

Image.propTypes = {
  alternativeText: PropTypes.string.isRequired,
  caption: PropTypes.string,
  className: PropTypes.string,
  fixed: PropTypes.bool,
  fluid: PropTypes.bool,
  image: PropTypes.shape({
    description: PropTypes.string,
    fixed: PropTypes.object,
    fluid: PropTypes.object,
    id: PropTypes.string,
  }),
  licenseNotice: PropTypes.string,
  licenseUrl: PropTypes.string,
};

Image.defaultProps = {
  fluid: true,
};

export default Image;
