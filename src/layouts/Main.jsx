
import { Outlet } from 'react-router-dom';
import Header from '../shared/Header';
import Footer from '../shared/Footer';


const Main = () => {
    return (
        <div className=''>
            <Header></Header>
           <Outlet></Outlet>
           <Footer></Footer>
        
        </div>
    );
};

export default Main;