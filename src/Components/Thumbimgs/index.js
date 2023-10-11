import "./style.css";

const ThumbImgs = (props) => {
  const { eachThumb, onChangeImage } = props;
  const { id, thumbnailUrl } = eachThumb;
  const changeImage = () => {
    onChangeImage(id);
  };
  return (
    <li>
      <button className="btn" type="button" onClick={changeImage}>
        <img src={thumbnailUrl} alt={thumbnailUrl} className="thum-img" />
      </button>
    </li>
  );
};

export default ThumbImgs;
