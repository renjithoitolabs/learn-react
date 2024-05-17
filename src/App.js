import './App.css';
import Header from './layout/Header';
import Main from './layout/Main';
import Footer from './layout/Footer';

function App() {
  return (
    <div className='container'>
      <div className='row'>
        <div className="col-lg-12 mx-auto p-4 py-md-5">
          <Header />
          <Main />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;