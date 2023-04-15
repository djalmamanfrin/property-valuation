class Masks {
    input = {};
    masks = {
        whatsapp: { mask: "(99) 99999-9999" },
        sms: { mask: "+99 (99) 9 9999-9999" },
        code: { mask: "9-9-9-9" },
        cpf: { mask: "999.999.999-99" }
    };
    constructor(id) {
        this.input = document.querySelector(`#${id}`);
    }

    putMask(type) {
        this.type = type;
        this.input.placeholder = this.masks[type].mask;
        this.input.setAttribute("maxlength", this.masks[type].mask.length);
        this.input.onkeydown = (e) => {
            if (
                this.input.value.length < this.masks[type].mask.length &&
                !(e.key === "Backspace" || e.key === "Delete")
            ) {
                while (isNaN(parseInt(this.masks[type].mask[this.input.value.length])))
                    this.input.value += this.masks[type].mask[this.input.value.length];
                // console.log(this.masks[type].mask[this.input.value.length]);
            }
            // console.log(e.key);
        };
    }
    removeMask() {
        this.value = this.input.value;
        const result = Array.from(
            new Set(this.masks[this.type].mask.replace(/\d+/g, ""))
        );
        result.forEach(
            (c) => (this.value = this.value.replace(new RegExp("\\" + c, "g"), ``))
        );
        return this.value;
    }
}

const mask = new Masks("whats")
mask.putMask("whatsapp")
