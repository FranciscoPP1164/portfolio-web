import "./styles.css";


function Service({tittle, img, alt='service-image', children}) {
  return (
    <div className="service">
      <h2>{tittle}</h2>
      <img src={img} alt={alt} />
      <p>{children}</p>
    </div>
  );
}

export default Service;
