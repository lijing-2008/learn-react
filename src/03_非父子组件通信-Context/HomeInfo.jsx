import ThemeContext from "./context/themeContext";
export default function HomeInfo() {
    return (
        <div>
            HomeInfo
            <ThemeContext.Consumer>
                {
                    value => {
                        return(
                            <h2>{value.name}-{value.age}</h2>
                        )
                    }
                }
            </ThemeContext.Consumer>
        </div>
    )
}
