import { Container, Wrapper } from "./styles";
import { dataDumy } from "../../utils/dummy";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useEffect, useState } from "react";

const imageUlr = ['mountain.jpg', 'mountain2.jpg', 'mountain3.jpg', 'moutain4.jpg', 'mountain5.jpg', 'mountain.jpg', 'mountain2.jpg', 'mountain3.jpg', 'moutain4.jpg', 'mountain5.jpg']

export default function Home() {
  let navigate = useNavigate();
  const [articles, setArticles] = useState<any[]>([])

  const handleReadBlog = (id: number) => {
    localStorage.setItem('blogId', id.toString())
    return navigate("/read")
  }

  useEffect(() => {
    fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@Primaramadhanip")
      .then(res => res.json())
      .then(data => setArticles(data.items));
  }, []);

  return (
    <Wrapper>
      {
        articles.map((item, idx) =>
          <Container key={idx} onClick={() => handleReadBlog(idx)}>
            <div style={{ position: 'absolute', top: '0', left: '0', right: '0', bottom: '0' }}>
              <LazyLoadImage src={`./image/${imageUlr[idx]}`} alt="images" width={'100%'} height="100%" style={{ objectFit: "cover" }} />
            </div>
            <p>{item.title}</p>
            <p>publish : {item.pubDate}</p>
          </Container>
        )
      }
    </Wrapper>
  )
}
