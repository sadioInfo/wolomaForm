import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";


export default function Home() {
  return (
    // global Container 
    <div className="bg-gray-100 mx-auto min-h-screen">
      {/* section nav  */}
      <Header />
      <div className="border-b-2 border-gray-200 mt-6"></div>
      {/* section formulaire  */}
      <section className="mx-auto px-6 mt-10 mb-24">
        <Main />
      </section>
      {/* div footer  */}
      <div className="border-t-2 border-gray-200 mt-6"></div>
      <Footer />
     
    </div>
  )
}
