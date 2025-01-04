import React, { useEffect, useState } from "react";
import {getNews} from "../services/getNews";
import moment from 'moment';
import alanBtn from '@alan-ai/alan-sdk-web';
import '../App.css';
export  function NewsData(props){
    const[newsData,setNewsData]=useState([])
    const alankey= '96750db8470029c26ab30e4c1f12b09f2e956eca572e1d8b807a3e2338fdd0dc/stage'
    const[selectoption,setSelectoption]=useState('');
    const getAllNews=async()=>{
        let data=await getNews(selectoption);
        setNewsData(data.data.articles)
    }
    const selectcategory=(e)=>{
        setSelectoption(e.target.value)
    }
    
    useEffect(() => {
        alanBtn({
            key: alankey,
            onCommand: (commandData) => {
                setSelectoption(commandData.data)
            }
        });
      }, []);
    useEffect(()=>{
        getAllNews()
    }, [selectoption])
    

    
    return(
        <div className="main">
            <h1>
                Voice News
            </h1>
            <div className="select">
                <label for="cars">Choose a Category:</label>
                <select className='select-box'name="cars" id="cars" onChange={selectcategory} value={selectoption}>
                    <option value="general">General</option>
                    <option value="health">Health</option>
                    <option value="business">Business</option>
                    <option value="sports">Sports</option>
                    <option value="entertainment">entertainment</option>
                    <option value="science">science</option>
                    <option value="technology">technology</option>
                </select>
            </div>
            <div className="grid-main">
            {newsData?.map((news)=>{
                return(
                    <div className="grid-child">
                        <img className='news-image' src={news?.urlToImage} alt='Image not avaliable'/>
                        <p className="news-title">{news?.title}</p>
                        <p className="news-content">{news?.content}</p>
                        <div className="space-between">
                            <p  className="news-author">Author:{news?.author ?news?.author:'Author name not avaliable'}</p>
                            <p className="news-data">Date:moment{news?.publishedAt}.format('LL')</p>
                        </div>
                        <a href={news?.url} target="_blank">Read More..</a>
                    </div>
                )
            })}
            </div>
            {props.data}
        </div>
    )
}