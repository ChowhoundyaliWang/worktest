import { checkInputError } from "./validator";

export class App {
    constructor() {
        this.form = document.getElementById("panel");
        this.inputDigits = document.getElementById("digits");
        this.btnConvert = document.getElementById("submit");
        this.txtResult = document.getElementById("result");
        this.txtErr = document.getElementById("error");
        this.form.addEventListener('submit', e => {
            this.onConvert();
            e.preventDefault();
        });
    }
    /**
     * @private
     */
    async onConvert() {
        try {
            const value = this.inputDigits.value;
            checkInputError(value);
            const result = await window.castSpell(value);
            this.onSuccess(result);
        } catch (err) {
            this.onError(err);
        }
    }
}