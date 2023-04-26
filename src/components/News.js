import React, { PureComponent } from "react";
import NewsDetails from "./NewsDetails";

export default class News extends PureComponent {
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      totalResults: 0,
    };
  }
  async componentDidMount() {
    await this.fetchData(1);
  }
  fetchData = async (page) => {
    let { country, category } = this.props;
    console.log("------------------------------------------", process.env.REACT_APP_NEWS_API_KEY)
    let myArticles = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&pageSize=8&page=${page}&category=${category }`
    );
    let myJsonArticles = await myArticles.json();
    this.setState({
      articles: myJsonArticles.articles,
      totalResults: myJsonArticles.totalResults,
    });
  };
  handlePrevClick = async () => {
    let prevPage = this.state.page - 1;
    await this.fetchData(prevPage);
    this.setState({
      page: prevPage,
    });
  };
  handleNextClick = async () => {
    let nextPage = this.state.page + 1;
    await this.fetchData(nextPage);
    this.setState({
      page: nextPage,
    });
  };
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
        <div className="d-flex justify-content-between mx-3 mb-3">
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
            disabled={this.state.page <= 1}
          >
            Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
            disabled={this.state.page >= Math.ceil(this.state.totalResults / 8)}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}
