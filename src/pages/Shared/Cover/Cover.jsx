import PropTypes from "prop-types";
import { Parallax } from "react-parallax";

const Cover = ({ coverimage, coverTitle }) => {
  return (
    <Parallax
      blur={{ min: -70, max: 70 }}
      bgImage={`${coverimage}`}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div className="hero h-[500px]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase">{coverTitle}</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

Cover.propTypes = {
  coverTitle: PropTypes.string,
  coverimage: PropTypes.any,
};
export default Cover;
