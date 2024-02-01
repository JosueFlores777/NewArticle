import React, {useState} from "react";
import Form from "./Form";
import Card from "./Card";

const PanelNews = () =>{

    const [news, setNews] = useState({});

    const GetFech= async(search)=>{
       let key = "0d542d36844148678e8e69b1ed5c0761";
        let url = `https://newsapi.org/v2/everything?q=${search}&from=2023-12-31&sortBy=publishedAt&apiKey=${key}`;
  
     console.log(url);
        try{
          console.log("News url:", url);
            const response = await fetch(url);
            const data = await response.json();
            setNews(data);
        }catch(error){
            console.error(error);
        }
    }


    return(
        <React.Fragment>
            <Form GetFech={GetFech}></Form>
            <Card news = {news}></Card>
        </React.Fragment>
    );
}

export default PanelNews;