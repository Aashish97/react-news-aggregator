import React, { PureComponent } from "react";
import NewsDetails from "./NewsDetails";

export default class News extends PureComponent {
  constructor() {
    super();
    this.state = {
      articles: [],
    };
  }
  async componentDidMount() {
    let myArticles = await fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=e2933ee690f145849ff54ded5add8c49"
    );
    let myJsonArticles = await myArticles.json();
    this.setState({
      articles: myJsonArticles.articles,
    });
  }
  render() {
    return (
      <div className="container">
        <h2 className="text-center my-5">News Aggregator | Headlines</h2>
        <div className="row">
          {this.state.articles.map((article) => {
            return (
              <div key={article.url} className="col-md-3">
                <NewsDetails
                  title={article.title}
                  description={article.description}
                  imageURL={article.urlToImage}
                  url={article.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
