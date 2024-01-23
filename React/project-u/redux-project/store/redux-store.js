// Action creators
// Person who is sumbitting the form

const newBooking = (name, amount) => {
  return {
    type: "NEW_BOOKING",
    payload: {
      name,
      amount,
    },
  };
};
const cancleBooking = (name, refundAmount) => {
  return {
    type: "CANCLE_BOOKING",
    payload: {
      name,
      refundAmount,
    },
  };
};

// Reducers

const reservationHistory = (oldReservationList = [], action) => {
  if (action.type === "NEW_BOOKING") {
    return [...oldReservationList, action.payload];
  } else if (action.type === "CANCLE_BOOKING") {
    return oldReservationList.filter((record) => {
      return record.name !== action.payload.name;
    });
  } else {
    return oldReservationList;
  }
};
const cancellationHistory = (oldReservationList = [], action) => {
  if (action.type === "CANCLE_BOOKING") {
    return [...oldReservationList, action.payload];
  } else {
    return oldReservationList;
  }
};

const accounting = (totalMoney = 100, action) => {
  if (action.type === "NEW_BOOKING") {
    return totalMoney + action.payload.amount;
  } else if (action.type === "CANCLE_BOOKING") {
    return totalMoney - action.payload.refundAmount;
  }
  return totalMoney;
};

// Redux Store

console.log(Redux);
const { createStore, combineReducers } = Redux;

const railwayCentralStore = combineReducers({
  accounting: accounting,
  reservationHistory: reservationHistory,
  cancellationHistory: cancellationHistory,
});

const store = createStore(railwayCentralStore);

const action = newBooking("Sagar", 20)
store.dispatch(action);
store.dispatch(newBooking("moon", 20));
store.dispatch(newBooking("sameer", 20));
store.dispatch(newBooking("arhant", 20));
store.dispatch(cancleBooking("Sagar", 10));
// store.dispatch(action);
console.log(store.getState());
