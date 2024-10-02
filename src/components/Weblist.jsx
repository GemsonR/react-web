// import Container from "./Source";
import styles from "./weblist.module.css";

const WebList = ({ data, setDescription }) => {
  function handleClick(list, image, id) {
    setDescription({ list: list, image: image, id: id });
  }

  return (
    <div className={styles.listContainer}>
      {data.map((data, i) => (
        <div className={styles.cardContainer} key={data.id}>
          <div className={styles.title}>
            <h2>{data.title}</h2>
          </div>
          <div className={styles.imgContainer}>
            <img src={data.image} alt="" />
            <p>{data.text}</p>
          </div>
          <div className={styles.btnContainer}>
            <button
              onClick={() =>
                handleClick(
                  data.description.list,
                  data.description.imgUrl,
                  data.description.id
                )
              }
            >
              View
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default WebList;
