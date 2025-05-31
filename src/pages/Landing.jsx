import { useLoaderData } from "react-router-dom";

export const loader = async () => {
  return "something";
};

const Landing = () => {
  const data = useLoaderData();
  return <h1>Landing</h1>;
};
export default Landing;
