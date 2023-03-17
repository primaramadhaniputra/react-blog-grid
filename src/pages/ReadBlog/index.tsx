import { useEffect, useState } from "react";
import { Article, BlogTitle, CategoryContainer, Wrapper } from "./styles";

export default function ReadBlog() {
  const [article, setArticle] = useState<any[]>([])

  const blogId = Number(localStorage.getItem('blogId'))


  useEffect(() => {
    fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@primaramadhanip")
      .then(res => res.json())
      .then(data => setArticle(data.items));
  }, []);

  if (article.length < 1) {
    return <p>Loading....</p>
  }


  return (
    <Wrapper>
      <BlogTitle>{article[blogId].title}</BlogTitle>
      <Article dangerouslySetInnerHTML={{
        __html: article[blogId].content
      }} />
      <CategoryContainer>
        {
          article[blogId].categories.map((item: string, idx: number) => <p key={idx}>{item}</p>)
        }
      </CategoryContainer>
    </Wrapper>
  )
}
