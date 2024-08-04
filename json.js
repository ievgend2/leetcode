const value = null;
const value2 = 2;
const jsonData = `{"blocks":[{"type":"devider"},{"type":"section", "text": ${value}},{"type":"section", "text": ${value2}}]}`;

const parsed = JSON.parse(jsonData)
const blocks = parsed.blocks
// console.log(blocks)
const filteredData_array = [];
for (let i = 0; i < blocks.length; i++) {
    const element = blocks[i];
    // console.log(element)
    // console.log(element.hasOwnProperty("text"))
    // console.log( element.text)
    if (element.hasOwnProperty("text") && element.text !== null) {
        filteredData_array.push(element) ;
          }
    
}
let result = {"blocks":filteredData_array}


// {"blocks":[]}
// console.log(filteredData_array)
console.log(result)
// 
// }

// console.log(parsed);
// console.log(filteredData);
