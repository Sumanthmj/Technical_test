import styles from "./Card.module.scss";

export default function Card({ results }) {
    let display;
  
    if (results) {
        display = results.map((x) => {
          let {id, image, name, status} = x;

          return (
            <div key={id} className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark">
              <div className={`${styles.card} d-flex flex-column justify-content-center`}>
                <img className={`${styles.img} img-fluid`} src={image} alt="" />
                <div className={`${styles.content}`}>
                  <div className="fs-5 fw-bold mb-4">{name}</div>
                  <div className="">
                    <div className="fs-5">{status}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        });
    }
    else{
      display = "No Characters Found :/";
    }
  
    return <>{display}</>;
} 