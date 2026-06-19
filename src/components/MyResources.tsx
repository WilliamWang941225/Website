import { resources } from "../data/resources";
import ResourceList from "./ResourceList";

export default function MyResources() {
  return (
    <section id="two">
      <div className="container">
        <h3>My Resources</h3>
        <p>Some Notes about physics.</p>
        <ResourceList resources={resources} />
      </div>
    </section>
  );
}
