import withTheme from "../hoc/with_theme";

function Product(props) {
    return (
        <div>
            Product:
            <div>{props.color}==={props.size}</div>
        </div>
    )
}

export default withTheme(Product)
