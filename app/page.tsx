import { Footer } from "./component/footer";
import { Header } from "./component/Header";

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
