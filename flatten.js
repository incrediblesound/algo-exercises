/*
 * We have an app that stores comment threads in a tree structure
 * we want to export these comment threads into excel or to print out
 * and therefore must flatten them. I provided a recursive solution, but
 * when you run it, you run into the recursion limit of the interpeter!
 * To solve this problem, change the algorithm to use a stack instead of recursion
 */


const conversation = {
  id: 1,
  text: 'blog',
  responses: [
    {
      id: 2,
      text: 'blob',
      responses: [],
    },
    {
      id: 3,
      text: 'blob',
      responses: [{
        id: 4,
        text: 'flob',
        responses: []
      }],
    }
  ]
}


const rescursiveFlatten = (conversation, output=[]) => {
  const { id, text } = conversation;
  const log = { id, text };
  output.push(log);
  conversation.responses.forEach(response => {
    rescursiveFlatten(response, output);
  })
  return output;
}

/* now do it without recursion */

const stackFlatten = conversation => {

}
console.log(rescursiveFlatten(conversation))
console.log(stackFlatten(conversation))





















/* answer */

// const stackFlatten = conversation => {
//   let stack = [conversation];
//   const output = []
//   while(stack.length){
//     const nextConversation = stack.shift();
//     const { id, text } = nextConversation;
//     console.log(stack.length)
//     const log = { id, text };
//     output.push(log);
//     nextConversation.responses.forEach(response => {
//       stack.push(response)
//     })
//   }
//   return output
// }
//
