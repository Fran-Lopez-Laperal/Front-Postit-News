import React, { useEffect, useState } from 'react'
import { getNewsDataService } from '../service'

const News = () => {
    const [news, setNews] = useState([])
    const [error, setError] = useState(null)
    // const [loading, setLoading] = useState(true)


    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getNewsDataService();
                setNews(result);
                // setLoading(false);
                console.log(result)
            } catch (error) {
                setError(error.message);
                // setLoading(false);
            }
        };
        fetchData();
    }, []);




    return (
        <div>
            {
                news.map(({ id, title, imagePath }) => (
                    <section key={id}>
                        <p>{title}</p>
                        <img src={imagePath} alt={title} />
                    </section>

                ))
            }
        </div>
    )
}

export default News