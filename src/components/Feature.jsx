import "./Feature.css";
import PropTypes from "prop-types";

function Feature({ data }) {
  return (
    <div className="FeatureBox">
      <img src={data.img} alt="" className="FeatureBox-Img" />
      <h2 className="FeatureBox-Title">{data.title}</h2>
      <p className="FeatureBox-Desc">{data.desc}</p>
    </div>
  );
}

Feature.propTypes = {
  data: PropTypes.object,
};

export default Feature;
