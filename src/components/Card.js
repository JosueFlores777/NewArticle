import React from "react";

const Card = ({ news }) => {

    const hasdata = news && news.articles && news.articles.length > 0;

    return (
        <>
            <div className="container-arti">
                <div className="row">
                    <div className="card-head">
                        {hasdata && (
                            <>
                                <div className="card-body">


                                    <h3>{news.articles[0].title}</h3>
                                    <img className="image" src={news.articles[0].urlToImage} alt="..."></img>
                                    <b className="publishe">
                                        {news.articles[0].publishedAt}
                                    </b>
                                </div>
                            </>


                        )}

                    </div>

                    {/* 2*/}
                    <div className="card-head">
                        {hasdata && (
                            <>
                                <div className="card-body">


                                    <h3>{news.articles[1].title}</h3>
                                    <img className="image" src={news.articles[1].urlToImage} alt="..."></img>
                                    <b className="publishe">
                                        {news.articles[1].publishedAt}
                                    </b>
                                </div>
                            </>


                        )}

                    </div>
                    {/* 3*/}
                    <div className="card-head">
                        {hasdata && (
                            <>
                                <div className="card-body">


                                    <h3>{news.articles[2].title}</h3>
                                    <img className="image" src={news.articles[2].urlToImage} alt="..."></img>
                                    <b className="publishe">
                                        {news.articles[2].publishedAt}
                                    </b>
                                </div>
                            </>


                        )}

                    </div>
                    {/* 4*/}
                    <div className="card-head">
                        {hasdata && (
                            <>
                                <div className="card-body">


                                    <h3>{news.articles[0].title}</h3>
                                    <img className="image" src={news.articles[0].urlToImage} alt="..."></img>
                                    <b className="publishe">
                                        {news.articles[0].publishedAt}
                                    </b>
                                </div>
                            </>


                        )}

                    </div>
                    {/* 5*/}
                    <div className="card-head">
                        {hasdata && (
                            <>
                                <div className="card-body">


                                    <h3>{news.articles[0].title}</h3>
                                    <img className="image" src={news.articles[0].urlToImage} alt="..."></img>
                                    <b className="publishe">
                                        {news.articles[0].publishedAt}
                                    </b>
                                </div>
                            </>


                        )}

                    </div>
                    {/* 2*/}
                    <div className="card-head">
                        {hasdata && (
                            <>
                                <div className="card-body">


                                    <h3>{news.articles[0].title}</h3>
                                    <img className="image" src={news.articles[0].urlToImage} alt="..."></img>
                                    <b className="publishe">
                                        {news.articles[0].publishedAt}
                                    </b>
                                </div>
                            </>


                        )}

                    </div>
                    {/* 3*/}
                    <div className="card-head">
                        {hasdata && (
                            <>
                                <div className="card-body">


                                    <h3>{news.articles[0].title}</h3>
                                    <img className="image" src={news.articles[0].urlToImage} alt="..."></img>
                                    <b className="publishe">
                                        {news.articles[0].publishedAt}
                                    </b>
                                </div>
                            </>


                        )}

                    </div>
                    {/* 4*/}
                    <div className="card-head">
                        {hasdata && (
                            <>
                                <div className="card-body">


                                    <h3>{news.articles[0].title}</h3>
                                    <img className="image" src={news.articles[0].urlToImage} alt="..."></img>
                                    <b className="publishe">
                                        {news.articles[0].publishedAt}
                                    </b>
                                </div>
                            </>


                        )}

                    </div>
                    {/* 5*/}
                    <div className="card-head">
                        {hasdata && (
                            <>
                                <div className="card-body">


                                    <h3>{news.articles[0].title}</h3>
                                    <img className="image" src={news.articles[0].urlToImage} alt="..."></img>
                                    <b className="publishe">
                                        {news.articles[0].publishedAt}
                                    </b>
                                </div>
                            </>


                        )}

                    </div>

                </div>
            </div>

        </>
    )

}

export default Card;