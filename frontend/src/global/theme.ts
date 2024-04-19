const colors = {
  purple: {
    v1: "#4227C2",
    v2: "#5032CD",
    v3: "#5C34D1",
    v4: "#7652DC",
    v5: "#F7F2FB",
  },
  gray: {
    v1: "#272937",
    v2: "#7D7F90",
    v3: "#D2D3E1",
    v4: "#EFF0F5",
    v5: "#FFFFFF",
  },
};

export const globalTheme = {
  colors: colors,
  button: {
    primary: {
      default: {
        backgroundColor: colors.purple.v2,
        borderColor: colors.purple.v2,
        textColor: colors.gray.v5,
      },
      hovered: {
        backgroundColor: colors.purple.v3,
        borderColor: colors.purple.v3,
        shadowColor: colors.purple.v2,
        textColor: colors.gray.v5,
      },
      pressed: {
        backgroundColor: colors.purple.v4,
        borderColor: colors.purple.v4,
        textColor: colors.gray.v5,
      },
      focused: {
        backgroundColor: colors.purple.v1,
        borderColor: colors.purple.v1,
        shadowColor: colors.purple.v2,
        textColor: colors.gray.v5,
      },
      disabled: {
        backgroundColor: colors.gray.v4,
        borderColor: colors.gray.v4,
        textColor: colors.gray.v3,
      },
    },
    secondary: {
      default: {
        textColor: colors.purple.v2,
        backgroundColor: colors.gray.v5,
        borderColor: colors.purple.v2,
      },
      hovered: {
        textColor: colors.purple.v2,
        backgroundColor: colors.gray.v5,
        borderColor: colors.purple.v2,
        shadowColor: colors.purple.v2,
      },
      pressed: {
        textColor: colors.purple.v2,
        backgroundColor: colors.purple.v5,
        borderColor: colors.purple.v2,
      },
      focused: {
        textColor: colors.purple.v2,
        backgroundColor: colors.gray.v5,
        borderColor: colors.purple.v2,
        shadowColor: colors.purple.v2,
      },
      disabled: {
        textColor: colors.gray.v3,
        backgroundColor: colors.gray.v5,
        borderColor: colors.gray.v3,
      },
    },
    transparent: {
      default: {
        textColor: colors.gray.v1,
        backgroundColor: colors.gray.v5 + "00",
        borderColor: colors.gray.v5 + "00",
      },
      hovered: {
        textColor: colors.purple.v3,
        backgroundColor: colors.gray.v5 + "00",
        borderColor: colors.gray.v5 + "00",
      },
      pressed: {
        textColor: colors.purple.v2,
        backgroundColor: colors.gray.v5 + "00",
        borderColor: colors.gray.v5 + "00",
      },
      focused: {
        textColor: colors.purple.v1,
        backgroundColor: colors.gray.v5 + "00",
        borderColor: colors.gray.v5 + "00",
      },
      disabled: {
        textColor: colors.gray.v3,
        backgroundColor: colors.gray.v5 + "00",
        borderColor: colors.gray.v5 + "00",
      },
    },
    navigation: {
      default: {
        textColor: colors.purple.v2,
        backgroundColor: colors.gray.v5,
        borderColor: colors.gray.v5,
      },
      hovered: {
        textColor: colors.purple.v3,
        backgroundColor: colors.gray.v5,
        borderColor: colors.gray.v5,
      },
      pressed: {
        textColor: colors.purple.v4,
        backgroundColor: colors.gray.v5,
        borderColor: colors.gray.v5,
      },
      focused: {
        textColor: colors.purple.v1,
        backgroundColor: colors.gray.v5,
        borderColor: colors.gray.v5,
      },
      disabled: {
        textColor: colors.gray.v3,
        backgroundColor: colors.gray.v5,
        borderColor: colors.gray.v5,
      },
    },
  },
};
