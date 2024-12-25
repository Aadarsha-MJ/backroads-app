import Name from "./Name";
import { toursData } from "../data";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Name title="featured" subTitle="tours" />

      <div className="section-center featured-center">
        {toursData.map((props) => {
          const { id, date, title, text, country, days, price, image } = props;
          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={image} className="tour-img" alt="" />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <h4>{title}</h4>
                <p>{text}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>
                    {country}
                  </p>
                  <p>{days}</p>
                  <p>{price}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Tours;
