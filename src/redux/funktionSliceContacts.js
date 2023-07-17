

// export const handelPending = state => {
//     state.isLoading = true;
//   };
  
//   export const handelFulfilledGet = (state, actions) => {
//     state.isLoading = false;
    
//     state.items = actions.payload;
//     console.log(state)
//     state.error = null;
//   };
  
//   export const handelFulfilledCreate = (state, actions) => {
//     state.isLoading = false;
//     state.items.push(actions.payload); ;
//     state.error = null;
//     Notiflix.Notify.success(
//         `${actions.payload.name} has been successfully added to  your phonebook`
//       );
//   };
  
//   export const handelFulfilledDel = (state, actions) => {
//     state.isLoading = false;
//     state.items = state.items.filter(item => item.id !== actions.payload);
//     state.error = null;
//   };
  
//   export const handelRejected = (state, actions) => {
//     state.isLoading = false;
//     state.error = actions.error;
//   };