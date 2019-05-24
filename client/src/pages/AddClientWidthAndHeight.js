/**
 * 
 *      BaseComponent.js
 * 
 */

import React from "react"

const AddClientWidthAndHeight= WrappedComponent => {
    class HOC extends React.Component {

        state = {
            clientWindowWidth: 0.0,
            clientWindowHeight: 0.0
        };

        componentDidMount() {

            this.setState({
                clientWindowWidth: document.documentElement.clientWidth,
                clientWindowHeight: document.documentElement.clientHeight
            });
            this.windowSizeHasChanged = this.windowSizeHasChanged.bind(this);
            window.addEventListener("resize", this.windowSizeHasChanged);
        }

        windowSizeHasChanged() { 
            
            this.setState({
                clientWindowWidth: document.documentElement.clientWidth,
                clientWindowHeight: document.documentElement.clientHeight
            });
        }

        componentWillUnmount() { 
            window.removeEventListener("resize", this.windowSizeHasChanged);
        }

      render() {
          return <WrappedComponent {...this.props} windowWidth={this.state.clientWindowWidth} windowHeight={this.state.clientWindowHeight}/>;
      }
    }
      
    return HOC;
};
  
export default AddClientWidthAndHeight;