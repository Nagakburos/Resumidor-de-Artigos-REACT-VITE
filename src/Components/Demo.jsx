import { useEffect, useState } from 'react';

import { linkIcon } from '../assets';
import { useLazyGetSummaryQuery } from '../Services/article';

const Demo = () => {
  const [article, setArticle] = useState({
    url:'',
    sumary:'',
  });
  const [allArticles, setAllArticles] = useState([]);

  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery ();

  useEffect(() => {
    const articlesFromLocalStorage =JSON.parse(localStorage.getItem('articles')
    )
    if(articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage)
    }

  }, []);

  

  const handleSubmit = async(e) => {
    e.preventDefault();

    const { data } = await getSummary({ articleUrl:article.url });

    if(data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      const updatedAllArticles = [newArticle, ...allArticles];

      setArticle(newArticle);
      setAllArticles(updatedAllArticles);

      localStorage.setItem('articles', JSON.stringify(updatedAllArticles))
    }
  }


  return (
    <section className="mt-16 w-full max-w-x1">
      {/* search*/}
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
          >
            <img
            src={linkIcon}
            alt="link_icon"
            className="absolute left-0 my-2 ml-3 w-5"
            />

          <input
          type="url"
          placeholder="Enter a URL"
          value={article.url}
          onChange={(e) => setArticle({ ...article, url: e.target.value })}
          required
          className="url_input peer"
          />

          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
            >
              ➤
          </button>

        </form>
        {/* Browser URL History */}
        <div className='flex floex-col gap-1 max-h-60 overflow-y-auto'>
          {allArticles.map((item, index) => {
            <div
              key={'link-${index}'}
              onClick={() => setAllArticle(item)}
              className='link_card'
            >
              <div>
                
                </div>
              </div>
          })}

        </div>
      </div>
      {/* Display Results */}    
    </section>
  )
}

export default Demo