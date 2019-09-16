/*
 * Test program is the syntax tree for this simple equation: (+ 3 (- 10 20))
 * The interpreter should output: -7
 * Write an interpreter to correctly evaluate this program
 */

const ast = {
  type: 'program',
  children: [
    {
      type: 'function',
      value: 'add',
      children: [
        {
          type: 'number',
          value: 3,
        },
        {
          type: 'function',
          value: 'subtract',
          children: [
            {
              type: 'number',
              value: 10,
            },
            {
              type: 'number',
              value: 20,
            },
          ]
        }
      ]
    }
  ]
}

const interpret = ast => {}
























// answer

// const interpret = ast => {
//   if (ast.type === 'program') {
//     let output;
//     ast.children.forEach(childAst => {
//       output = process(childAst)
//       console.log(output)
//     })
//   } else {
//     throw new Error('Not a valid program')
//   }
//
//   // subroutine for handling ast nodes
//   function process(ast){
//     switch(ast.type){
//       case 'function': return applyFunction(ast)
//       case 'number': return ast.value
//     }
//   }
//
//   // subroutine for handling function application
//   function applyFunction(ast){
//     switch(ast.value){
//       case 'add': return process(ast.children[0]) + process(ast.children[1])
//       case 'subtract': return process(ast.children[0]) - process(ast.children[1])
//     }
//   }
// }
//
// interpret(ast)
