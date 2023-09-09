import Header from "./components/Header"
import Footer from "./components/Footer";
import Layout from "./components/Layout";
const App{
 return (
<>
 <header className="fixed top-0 left-0 w-full bg-white ">
      <nav>
        <Navbar/>
      </nav>
  </header>
  <main className="mt-[130px]">
    <div className="container mx-auto" >
      <div className="flex flex-wrap gap-[40px] justify-center">
        {data?.map}
      </div>
    </div>
  </main>
  </>
 );
};z

export default App;