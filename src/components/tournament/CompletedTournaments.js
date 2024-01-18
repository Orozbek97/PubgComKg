import React from 'react';
import Container from "react-bootstrap/Container";
import {Button, Card, ListGroup} from "react-bootstrap";

const CompletedTournaments = () => {
    return (
        <>
            <Container>
                <h3 className={'completed-tournament-title'} > Завершенные Турниры </h3>
                <div className="row row-cols-lg-4 row-cols-md-3  row-cols-2 my-auto">
                    <div className="col my-2">
                        <div className="box">
                            <Card className={'Card'}>
                                <Card.Title className={'Card-title'}> PUBG Mobile / Solo #1 </Card.Title>
                                <Card.Img variant="top" src="https://pubg.com.kg/images/tournament-covers/image-tournaments3.jpeg" />

                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item className="List-Group-Item">Дата: <p>23.02.2023</p></ListGroup.Item>
                                    <ListGroup.Item className="List-Group-Item" >Время:<p>18:00</p>  /Бишкек </ListGroup.Item>
                                    <ListGroup.Item className="List-Group-Item" >Взнос: <p>100 сом </p></ListGroup.Item>
                                </ListGroup>
                                <Card.Body className={'Card-Body'}>
                                    <Button variant='info' style={{width:'100%'}} className={'button-more-information'}> подробнее </Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <div className="col my-2">
                        <div className="box">
                            <Card className={'Card'}>
                                <Card.Title className={'Card-title'} > PUBG Mobile / Solo #2 </Card.Title>
                                <Card.Img variant="top" src="https://pubg.com.kg/images/tournament-covers/image-tournaments4.jpeg" />

                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item className="List-Group-Item">Дата: <p>23.02.2023</p></ListGroup.Item>
                                    <ListGroup.Item className="List-Group-Item" >Время:<p>18:00</p>  /Бишкек </ListGroup.Item>
                                    <ListGroup.Item className="List-Group-Item" >Взнос: <p>100 сом </p></ListGroup.Item>
                                </ListGroup>
                                <Card.Body className={'Card-Body'} >
                                    <Button variant='info' style={{width:'100%'}} className={'button-more-information'}> подробнее </Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <div className="col my-2">
                        <div className="box">
                            <Card className={'Card'}>
                                <Card.Title className={'Card-title'} > PUBG Mobile / Solo #3 </Card.Title>
                                <Card.Img variant="top" src="https://pubg.com.kg/images/tournament-covers/image-tournaments5.jpeg" />

                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item className="List-Group-Item">Дата: <p>23.02.2023</p></ListGroup.Item>
                                    <ListGroup.Item className="List-Group-Item" >Время:<p>18:00</p>  /Бишкек </ListGroup.Item>
                                    <ListGroup.Item className="List-Group-Item" >Взнос: <p>100 сом </p></ListGroup.Item>
                                </ListGroup>
                                <Card.Body className={'Card-Body'} >
                                    <Button variant='info' style={{width:'100%'}} className={'button-more-information'}> подробнее </Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <div className="col my-2">
                        <div className="box">
                            <Card className={'Card'}>
                                <Card.Title className={'Card-title'} > PUBG Mobile / Solo #4 </Card.Title>
                                <Card.Img variant="top" src="https://pubg.com.kg/images/tournament-covers/image-tournaments6.jpeg" />

                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item className="List-Group-Item">Дата: <p>23.02.2023</p></ListGroup.Item>
                                    <ListGroup.Item className="List-Group-Item" >Время:<p>18:00</p>  /Бишкек </ListGroup.Item>
                                    <ListGroup.Item className="List-Group-Item" >Взнос: <p>100 сом </p></ListGroup.Item>
                                </ListGroup>
                                <Card.Body className={'Card-Body'} >
                                    <Button variant='info' style={{width:'100%'}} className={'button-more-information'}> подробнее </Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <div className="col my-2">
                        <div className="box">
                            <Card className={'Card'}>
                                <Card.Title className={'Card-title'} > PUBG Mobile / Solo #3 </Card.Title>
                                <Card.Img variant="top" src="https://pubg.com.kg/images/tournament-covers/image-tournaments7.jpeg" />

                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item className="List-Group-Item">Дата: <p>23.02.2023</p></ListGroup.Item>
                                    <ListGroup.Item className="List-Group-Item" >Время:<p>18:00</p>  /Бишкек </ListGroup.Item>
                                    <ListGroup.Item className="List-Group-Item" >Взнос: <p>100 сом </p></ListGroup.Item>
                                </ListGroup>
                                <Card.Body className={'Card-Body'} >
                                    <Button variant='info' style={{width:'100%'}} className={'button-more-information'}> подробнее </Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <div className="col my-2">
                        <div className="box">
                            <Card className={'Card'}>
                                <Card.Title className={'Card-title'} > PUBG Mobile / Solo #4 </Card.Title>
                                <Card.Img variant="top" src="https://pubg.com.kg/images/tournament-covers/image-tournaments8.jpeg" />

                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item className="List-Group-Item">Дата: <p>23.02.2023</p></ListGroup.Item>
                                    <ListGroup.Item className="List-Group-Item" >Время:<p>18:00</p>  /Бишкек </ListGroup.Item>
                                    <ListGroup.Item className="List-Group-Item" >Взнос: <p>100 сом </p></ListGroup.Item>
                                </ListGroup>
                                <Card.Body className={'Card-Body'} >
                                    <Button variant='info' style={{width:'100%'}} className={'button-more-information'}> подробнее </Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default CompletedTournaments;