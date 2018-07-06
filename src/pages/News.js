import React, {Component} from "react";
// import API from "../utils/API";


const apiKey = "99d6749b5e52419b86864e3a294b5e1c";

class News extends Component{
    state = {
        urlToImage: "",
        title: "",
        description: "",
        author: "",
        url: ""
    };
    topHeadlines = async () => {
        const apiCall = await fetch("https://newsapi.org/v2/top-headlines?sources=ign&apiKey="+{apiKey}); 
        const data = await apiCall.json();
        console.log(data);

}

}

export default News;