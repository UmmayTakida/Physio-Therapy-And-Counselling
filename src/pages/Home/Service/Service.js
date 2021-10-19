
import { Card, Col, } from 'react-bootstrap';
import { Link } from 'react-router-dom';




const Service = ({ service }) => {

    const { id, name, details, img } = service;


    return (

        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body className="card-body">
                        <Card.Title><h3>{name}</h3>
                        </Card.Title>
                        <Card.Text >
                            <p>{details.slice(0, 250)}</p>
                            <Link to={`/serviceDetails/${id}`}>
                                <button>
                                    More details
                                </button>
                            </Link>



                        </Card.Text>

                    </Card.Body>
                </Card>
            </Col>


        </div>

    );
};

export default Service;