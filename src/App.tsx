import './App.css';
import { Header } from './partials/Header';
import { Footer } from './partials/Footer';
import { MainRoutes } from './routes/MainRoutes';

function App() {
  return (
    <>
      <Header />
      <MainRoutes />
      <Footer />
    </>
  );
}

export default App;
