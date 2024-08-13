import { Navbar, Hero ,Courses} from "../../components/index";

const Home = () => {
  return (
    // START HOME PAGE
    <section id="home">
      <div className="">
        <Hero />
        <Courses />
      </div>
    </section>
    // END HOME PAGE
  );
};

export default Home;
