import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useGlobleContext } from "./context";

const Hotelinfo = () => {
    const {hits,isLoading}=useGlobleContext();
  
 
  if (isLoading) {
    return (
      <>
        <h1>Loading.....</h1>
      </>
    );
  }
  return (
    <>
    <Container>
      <Row>
      {hits.map((curPost)=>{
        const{
            _id,name,location,description,price}=curPost;
        return(
          <Col>
          <div className="card" key={_id}>
              <p>{_id}</p>
              <h3>{name}</h3>
              <p>Loaction: {location}</p>
              <h2>{name}</h2>
              <p>{description}</p>
              <h2>{price}</h2>
              <div className='card-button'>
                <a href={"http://localhost:8000/?"} target='-blank'>Topping</a>

              </div>
              
              
          </div>
          </Col>
        )
      })}
      </Row>
    </Container>
    </>
  );
};

export default Hotelinfo;
