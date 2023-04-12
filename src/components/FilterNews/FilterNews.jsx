import { useEffect, useState } from "react";
import { filterNewsByCategoryService } from "../service";
import NewsCard from "../NewsCard/NewsCard";

export const FilterNews = ({ idCategory, categoryName }) => {
  const [newsWithFilter, setNewsWithFilter] = useState([]);

  useEffect(() => {
    const fetchFilterByCategory = async () => {
      const filteredNews = await filterNewsByCategoryService(idCategory);
      setNewsWithFilter(filteredNews);
    };
    fetchFilterByCategory();
  }, [idCategory]);

  return (
    <>
      <h2> Estas son las noticias relacionadas con {categoryName}</h2>
      <ul>
        {newsWithFilter.map(({ id, title, createdAt, image, idNew }) => (
          <NewsCard
            key={id}
            id={id}
            title={title}
            createdAt={createdAt}
            image={image}
            idNew={idNew}
          />
        ))}
      </ul>
    </>
  );
};
