import Header from '../components/Header';
import Footer from '../components/Footer';
import FallingIcons from '../components/FallingIcons';
import ScrollToTopButton from '../components/ScrollToTopButton';

const DefaultLayout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-white text-black dark:bg-gray-900 dark:text-white relative">
            <FallingIcons />
            <Header />
            <main className="flex min-h-screen w-full flex-col">
                {children}
            </main>
            <Footer />
            <ScrollToTopButton />
        </div>
    );
};

export default DefaultLayout;
