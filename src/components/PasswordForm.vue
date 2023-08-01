<template>
    <div class="search_box">
        <div class="search">
            <div class= "select_area">
                <div class="text">Enter Password</div>
            </div>

            <div class="line"></div>

            <div class = "text_and-icon">
                <input
                    v-model="passVal"
                    type="text"
                    class="search_text"
                    id="search_text"
                    placeholder="Enter password ..">
            </div>
        </div>
        <div id="validation_box">
            <h3>Password validations:</h3>
            <p id="length" :class="validationHandler.lenght.name_class">Minimum <b>16 characters</b></p>
            <p id="upper_lower" :class="validationHandler.upper_lower.name_class">At least one Upper and Lower case character</p>
            <p id="two_char" :class="validationHandler.two_char.name_class">Non consecutive chars</p>
            <p id="qty_num" :class="validationHandler.qty_num.name_class">Only 4 numbers</p>
            <p id="con_num" :class="validationHandler.con_num.name_class">Non consecutive numbers</p>
            <p id="sp_ch" :class="validationHandler.sp_ch.name_class">Non consecutive special chars(!@#$%^&*-_+=?)</p>
            <p id="blank_sp" :class="validationHandler.blank_sp.name_class">Non blank spaces</p>
            <p id="no_zero" :class="validationHandler.no_zero.name_class">No zero</p>
        </div>
    </div>
</template>

<script>
import {computed, defineComponent, ref, watch} from "vue"
import { usePasswordStore } from "@/PasswordStore";

export default defineComponent({
    name: "PasswordForm",
    setup() {
        const store = usePasswordStore()
        const passVal = ref('')
        const validationHandler = computed(() => store.validationHandler)

        watch(passVal,async () => {
            await store.evaluatePassword(passVal.value)
        })

        return {
            passVal,
            validationHandler
        }
    },
})
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto);

body {
    background-color : #FAFAFA;
    display : grid;
}

.search_box {
    padding-top : 200px;
}

.search {
    padding-left: 25px;
    display: flex;
    align-items: center;
    margin : auto;
    width : 612px;
    height: 54px;
    background-color : white;
    border-radius: 25px;
    -webkit-box-shadow: 0px 10px 38px 0px rgba(0,0,0,0.1);
    -moz-box-shadow: 0px 10px 38px 0px rgba(0,0,0,0.1);
    box-shadow: 0px 10px 38px 0px rgba(0,0,0,0.1);
}

.select_area {
    color : #4451FE;
    display : flex;
    align-items: center;
    font-family: 'Roboto', sans-serif; line-height:24px;
    font-weight : medium ;
}

.text {
    padding-left:15px;
}

.line {
    margin-left: 15px;
    border-left: 1px solid #D8D8D8;
    height: 40px;
}

.search_text {
    width: 100%;
    border: none;
    margin-left : 15px;
    font-size : 16px;
    font-family: 'Roboto', sans-serif; line-height:24px;
    font-weight : Regular ;
}

::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: #ADB1B8;
}


.text_and-icon {
    width: 410px;
    display: flex;
    align-items: center;
}
.search_icon {
    color : #5E6573;
    transition: all .6s ease-in-out;
    -webkit-transition: all .6s ease-in-out; /** Chrome & Safari **/
    -moz-transition: all .6s ease-in-out; /** Firefox **/
    -o-transition: all .6s ease-in-out; /** Opera **/
}

.search_text:focus {
    outline: none !important;
}

.search_text:focus + .search_icon{
    color : #4451FE;
    transform: translate(55px,0);
    -webkit-transform: translate(55px,0);
    -o-transform: translate(55px,0);
    -moz-transform: translate(55px);
}

#validation_box {
    background: #f1f1f1;
    color: #000;
    position: relative;
    padding: 20px;
    margin-top: 10px;
}

#validation_box p {
    padding: 10px 35px;
    font-size: 18px;
}

.invalid_input {
    color: red
}

.invalid_input:before {
    position: relative;
    left: -35px;
    content: "✖";
}

.valid_input {
    color: green;
}

.valid_input:before {
    position: relative;
    left: -35px;
    content: "✔";
}
</style>