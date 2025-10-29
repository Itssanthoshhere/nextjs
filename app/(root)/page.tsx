import Hello from "../../components/hello";

const Home = () => {
  console.log("What type of a component am I?");

  return (
    <main>
      <div className="text-xl underline">Welcome to Next.js!</div>
      <Hello />
    </main>
  );
};

export default Home;
