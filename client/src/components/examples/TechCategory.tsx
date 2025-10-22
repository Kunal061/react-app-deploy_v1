import TechCategory from '../TechCategory';

export default function TechCategoryExample() {
  return (
    <div className="p-8 max-w-2xl">
      <TechCategory
        title="Languages"
        items={["Python", "C", "C++", "Bash"]}
      />
    </div>
  );
}
