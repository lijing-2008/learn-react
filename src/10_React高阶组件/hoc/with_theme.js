import ThemeContext from "../context/theme_context";

function withTheme(OriginCpn) {
    return ( props ) => {
      return(
          <ThemeContext.Consumer>
              {
                  value => {
                      return(
                          <OriginCpn {...value} {...props}/>
                      )
                  }
              }
          </ThemeContext.Consumer>
      )
    }
}
export default withTheme
