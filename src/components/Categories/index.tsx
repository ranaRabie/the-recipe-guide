import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import styles from './Categories.module.scss';
import CategoryItem from "./CategoryItem";
import CategoryList from '../../apis/categories.json';

const Categories: React.FC = () => {
    return (
        <>
            <div className={styles.categories_section +" py-4"}>
                <Container>
                    <h3 className="text-center mt-4">Explore your Favorite Part of The Meal</h3>
                    <Row>
                        {CategoryList.map(catItem => (
                            <Col key={catItem.id} xs={6} md={3}>
                                <CategoryItem item={catItem} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>

            <div className={styles.categories_section_sub +" my-5"}>
                <Container className={styles.categories_section_sub_container}>
                    <Row className={styles.categories_section_sub_row}>
                        <Col md={9}>
                            <h3 className="mt-3">Is Breakfast your Favorite Meal of The Day ?</h3>
                            <p className="text-light">
                                Breakfast is often called ‘the most important meal of the day’, and for good reason.
                            </p>
                            <p className="text-light">
                                As the name suggests, breakfast breaks the overnight fasting period. It replenishes your supply of glucose to boost your energy levels and alertness, while also providing other essential nutrients required for good health.
                            </p>
                            <p className="text-light">
                                Many studies have shown the health benefits of eating breakfast. It improves your energy levels and ability to concentrate in the short term, and can help with better weight management, reduced risk of type 2 diabetes and heart disease in the long term.
                            </p>
                            <Button variant="primary">Explore Meals</Button>
                        </Col>
                        <Col className={styles.categories_section_sub_img} md={3}>
                            <img src="images/logo-shape-cut.jpg" alt="" />
                        </Col>
                    </Row>
                    {/* <div className={styles.categories_section_sub_img}>
                        <img src="images/logo-shape-cut.jpg" alt="" />
                    </div> */}
                </Container>
            </div>
        </>
    )
}

export default Categories;