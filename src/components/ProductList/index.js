import { useContext } from "react";
import { CartContext } from "../../Providers/Cart";
import { CatalogueContext } from "../../Providers/Catalogue";
import Button from "../Button";
import { BoxList, Container } from "./style";

const ProductList = ({ type }) => {
  const { catalogue } = useContext(CatalogueContext);
  const { cart } = useContext(CartContext);
  return (
    <Container>
      {type === "catalogue" &&
        catalogue.map((item, index) => (
          <BoxList key={index}>
            <p>{item.name}</p>
            <Button type={type} item={item} />
          </BoxList>
        ))}
      {type === "cart" &&
        cart.map((item, index) => (
          <BoxList key={index}>
            <p>{item.name}</p>
            <Button type={type} item={item} />
          </BoxList>
        ))}
    </Container>
  );
};
export default ProductList;
