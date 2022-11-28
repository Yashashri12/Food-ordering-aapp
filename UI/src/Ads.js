import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useGlobleContext } from "./context";
import Layout from './layout'
import { Link } from 'react-router-dom'


import Hotelinfo from "./Hotelinfo"

const Ads = () => {
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
            _id,name,location,image,url}=curPost;
        return(
          <Col>
          <div className="card" key={_id}>
              <p>{_id}</p>
              <h2>{name}</h2>
              <img src={image}/>
              <p>Loaction: {location}</p>
              <div className='card-button'>
                <a href={url}>Read More</a>
                </div>
              {/* <p>{name}</p> */}
              {/* <div className='card-button'>
              <Link to={'/' + _id}>Read More</Link>
              <Route path={_id} element={<Hotelinfo id={_id} />} /> */}
              {/* </div> */}
              {/* <div className='' */}
             
  
  {/* <Link href="/Hotelinfo">
    Hotelinfo
  </Link> */}
              
              
          </div>
          </Col>
        )
      })}
      </Row>
    </Container>
    </>
  );
};

export default Ads;
