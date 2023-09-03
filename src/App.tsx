import { useEffect } from 'react';
import { UseAppDispatch, UseAppSelector } from './hooks/redux';
import { fetchUsers } from './store/reducers/ActionCreator';
import PostContainer from './components/PostContainer';

function App() {
  const { users, isLoading, error } = UseAppSelector(state => state.userReducer)
  const dispatch = UseAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <div className="App">
      
        {isLoading && <h1>Идет загрузка.......</h1>}
        {error && <h1>{error}</h1>}
        {JSON.stringify(users, null, 2)}

        <PostContainer />
    </div>
  );
}

export default App;
