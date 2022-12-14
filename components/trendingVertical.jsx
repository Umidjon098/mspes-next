import Link from "next/link";
const Trending = ({ data }) => {
  const getDate = (date) => {
    return <div>{new Date(date).toString().slice(4, 15)}</div>;
  };

  return (
    <div className="trending_vertical">
      <div className="img_box">
        <img src={data.photo_url} alt="lorem" />
      </div>
      <div className="trending_data">
        <div className="category">
          <div className="name">{data.category.title}</div>-
          <div className="create_date">{getDate(data.published_date)}</div>
        </div>
        <Link href={`/article_detail/${data.slug}`}>
          <a className="title">{data.title}</a>
        </Link>
        <div className="short_description">{data.annotation}</div>
        <div className="author">
          <div className="authoe_img">{data.authors?.slice(0, 1)}</div>
          <div className="outhor_data">
            <div className="name">{data.authors}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
