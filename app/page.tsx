import { Footer } from "../component/Footer";
import { Header } from "../component/Header";

export default function Home() {
  return (
    <>
      <div className="header pb-100">
        <Header />
      </div>

      <div className="footer ">
        <Footer />
      </div>
    </>
  );
}
