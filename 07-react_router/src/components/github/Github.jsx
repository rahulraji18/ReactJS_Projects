import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();
  // const [data, setData] = useState(null);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/rahulraji18")
  //     .then((response) => response.json())
  //     .then((response) => setData(response));
  // }, []);
  return (
    <div className="text-center m-4 bg-gray-400 text-white p-4 text-3xl">
      Github Followers: {data?.followers}
      <img src={data?.avatar_url} alt="avatar" />
    </div>
  );
};

export default Github;

// eslint-disable-next-line react-refresh/only-export-components
export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/rahulraji18");
  return response.json();
};
