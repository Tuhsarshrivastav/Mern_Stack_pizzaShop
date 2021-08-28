import { Container, Row, Col, Table, Image } from "react-bootstrap";
import { FiPhoneCall } from "react-icons/fi";
import { ImMobile } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
const Contact = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <Col md={6}>
            <h1>Mern PizzaShop</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse odio
              expedita, nulla quo assumenda ipsum similique hic inventore a rem
              numquam repellat, neque quibusdam totam culpa praesentium deserunt
              debitis quas, nihil officia qui harum? Officia laudantium nam
              omnis dolore maxime tempora recusandae illum, eveniet magni.
              Pariatur odio vitae adipisci corrupti nam sit repellat asperiores
              debitis recusandae earum, aperiam fugiat ab illo aliquid excepturi
              magnam tenetur et reiciendis ex aliquam. Molestiae, rerum voluptas
              nam aut obcaecati repudiandae laboriosam nihil a consequatur quo
              inventore amet ipsa id ea, error iure quibusdam soluta impedit
              voluptatum quidem accusantium? Suscipit cum nisi quod atque
              nostrum, pariatur doloremque ipsam assumenda sequi quisquam minima
              earum! Perspiciatis explicabo corrupti quasi odit iusto ipsa
              laborum voluptatem repudiandae, ratione consectetur nostrum fuga
              et! Blanditiis tempora quaerat voluptatum alias labore atque a
              veritatis? Laborum pariatur minima dolores velit itaque quisquam
              porro facilis nobis ea, fugiat soluta possimus quod aut
              dignissimos suscipit repudiandae vel ipsum ipsam magni cupiditate.
              Possimus quaerat unde qui molestias cupiditate excepturi quisquam
              tempora veritatis labore in non autem maxime velit, suscipit
              commodi voluptates iure fugiat voluptatum? Ex a consequatur
              cupiditate magnam dicta omnis minus illo quaerat reiciendis.
              Eligendi ipsam enim in optio a obcaecati quos eos, ea reiciendis.
            </p>
            <Table striped bordered hover className="text-center">
              <thead>
                <tr>
                  <th className="bg-warning text-center" colSpan={3}>
                    # Contact details
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <FiPhoneCall />
                  </td>
                  <td>Phone</td>
                  <td>123456789</td>
                </tr>
                <tr>
                  <td>
                    <ImMobile />
                  </td>
                  <td>call</td>
                  <td>123456789</td>
                </tr>
                <tr>
                  <td>
                    <AiOutlineMail />
                  </td>
                  <td>Email</td>
                  <td>123456789</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md={6}>
            <Image
              src="/images/farmhouse.jpg"
              style={{ width: "100%", height: "100%" }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
