import styled, { css } from "styled-components";
import { Button } from "./Button";

import { ReactComponent as RightArrow } from "../assets/icons/arrow-right.svg";
import { ReactComponent as ChartIcon } from "../assets/icons/shopping-cart.svg";

export const StyledFrame = styled.div`
  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.gray.v5};
      border-color: ${theme.colors.gray.v4};
      border-width: 2px;
      border-radius: 8px;
      border-style: solid;
      box-sizing: border-box;
    `;
  }}
`;

export const StyledCard = styled(StyledFrame)`
  display: flex;
  flex-direction: column;
  min-width: 288px;
  min-height: 322px;
  max-height: 348px;
  max-width: 320px;
  ${({ theme }) => {
    return css`
      box-shadow: 0 8px 24px 0 ${theme.colors.gray.v4};
    `;
  }}
`;

export const ImageWrapper = styled(StyledFrame)`
  align-items: center;
  box-sizing: border-box;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  display: flex;
  justify-content: center;
  max-height: 256px;
  min-height: 200px;
  max-width: 320px;
  padding: 2rem;
  position: relative;
`;

type ImageProps = {
  $imageSrc: string;
};

export const Image = styled.div<ImageProps>`
  ${({ $imageSrc }) => {
    return css`
      width: 100%;
      height: 100%;
      background-image: url(${$imageSrc});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      aspect-ratio: 4/3;
    `;
  }}
`;

export const StyledCardTitle = styled(StyledFrame)`
  border: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
  max-height: 5.75rem;
  padding: 1rem;
`;

export const ProductNameText = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.75rem;
  margin: 0;
  padding: 0 1rem;
`;

type CardTitleProps = {
  title: string;
};
export function CardTitle(props: CardTitleProps) {
  return (
    <StyledCardTitle>
      <ProductNameText>{props.title}</ProductNameText>
      <Button variant="navigation" RightIcon={RightArrow}>
        View More
      </Button>
    </StyledCardTitle>
  );
}

export const RemoveAddButton = styled.div`
  bottom: 1rem;
  right: 1.5rem;
  position: absolute;
`;

type ProductCardProps = {
  imageSrc: string;
  title: string;
};
export function ProductCard(props: ProductCardProps) {
  return (
    <StyledCard>
      <ImageWrapper>
        <Image $imageSrc={props.imageSrc}></Image>
        <RemoveAddButton>
          <Button variant="primary" RightIcon={ChartIcon} />
        </RemoveAddButton>
      </ImageWrapper>
      <CardTitle title={props.title} />
    </StyledCard>
  );
}
