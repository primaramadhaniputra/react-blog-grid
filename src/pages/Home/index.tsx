import { Container, Wrapper } from "./styles";
import { dataDumy } from "../../utils/dummy";

const imageUlr = ['mountain.jpg', 'mountain2.jpg', 'mountain3.jpg', 'moutain4.jpg', 'mountain5.jpg', 'mountain.jpg', 'mountain2.jpg', 'mountain3.jpg', 'moutain4.jpg', 'mountain5.jpg']

export default function Home() {
  return (
    <Wrapper>
      {
        dataDumy.map((item, idx) =>
          <Container key={item.id} style={{ backgroundImage: `url(./image/${imageUlr[idx]})` }}>
            <p>{item.title}</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit...</p>
          </Container>
        )
      }
    </Wrapper>
  )
}
