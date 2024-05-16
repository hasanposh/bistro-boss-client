import PropTypes from "prop-types";
const SectionTitle = ({ subHeading, heading }) => {
  return (
    <div className="text-center space-y-3 py-10 mx-auto md:w-4/12">
      <p className="text-xl text-yellow-500">---{subHeading}---</p>
      <div>
        <h3 className="border-y-2 py-3 text-5xl uppercase">{heading}</h3>
      </div>
    </div>
  );
};

SectionTitle.propTypes = {
  subHeading: PropTypes.string,
  heading: PropTypes.string,
};
export default SectionTitle;

