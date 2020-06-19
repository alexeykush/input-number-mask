const input = document.querySelector("input");
const mask = "+380(__)___-__-__";

const init = (input, mask) => {
    input
        .addEventListener("input", e => {
            const { value } = e.target;

            let process = "";
            let pointer = 0;

            if(value) {
                for(let entity of mask.split("")) {
                    const char = value[pointer];
                    if(!char) break;
                    if (entity !== "_") {
                        process += entity;
                        if(char === entity) pointer++;
                    } else {
                        if(/\d/.test(char)) process += char;
                        pointer++;
                    }
                }
            }

            input.value = process;
        });
};

init(input, mask);