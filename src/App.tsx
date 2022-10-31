import './App.css';
import DayView from './pages/DayView';
import MonthView from './pages/MonthView';

function App() {
  // FIXME:
  const isDayView = true;

  return (
    <div className="App">
      { isDayView ? (
        <DayView></DayView>
      ) : (
        <MonthView></MonthView>
      )}
    </div>
  );
}

export default App;
