import ProductItem from './ProductItem';
import classes from './Products.module.css';

const PRODUCTS = [
    {
        id: 1,
        price: 8,
        title: 'First Product',
        description: 'The First Book Description'
    },
    {
        id: 2,
        price: 10,
        title: 'Second Product',
        description: 'The Second Book Description'
    }
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
          {PRODUCTS.map(item =>
              <ProductItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  description={item.description}
              />
          )}
      </ul>
    </section>
  );
};

export default Products;
