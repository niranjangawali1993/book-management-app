import { useContext, useState } from 'react';
import CustomSpinner from './components/common/CustomSpinner';
import './App.css';
import ReactRoutes from './components/ReactRoutes';
import BookContext from './context/BookContext';
import Alert from './components/common/Alert';

function App() {
  const context = useContext(BookContext);
  const { spinnerStatus } = context;
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type, msgType) => {
    setAlert({ type: type, msg: message, msgType: msgType });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <div className='App'>
      <Alert alert={alert} />

      <ReactRoutes showAlert={showAlert} />
      {spinnerStatus && <CustomSpinner />}
    </div>
  );
}

export default App;
