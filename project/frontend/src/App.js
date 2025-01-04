import './App.css';
import {NewsData} from './components/NewsData';
import Form from './form/form'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
   <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Form/>}/>
        <Route path='/NewsData' element={<NewsData/>}/>
      </Routes>
      </BrowserRouter>
   </div>
  );
}

export default App;
