import './CategoryButtons.css';

export default function CategoryButtons({ setSelectedCategory }) {
  return (
    <>
      <div className="category-btn-container">
        <button value="Urgent" onClick={() => setSelectedCategory('Urgent')}>
          Urgent Tasks
        </button>
        <button value="Pet Tasks" onClick={() => setSelectedCategory('Pet Tasks')}>
          Pet Tasks
        </button>
        <button value="House Tasks" onClick={() => setSelectedCategory('House Tasks')}>
          House Tasks
        </button>
      </div>
    </>
  );
}
