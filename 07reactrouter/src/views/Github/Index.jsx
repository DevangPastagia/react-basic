import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

function Github() {
  const data = useLoaderData();
  // const [data, setRepos] = useState([]);

  // Get User data
  // useEffect(() => {
  //   fetch("https://api.github.com/users/DevangPastagia")
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw Error("User not found");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => setRepos(data))
  //     .catch((error) => console.log(error));
  // }, []);

  return (
    <div className="text-center m-5 bg-gray-600 text-white p-6 w-full">
      <h1 className="text-3xl">Github followers: {data?.followers}</h1>
      <div className="flex gap-3">
        <img src={data?.avatar_url} alt="Git Image" width={300} />
        <div className="flex flex-col gap-2 text-2xl">
          <div>
            <span> Name : {data?.name} </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Github;

export const getGitRecord = async () => {
  const response = await fetch("https://api.github.com/users/DevangPastagia");
  return response.json();
};
