import { CartProvider } from "../../Providers/Cart";
import { CatalogueProvider } from "../../Providers/Catalogue";
import ProductList from "../ProductList";
import { ContainerMain, Title } from "./style";

const Display = () => {
  return (
    <div>
      <Title>Carrinho Com Context</Title>
      <CatalogueProvider>
        <CartProvider>
          <ContainerMain>
            <h2>Produtos na Loja</h2>
            <ProductList type="catalogue" />
            <h2>Produtos no Carrino</h2>
            <ProductList type="cart" />
          </ContainerMain>
        </CartProvider>
      </CatalogueProvider>
    </div>
  );
};
export default Display;
