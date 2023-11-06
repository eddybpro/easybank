import "./Article.css";
import PropTypes from "prop-types";

function Article({ data }) {
  return (
    <div className="ArticleBox">
      <figure>
        <img src={data.img} alt="" className="ArticleBox-Img" />
        <figcaption className="ArticleBox-Caption">{data.caption}</figcaption>
      </figure>

      <h3 className="ArticleBox-Title">{data.title}</h3>
      <p className="ArticleBox-Desc">{data.desc}</p>
    </div>
  );
}

Article.propTypes = {
  data: PropTypes.object,
};

export default Article;
