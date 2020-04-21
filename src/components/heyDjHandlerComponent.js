import React, { Component } from "react";
import {
  DO_SOMETHING_OVER,
  DO_SOMETHING,
  DO_NOTHING
} from "../constants/action-types";

function heyDjHandlers(HeyDjComponent) {
  class ComposedHeyDjComponent extends Component {
    state = {
      appState: DO_NOTHING
    };

    _handleHeyDjAction = () => {
      this.setState(
        {
          appState: DO_SOMETHING
        },
        this._handleSomethingOver
      );
    };

    _handleSomethingOver = () => {
      const self = this;
      setTimeout(() => {
        self.setState({
          appState: DO_SOMETHING_OVER
        });
      }, 1000);
    };

    render() {
      return (
        <HeyDjComponent
          {...this.props}
          appState={this.state.appState}
          handleHeyDjAction={this._handleHeyDjAction}
        />
      );
    }
  }

  return ComposedHeyDjComponent;
}

export default heyDjHandlers;
