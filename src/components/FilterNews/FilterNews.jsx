import { useEffect, useState } from "react";
import { filterNewsByCategoryService } from "../service";
import NewsCard from "../NewsCard/NewsCard";

import './FilterNews.css'

export const FilterNews = ({ idCategory, categoryName }) => {
  const [newsWithFilter, setNewsWithFilter] = useState([]);
  const [error, setError] = useState(null);
  console.log(newsWithFilter);

  useEffect(() => {
    const fetchFilterByCategory = async () => {
      try {
        setError(null);
        const filteredNews = await filterNewsByCategoryService(idCategory);
        setNewsWithFilter(filteredNews);
      } catch (error) {
        console.log(error.message);
        setError(error.message);
      }
    };
    fetchFilterByCategory();
  }, [idCategory]);
console.log(newsWithFilter)
  return (
    <>
      {error ? (
        <p>{error}</p>
      ) : (
        <section>
          {" "}
          <h2> Estas son las noticias relacionadas con {categoryName}</h2>
          <div className="filterNews">
          {newsWithFilter.map(
              ({ id, title, createdAt, image, userName, avatar, nameCategory }) => (
                <NewsCard
                  key={id}
                  id={id}
                  title={title}
                  createdAt={createdAt}
                  image={image}
                  idNew={id}
                  ownerName={userName}
                  ownerAvatar={avatar}
                  nameCategory={nameCategory}
                />
              )
            )}
          </div>
           
        </section>
      )}
    </>
  );
};
