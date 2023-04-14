import { useEffect, useState } from "react";
import { filterNewsByCategoryService } from "../service";
import NewsCard from "../NewsCard/NewsCard";

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

  return (
    <>
      {error ? (
        <p>{error}</p>
      ) : (
        <section>
          {" "}
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
        </section>
      )}
    </>
  );
};
