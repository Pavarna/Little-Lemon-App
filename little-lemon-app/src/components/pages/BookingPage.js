import Heading from "../sections/reservePages/Heading";
import ReservationForm from "../sections/reservePages/BookingForm";
import { useReducer, useEffect} from "react";
import { fetchAPI } from "../../bookingsAPI";

// Define the reducer function
function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return { ...state, availableTimes: action.payload };
    case 'FETCHING_TIMES':
      return { ...state};
    case 'FETCHING_TIMES_FAILED':
      return { ...state};
    default:
      return state;
  }
}


// Function to initialize times for today's date
function initializeTimes() {
  const today = new Date();
  return new Promise((resolve, reject) => {//asynchronous operations i
    fetchAPI(today, (times) => {
      resolve(times);//success callback function 
    }, (error) => {
      reject(error);
    });
  });
}

// Function to update times based on the selected date
function updateTimes(date) {
  return new Promise((resolve, reject) => {//asynchronous operations i
    fetchAPI(date, (times) => {
      resolve(times); //success callback function 
    }, (error) => {
      reject(error);
    });
  });
}

// Initial state
const initialState = {
  availableTimes: fetchAPI(new Date()),
  error: null
};

export default function BookingPage() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: 'FETCHING_TIMES' });
    initializeTimes()
      .then(times => {
        dispatch({ type: 'UPDATE_TIMES', payload: times });
      })
      .catch(error => {
        dispatch({ type: 'FETCHING_TIMES_FAILED', payload: error });
      });
  }, []);

  // Function to handle date changes
  function handleDateChange(date) {
    dispatch({ type: 'FETCHING_TIMES' });
    updateTimes(date)
      .then(times => {
        dispatch({ type: 'UPDATE_TIMES', payload: times });
      })
      .catch(error => {
        dispatch({ type: 'FETCHING_TIMES_FAILED', payload: error });
      });
  }

  return (
    <>
      <Heading />
      <ReservationForm availableTimes={state.availableTimes} updateTimes={handleDateChange} />
    </>
  );
}