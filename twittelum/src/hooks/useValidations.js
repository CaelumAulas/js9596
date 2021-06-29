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

        isEmail(msgErro) {
            return function(valor) {
                let validadorEmail = /^[a-zA-Z0-9_+-]+[a-zA-Z0-9._+-]*[a-zA-Z0-9_+-]+@[a-zA-Z0-9_+-]+[a-zA-Z0-9._+-]*[.]{1,1}[a-zA-Z]{2,}$/;
                if (!validadorEmail.test(valor)) {
                    return msgErro;
                }

                return '';
            }
        }
    }

    return validations;
}