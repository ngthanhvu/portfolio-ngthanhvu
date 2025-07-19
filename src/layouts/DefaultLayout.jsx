import Header from '../components/Header';
import Footer from '../components/Footer';

const DefaultLayout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex min-h-screen w-full flex-col">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default DefaultLayout;
