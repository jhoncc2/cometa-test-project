import { useReducer, useContext, createContext } from 'react'

const PaymentStateContext = createContext()
const PaymentDispatchContext = createContext()

const initialState = {
  paid: [0,0], 
  due: [0,0], 
  outstanding: [0,0], 
  paymentIndex: 0
}

const reducer = (state, action) => {
  const {paymentIndex} = state

  switch (action.type) {
    case 'CHECK':
      if(paymentIndex != action.index) 
        throw new Error(`Unknown action: ${action.type}`)
      return {...state, 
        paymentIndex: paymentIndex+1
      }
    case 'UNCHECK':
        return {...state, 
          paymentIndex: action.index
        }
    case 'UPDATE_INDEXES':
      return {...state, 
          ...action.data, // override state
          paymentIndex: action.data.due[0], // update payment index
        }
    default:
      throw new Error(`Unknown action: ${action.type}`)
  }
}

export const PaymentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <PaymentDispatchContext.Provider value={dispatch}>
      <PaymentStateContext.Provider value={state}>
        {children}
      </PaymentStateContext.Provider>
    </PaymentDispatchContext.Provider>
  )
}

export const usePayment = () => useContext(PaymentStateContext)
export const useDispatchPayment = () => useContext(PaymentDispatchContext)