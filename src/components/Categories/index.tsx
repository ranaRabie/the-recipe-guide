import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import styles from './Categories.module.scss';
import CategoryItem from "./CategoryItem";
import CategoryList from '../../apis/categories.json';

const Categories: React.FC = () => {
    return (
        <Container>
            <h3 className="text-center mt-4">Explore your Favorite Part of The Meal</h3>
            <Row>
                {CategoryList.map(catItem => (
                    <Col key={catItem.id} xs={6} md={4}>
                        <CategoryItem item={catItem} />
                    </Col>
                ))}
            </Row>

            <Row className={styles.categories_sub_section +" my-5"}>
                <Col md={6}>
                    <h3 className="mt-3">Is Breakfast your Favorite Meal of The Day ?</h3>
                    <p>
                        Breakfast is often called ‘the most important meal of the day’, and for good reason.
                    </p>
                    <p>
                        As the name suggests, breakfast breaks the overnight fasting period. It replenishes your supply of glucose to boost your energy levels and alertness, while also providing other essential nutrients required for good health.
                    </p>
                    <p>
                        Many studies have shown the health benefits of eating breakfast. It improves your energy levels and ability to concentrate in the short term, and can help with better weight management, reduced risk of type 2 diabetes and heart disease in the long term.
                    </p>
                    <Button variant="primary">Explore Meals</Button>
                </Col>
                <Col className={styles.categories_sub_section_img} md={6}>
                    <img src="images/breakfast.jpg" alt="" />
                </Col>
            </Row>
            
            
        </Container>
    )
}

export default Categories;