const projects = [
    { title: "Todo App", description: "A simple todo list built with React." },
    { title: "Portfolio Site", description: "This portfolio you're viewing right now." },
  ];
  
  export default function Projects() {
    return (
      <section style={{ padding: '2rem' }}>
        <h2>My Projects</h2>
        <ul>
          {projects.map((proj, index) => (
            <li key={index}>
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
            </li>
          ))}
        </ul>
      </section>
    );
  }
  