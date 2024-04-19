import { useState } from "react";
import { ProductCard } from "../components/Card";
import { useProductsSelector } from "../store/hooks";
import styled from "styled-components";

import { ReactComponent as ChevronLeftLine } from "../assets/icons/chevron-left-to-line.svg";
import { ReactComponent as ChevronLeft } from "../assets/icons/chevron-left.svg";
import { ReactComponent as ChevronRightLine } from "../assets/icons/chevron-right-to-line.svg";
import { ReactComponent as ChevronRight } from "../assets/icons/chevron-right.svg";
import { ReactComponent as MoreDots } from "../assets/icons/more.svg";
import { Button } from "../components/Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
`;

const ProductGrid = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 2rem;
  justify-content: center;
  max-width: 1400px;
`;

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
`;

type PaginationProps = {
  startingPage: number;
};
function Pagination(props: PaginationProps) {
  const { startingPage } = props;
  return (
    <PaginationContainer>
      <Button variant="transparent" LeftIcon={ChevronLeftLine} />
      <Button variant="transparent" LeftIcon={ChevronLeft} />
      <Button variant="transparent">{startingPage + 1}</Button>
      <Button variant="transparent">{startingPage + 2}</Button>
      <Button variant="transparent">{startingPage + 3}</Button>
      <Button variant="transparent">{startingPage + 4}</Button>
      <MoreDots />
      <Button variant="transparent" LeftIcon={ChevronRight} />
      <Button variant="transparent" LeftIcon={ChevronRightLine} />
    </PaginationContainer>
  );
}

export function LandingPage() {
  const [pageId, setPageId] = useState(0);

  const products = useProductsSelector((state) => {
    return state.products.separatedProducts;
  });

  return (
    <Container>
      <ProductGrid>
        {products &&
          products[pageId].map((item) => {
            return (
              <ProductCard
                key={item.id}
                imageSrc={item.image}
                title={item.name}
              ></ProductCard>
            );
          })}
      </ProductGrid>
      <Pagination startingPage={pageId} />
    </Container>
  );
}
