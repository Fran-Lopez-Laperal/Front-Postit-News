import { useEffect, useState } from "react";
import { filterNewsByCategoryService } from "../service";
import NewsCard from "../NewsCard/NewsCard";

import "./FilterNews.css";

export const FilterNews = ({ idCategory, categoryName }) => {
  const [newsWithFilter, setNewsWithFilter] = useState([]);
  const [error, setError] = useState(null);

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
  return (
    <section className="filter__news">
      {error ? (
        <p className="error__category">{error}</p>
      ) : (
        <section>
          {" "}
        
          <div className="filterNews">
            {newsWithFilter.map(
              ({
                id,
                title,
                createdAt,
                image,
                userName,
                avatar,
                nameCategory,
              }) => (
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
    </section>
  );
};
