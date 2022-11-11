const CarDetails = ({brand, km, color, newCar}) => {
    return (
        <div>
            <h2>Detalhes do carro</h2>
            <ul>
                <li>Marca: {brand}</li>
                <li>KM: {km}Km</li>
                <li>Cor: {color}</li>
            </ul>
            {newCar ? (<p>Este carro é novo</p>) : (<p>Este carro não é novo</p>)}
        </div>
    )
}
export default CarDetails