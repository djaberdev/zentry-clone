import { 
    Hero,
    About,
    Features,
    Vault,
    WhoAreWe,
    Latest,
    Contact,
    Footer
} from "./sections";

const App = () => {
    return (
        <main className="duration-700">

            <Hero />
            
            <About />

            <section className="bg-black">
                <Features />
            </section>

            {/* You Forgot One Here */}

            <Vault />
            
            <WhoAreWe />
            
            <Latest />

            <Contact />

            <Footer />

        </main>
    );
};

export default App;