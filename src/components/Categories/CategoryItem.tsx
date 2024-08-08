import styles from './Categories.module.scss';

interface Category {
    item: {
        id: number;
        name: string;
        image?: string;
    }
}

const CategoryItem: React.FC<Category> = ({item}) => {
    return (
        <div className={styles.category} >
            <img src={item.image} />
            <h3>{item.name}</h3>
        </div>
    )
}

export default CategoryItem;