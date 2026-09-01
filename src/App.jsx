import { 
    Hero,
    About,
    Features,
    Vault,
    WhoAreWe,
    Latest
} from "./sections";

const App = () => {
    return (
        <main className="">

            <Hero />
            <About />

            <section className="bg-black">
                <Features />
            </section>

            {/* You Forgot One Here */}

            <Vault />
            
            <WhoAreWe />
            
            <Latest />

        </main>
    );
};

export default App;