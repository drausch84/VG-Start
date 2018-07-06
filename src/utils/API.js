import axios from "axios";

export default {
    topHeadlines : function(){
        return axios.get("https://newsapi.org/v2/top-headlines?sources=ign");
    },
    searchArticles : function(){
        return axios.get("https://newsapi.org/v2/everything?sources=ign");
    }
};