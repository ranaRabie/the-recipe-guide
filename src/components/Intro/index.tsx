import { Row, Col, Button, Container } from "react-bootstrap";
import styles from "./Intro.module.scss";

const Intro: React.FC = () => {
    return (
        <Container className="my-4">
            <div className={styles.intro_section}>
                <Row className={styles.intro_section_row}>
                    <Col md={5}>
                        <div className={styles.intro_section_imgs}>
                            <img src="images/intro-1.jpg" alt="" />
                            <img src="images/intro-2.jpg" alt="" />
                        </div>
                    </Col>
                    <Col md={7}>
                        <h3>
                            Enjoy your <span className="text-primary">Special</span><br />
                            Delicious Meal. 
                        </h3>
                        <p className="text-light">We make it easy for you to get perfect recipe for a enjoyful delecious meal.</p>
                        <Button variant="primary">Explore Meals</Button>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Intro;