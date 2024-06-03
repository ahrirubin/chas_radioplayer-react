function ChannelList() {
  const { data, isLoading } = useFetchData(
    "https://api.sr.se/api/v2/channels/?format=json"
  );
  if (isLoading) return <div>Laddar...</div>;
  return (
    <ul>
      {data.map((channel) => (
        <li key={user.id}>
          {user.name}
          <image src={channels.image} />
        </li>
      ))}
    </ul>
  );
}

export default ChannelList;
