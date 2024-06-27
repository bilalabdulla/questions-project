import './App.css';
import Navbar from './components/Navbar';
import QuestionContextProvider from './contexts/QuestionContext';
import QuestionList from './components/QuestionList';
import QuestionForm from './components/QuestionForm';

function App() {
  return (
    <div className="App">
      <QuestionContextProvider>
        <Navbar />
        <QuestionList />
        <QuestionForm />
      </QuestionContextProvider>
    </div>
  );
}

export default App;
