import SearchList from "../components/SearchList";

const names = ["Andrés", "Kyara", "Juan", "María", "Sofía", "Pedro"];

export default function SearchListView() {
  return (
    <section className="p-6">
      <SearchList items={names} />
    </section>
  );
}
