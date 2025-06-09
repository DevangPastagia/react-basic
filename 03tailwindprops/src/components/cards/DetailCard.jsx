function DetailCard({ port = 1, userDetail }) {
  return (
    <>
      <div class="flex flex-col items-center md:flex-row gap-3 rounded-2xl bg-gray-200">
        <div>
          <img class="size-48 shadow-xl rounded-md" alt="" src="https://picsum.photos/200/300" />
        </div>
        <div class="flex flex-col items-center md:items-start p-3">
          <span class="text-2xl font-medium">{userDetail.name}</span>
          <span class="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
            <span>Age</span>
            <span>·</span>
            <span>{userDetail.age}</span>
          </span>
          <span class="font-medium">{userDetail.location}</span>
          <span class="font-medium">Port: {port}</span>
        </div>
      </div>
    </>
  );
}

export default DetailCard;