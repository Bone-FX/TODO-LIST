export class Form {
    constructor(form, controls) {
        this.form = form
        this.conrols = controls
    }

    value() {
        const value = {}
        Object.keys(this.conrols).forEach(field => {
            value[field] = this.form[field].value
        })
        return value
    }

    isValid() {
    let isValidateForm = true

    Object.keys(this.conrols).forEach((field) =>{
        const validators = this.conrols[field]

        let isValid = true
        validators.forEach(validator => {
            isValid = validator(this.form[field].value) && isValid
        })

        isValidateForm = isValid && isValidateForm

    })


    return isValidateForm
    }
}

