import { Container, Wrapper } from "./styles";
import { dataDumy } from "../../utils/dummy";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const imageUlr = ['mountain.jpg', 'mountain2.jpg', 'mountain3.jpg', 'moutain4.jpg', 'mountain5.jpg', 'mountain.jpg', 'mountain2.jpg', 'mountain3.jpg', 'moutain4.jpg', 'mountain5.jpg']

export default function Home() {
  let navigate = useNavigate();

  const handleReadBlog = () => {
    return navigate("/read")
  }

  return (
    <Wrapper>
      {
        dataDumy.map((item, idx) =>
          <Container key={item.id} onClick={handleReadBlog}>
            <div style={{ position: 'absolute', top: '0', left: '0', right: '0', bottom: '0' }}>
              <LazyLoadImage src={`./image/${imageUlr[idx]}`} alt="images" width={'100%'} height="100%" style={{ objectFit: "cover" }} />
            </div>
            <p>{item.title}</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit...</p>
          </Container>
        )
      }
    </Wrapper>
  )
}
