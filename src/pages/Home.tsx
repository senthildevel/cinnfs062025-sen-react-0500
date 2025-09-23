import bridgeImg from "/bridge.jpg"; // Public
import hospImg from "../assets/images/hospital.jpg"; // Assets

const Home = () => {
  return (
    <>
      <h1>Home</h1>

      <h3>Public</h3>
      <img src={bridgeImg} alt="Bridge imagebridgeImg" width="450" />

      <h3>Assets</h3>
      <img src={hospImg} alt="Hospital imagebridgeImg" width="450" />
    </>
  );
};

export default Home;
