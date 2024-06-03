import React, { useState, useEffect } from "react";

function App() {
  const [channels, setChannels] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchChannels = async () => {
      try {
        const response = await fetch(
          "https://api.sr.se/api/v2/channels/?format=json"
        );
        const data = await response.json();
        setChannels(data.channels);
      } catch (error) {
        console.error("Error fetching channels:", error);
      }
    };

    fetchChannels();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredChannels = channels.filter((channel) =>
    channel.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className=" bg-slate-100 flex items-center justify-between p-5 border-b-2 rounded-md">
        {/* Header content */}
      </div>
      <div>{/* Dashboard and other content */}</div>
      <div id="infoBox">
        <input
          type="text"
          placeholder="Search channels..."
          value={searchTerm}
          onChange={handleSearch}
          className="p-2 m-2 border border-gray-300 rounded-md"
        />
        {filteredChannels.map((item) => (
          <div
            key={item.id}
            className="channel"
            style={{ backgroundColor: `#${item.color}` }}
          >
            <div className="innerChannel">
              <div>
                <img src={item.image} alt={item.name} />
              </div>
              <div className="text-player">
                <h2>{item.name}</h2>
                <p>{item.channeltype}</p>
                <p>{item.tagline}</p>
                <audio controls>
                  <source src={item.liveaudio.url} type="audio/mpeg" />
                </audio>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
