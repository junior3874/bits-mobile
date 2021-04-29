import Toast from "react-native-toast-message";

export const toasts = {
  error() {
    Toast.show({
      type: "error",
      text1: "Erro",
      text2: "Falha ao fazer cadastro!",
    });
  },
  success() {
    Toast.show({
      type: "success",
      text1: "Successo",
      text2: "Cadastro feito com sucesso!",
    });
  },
};
