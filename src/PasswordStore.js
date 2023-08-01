import {defineStore} from 'pinia'
import {
    passwordLength,
    upperAndLowerCase,
    consecutiveTwoCharEquals,
    quantityOfNumbers,
    consecutiveNumbers,
    consecutiveSpecialChar,
    withNoBlanckSpaces,
    withNoZero,
} from "@/validationRules";

export const usePasswordStore = defineStore('passwordStore', {
    state: () => {
        return {
            validationHandler: {
                lenght: {
                    name_class: 'invalid_input'
                },
                upper_lower: {
                    name_class: 'invalid_input'
                },
                two_char: {
                    name_class: 'invalid_input'
                },
                qty_num: {
                    name_class: 'invalid_input'
                },
                con_num: {
                    name_class: 'invalid_input'
                },
                sp_ch: {
                    name_class: 'invalid_input'
                },
                blank_sp: {
                    name_class: 'invalid_input'
                },
                no_zero: {
                    name_class: 'invalid_input'
                }
            },
        }
    },

    actions: {
        evaluatePassword (password) {
            this.$state.validationHandler.lenght.name_class = (passwordLength(password)) ? 'valid_input' : 'invalid_input'
            this.$state.validationHandler.upper_lower.name_class = (upperAndLowerCase(password)) ? 'valid_input' : 'invalid_input'
            this.$state.validationHandler.two_char.name_class = (consecutiveTwoCharEquals(password)) ? 'valid_input' : 'invalid_input'
            this.$state.validationHandler.qty_num.name_class = (quantityOfNumbers(password)) ? 'valid_input' : 'invalid_input'
            this.$state.validationHandler.con_num.name_class = (consecutiveNumbers(password)) ? 'valid_input' : 'invalid_input'
            this.$state.validationHandler.sp_ch.name_class = (consecutiveSpecialChar(password)) ? 'valid_input' : 'invalid_input'
            this.$state.validationHandler.blank_sp.name_class = (withNoBlanckSpaces(password)) ? 'valid_input' : 'invalid_input'
            this.$state.validationHandler.no_zero.name_class = (withNoZero(password)) ? 'valid_input' : 'invalid_input'
        }
    },

    getters: {
        getValidationHandler: state => state.validationHandler
    }
})