import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import InfiniteScroll from 'react-infinite-scroll-component';     
import PropTypes from 'prop-types'


const capitalizeFirstLetter  =(str)=> {
  // converting first letter to uppercase
  const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

  return capitalized;
}
const  News = (props)=> {
  const [articles, setarticles]= useState([])
  const [loading,setloading]= useState(false);
  const [page, setpage]=useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const updateNews= async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&pagesize=${props.pageSize}&page=${page}`;
    setloading(true)
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData.articles);
    setarticles(parsedData.articles)
    setloading(false)
    setTotalResults(parsedData.totalResults)
  }
  useEffect(()=> {
    
    updateNews()
    // eslint-disable-next-line 
  },[])

  
  // const handlePrevClick =() => {
  //   setpage(page-1);
  //   updateNews();
  // };

  //  Next button

  // const handleNextClick = () => {
    
  //   setpage(page+1);
  //   updateNews()
    
  //   }

  const fetchMoreData = async()=> {
    
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&pagesize=${props.pageSize}&page=${page+1}`;
    setpage(page+1); 
    
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData.articles);
    setTotalResults(parsedData.totalResults)
    setarticles(articles.concat(parsedData.articles))
    
    
 }
  

  
  

  return(
    <>
  
        <h2 className="text-center " style={{marginTop:"82px"}}>
          News Monkey-Top {capitalizeFirstLetter(props.category)}{" "} Heading{" "}
        </h2>
        <div className="container">

        {loading && <Spinner></Spinner>} 
        </div>
        <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={totalResults!== articles.length }
                    // hasMore={true }
                    loader={<Spinner/>}
                    endMessage={!loading }
                > 
              {console.log(articles.length)}
              
        <div className="container ">
          <div className="row overflow-hidden">
            

            {articles.map((element) => {
              return (
                <div className="col-md-4 " key={element.url}>
                  <Newsitem title={element.title} Discription={element.description} imgS={element.urlToImage} newsurl={element.url} author={element.author} publishedAt={element.publishedAt} nameofsite={element.source.name}/>
                </div>
              )})}
          
          </div>
        </div>
        </InfiniteScroll>  
        
        {/* <div className="d-flex justify-content-between">
          <button type="button" disabled={page <= 1} className="btn btn-dark btn-sm"onClick={handlePrevClick}> &laquo;Previous</button>
          <button type="button"disabled={  page + 1 >Math.ceil(totalResults / props.pageSize) }className="btn btn-dark btn-sm"
            onClick={handleNextClick} >Next&raquo;</button>
        </div> */}
      
    </>
  )
}
  

  


 

News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general',
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}        


  
   // static defaultProps = {
  //   pageSize: 8,
  //   category: "general",
  // };
            

export default News
