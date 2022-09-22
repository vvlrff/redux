import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';


function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)

  const addCash = (cash) => {
    dispatch({ type: 'ADD_CASH', payload: cash })
  }

  const getCash = (cash) => {
    dispatch({ type: 'GET_CASH', payload: cash })
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    }
    dispatch(addCustomerAction(customer))
  }

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }


  return (
    <>
      <div className="cash">{cash}</div>
      <div className="conteiner">
        <button onClick={() => addCash(Number(prompt()))}>ADD CASH</button>
        <button onClick={() => getCash(Number(prompt()))}>GET CASH</button>
        <button onClick={() => addCustomer(prompt())}>ADD CLIENT</button>
        <button onClick={() => removeCustomer()}>DELETE CLIENT</button>
      </div>
      <div className='conteiner'>
        {customers.length > 0 ?
          <div>
            {customers.map((customer) =>
              <div onClick={() => removeCustomer(customer)} >{customer.name}</div>
            )
            }
          </div>
          :
          <div>
            Clients not found
          </div>
        }
      </div>
    </>
  );
}

export default App;

