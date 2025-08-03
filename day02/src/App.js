import Card from "./Card";
const cardData = [
    {
      id:1,
      title: "Netflix",
      description: "Streaming app",
      imageUrl: "https://logo.url/netflix.png"
    },
    {
      id: 2,
      title: "Spotify",
      description: "Music App",
      imageUrl: "https://logo.url/spotify.png"
    }
  ];
function App() {
  // const tasks = [{id:1,title: "task 1"},{id : 2,title : "task2"},{id : 3,title : "task3 "}];

  return (
  <div className="card-grid">
    {cardData.map((card) => (
      <Card
      key={card.id}
      title={card.title}
      description={card.description}
      imageURL={card.imageUrl} 
      />
    ))}
  </div>
  
  
  
  
  
    // <ul>
  //   {
  //   tasks.map((task) => (
  //     <li key={task.id}>{task.title}</li>
  //   ))}
  // </ul>
  );
}

export default App;
