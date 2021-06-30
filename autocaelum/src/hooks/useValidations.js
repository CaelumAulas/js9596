export default function useValidations() {

    const validations = {
        isEmpty(msgErro) {
            return function (valor) {
                if (!valor.trim()) {
                    return msgErro;
                }

                return '';
            }
        },

        isEmail(msgErro, required = true) {
            return function(valor) {
                let validadorEmail = /^[a-zA-Z0-9_+-]+[a-zA-Z0-9._+-]*[a-zA-Z0-9_+-]+@[a-zA-Z0-9_+-]+[a-zA-Z0-9._+-]*[.]{1,1}[a-zA-Z]{2,}$/;
                if ((required || valor) && !validadorEmail.test(valor)) {
                    return msgErro;
                }

                return '';
            }
        },

        isTelefoneOuCelular(msgErro, required = true) {
            return function(valor) {
                let validadorTelCel = /^\([0-9]{2}\) 9?[0-9]{4}-[0-9]{4}$/;
                if ((required || valor) && !validadorTelCel.test(valor)) {
                    return msgErro;
                }

                return '';
            }
        }
    }

    return validations;
}