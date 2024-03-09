// eslint-disable-next-line react/prop-types
import "./PlantRow.css";
export function PlantRow({plantName, commonName, color, height, hardiness, bloom, image, odd}) {
    return (
        <tr className={odd && "odd"}>
        <td>{plantName}</td>
        <td>{commonName}</td>
        <td>{color}</td>
        <td>{height}</td>
        <td>{hardiness}</td>
        <td>{bloom}</td>
        <td><img src={image} alt={plantName} /></td>
      </tr>
    )
}