import './FindTaskButtons.css';

export default function FindTaskButtons({ setSelectedTask }) {
  return (
    <>
      <div className="find-tasks-btn-container">
        <button value="Urgent" onClick={() => setSelectedTask('Urgent')}>
          Urgent Tasks
        </button>
        <button value="Pet Tasks" onClick={() => setSelectedTask('Pet Tasks')}>
          Pet Tasks
        </button>
        <button value="House Tasks" onClick={() => setSelectedTask('House Tasks')}>
          House Tasks
        </button>
      </div>
    </>
  );
}
