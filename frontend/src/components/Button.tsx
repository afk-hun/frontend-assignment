import { css, styled } from "styled-components";

import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "transparent" | "navigation";

type StyledButtonProps = {
  $variant: ButtonVariant;
};

export const StyledButton = styled.button<StyledButtonProps>`
  align-items: center;
  border-style: solid;
  border-radius: 8px;
  border-width: 1.5px;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  font-size: 1rem;
  font-weight: 600;
  gap: 0.5rem;
  height: 40px;
  min-width: 40px;
  justify-content: center;
  line-height: 1.5rem;
  padding: 0 1rem;
  transition: background-color 300ms, border-color 300ms, color 300ms,
    box-shadow 300ms, outline 300ms;

  ${({ $variant, theme }) => {
    const buttonStyle = theme.button[$variant];
    const hasUnderline = $variant === "navigation";

    return css`
      color: ${buttonStyle.default.textColor};
      fill: ${buttonStyle.default.textColor};
      background-color: ${buttonStyle.default.backgroundColor};
      border-color: ${buttonStyle.default.borderColor};
      text-decoration: ${hasUnderline ? "underline" : "none"};

      &:focus-visible {
        color: ${buttonStyle.focused.textColor};
        fill: ${buttonStyle.focused.textColor};
        background-color: ${buttonStyle.focused.backgroundColor};
        border-color: ${buttonStyle.focused.borderColor};
        outline: 3px solid ${buttonStyle.focused.shadowColor + 33};
      }
      &:hover {
        color: ${buttonStyle.hovered.textColor};
        fill: ${buttonStyle.hovered.textColor};
        background-color: ${buttonStyle.hovered.backgroundColor};
        border-color: ${buttonStyle.hovered.borderColor};
        box-shadow: 0 4px 16px 0 ${buttonStyle.hovered.shadowColor + 33};
      }
      &:active {
        color: ${buttonStyle.pressed.textColor};
        fill: ${buttonStyle.pressed.textColor};
        background-color: ${buttonStyle.pressed.backgroundColor};
        border-color: ${buttonStyle.pressed.borderColor};
      }
      &:disabled {
        color: ${buttonStyle.disabled.textColor};
        fill: ${buttonStyle.disabled.textColor};
        background-color: ${buttonStyle.disabled.backgroundColor};
        border-color: ${buttonStyle.disabled.borderColor};
      }
    `;
  }}
`;

type IconType = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & {
    title?: string | undefined;
  }
>;

type ButtonProps = {
  children?: ReactNode;
  LeftIcon?: IconType | undefined;
  RightIcon?: IconType | undefined;
  variant?: ButtonVariant;
};

export function Button(props: ButtonProps) {
  const { LeftIcon, children, RightIcon, variant } = props;
  return (
    <StyledButton type="button" $variant={variant ?? "primary"}>
      {LeftIcon && <LeftIcon fill="" />}
      {children && children}
      {RightIcon && <RightIcon fill="" />}
    </StyledButton>
  );
}
