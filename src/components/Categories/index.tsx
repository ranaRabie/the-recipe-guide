import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CategoryItem from "./CategoryItem";
import CategoryList from '../../apis/categories.json'
// import dessertImg from "../../assets/desert.jpg";
// import mainDishImg from "../../assets/main-dish.jpg";
// import saladImg from "../../assets/salad.jpg";

const Categories: React.FC = () => {
    // const categories = [
    //     {
    //         name: 'Salads',
    //         id: 3,
    //         image: saladImg
    //     },
    //     {
    //         name: 'Main Dish',
    //         id: 2,
    //         image: mainDishImg
    //     },
    //     {
    //         name: 'Deserts',
    //         id: 1,
    //         image: dessertImg
    //     }
    // ]
    return (
        <Container>
            <h3 className="text-center mt-3">Explore your Favorite Part of The Meal</h3>
            <Row>
                {CategoryList.map(catItem => (
                    <Col key={catItem.id} xs={6} md={4}>
                        <CategoryItem item={catItem} />
                    </Col>
                ))}
            </Row>
            
        </Container>
    )
}

export default Categories;