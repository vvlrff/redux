import { useEffect } from 'react';
import { UseAppDispatch, UseAppSelector } from './hooks/redux';
// import { userSlice } from './store/reducers/UserSlice';
import { fetchUsers } from './store/reducers/ActionCreator';

function App() {
  const { users, isLoading, error } = UseAppSelector(state => state.userReducer)
  const dispatch = UseAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <div className="App">

      {/* <h1>
        {count}
      </h1>
      <button onClick={() => dispatch(increment(10))}>
        INCREMENT
      </button> */}
      
      <div>
        {isLoading && <h1>Идет загрузка.......</h1>}
        {error && <h1>{error}</h1>}
        {JSON.stringify(users, null, 2)}
      </div>
    </div>
  );
}

export default App;
