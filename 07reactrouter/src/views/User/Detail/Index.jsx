import { useParams } from "react-router";
function UserDetail() {
  const { id } = useParams();

  return (
    <div className="bg-gray-600 text-white text-3xl p-4 ">
      <h1>User Detail for user id: {id} </h1>
      <p>This is the user detail page.</p>
    </div>
  );
}

export default UserDetail;
