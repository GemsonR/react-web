import styles from "./webdetail.module.css";

export default function WebDetail({ lists, image, id }) {
  console.log(id);
  
  return (
    <div className={styles.detailContainer}>
      {lists.map((list, i) => (
        <div className={styles.descriptionContainer} key={id[i]}>
          <div className={styles.listContainer}>
            <p>{list}</p>
          </div>
          <div className={styles.imageContainer}>
            <img src={image[i]} alt={image[i]} />
          </div>
        </div>
      ))}
    </div>
  );
}
