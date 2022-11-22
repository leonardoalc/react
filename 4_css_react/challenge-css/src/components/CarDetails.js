import styles from "./CarDetails.module.css"

const CarDetails = ({id, brand, km, color}) => {
  return (
    <div>
        <div className={styles.carros}>
            <h1>Detalhes de carros</h1>
            <h2>{id}º Carro</h2>
            <h3>Marca: <span className={styles.car_details}>{brand}</span></h3>
            <h3>Quilometragem: <span className={styles.car_details}>{km}</span>Km</h3>
            <h3>Cor: <span className={styles.car_details}>{color}</span></h3>
        </div>
    </div>
  )
}
export default CarDetails