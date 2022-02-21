import { FETCH_DATA } from "../actions/types";

const intialState = {
//     fData: {
//         "lon": 74.3436,
//         },
//   // name: 'bilal'
};

const showNumber = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        finalData: action.payload,
      };
    // case "INCREMENT": return {
    //     ...state,
    //     count:  state.count
    // };
    // // case "DECREMENT": return {
    // //     ...state,
    // //     count: state.count - action.payload
    // // };
    default:
      return state;
  }
};

export default showNumber;
