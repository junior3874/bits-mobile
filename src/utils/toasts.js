import Toast from "react-native-toast-message";

export const toasts = {
  error(text2) {
    Toast.show({
      type: "error",
      text1: "Erro",
      text2,
    });
  },
  success(text2) {
    Toast.show({
      type: "success",
      text1: "Successo",
      text2,
    });
  },
};
