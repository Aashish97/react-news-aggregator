import React, { PureComponent } from "react";
import nepalLogo from "./../nepal.png";

export default class NewsDetails extends PureComponent {
  render() {
    let { title, description, imageURL, url } = this.props;
    return (
      <div className="card m-3" style={{ height: 520 }}>
        <img
          src={imageURL ? imageURL : nepalLogo}
          className="card-img-top"
          alt="..."
          height={200}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title && title.slice(0, 80)}...</h5>
          <p className="card-text">
            <small>{description && description.slice(0, 200)}...</small>
          </p>
          <a
            href={url}
            className="btn btn-primary mt-auto btn-xs"
            rel="noreferrer"
            target="_blank"
          >
            Read More
          </a>
        </div>
      </div>
    );
  }
}
