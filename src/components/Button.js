import React, { PureComponent } from "react";

export default class Button extends PureComponent {
  render() {
    let { btnName, btnType } = this.props;
    return (
      <div>
        <button type="button" className={`btn btn-${btnType}`}>
          {btnName}
        </button>
      </div>
    );
  }
}
