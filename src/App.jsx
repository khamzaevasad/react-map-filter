import { useState } from 'react';
import Title from './components/Title';
import Modal from './components/Modal';
const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [showContent, setShowContent] = useState(true);
  const [events, setEvents] = useState([
    { title: "Akhror's birthday party", id: 1 },
    { title: "Akhror's live stream", id: 2 },
    { title: 'Match: Manchester united', id: 3 },
  ]);

  // delete items
  const deleteItem = (id) => {
    const filteredEvents = events.filter((event) => {
      return event.id !== id;
    });
    setEvents(filteredEvents);
  };

  // toogle function

  const closeModal = () => {
    setShowModal(false);
  };

  let title = "Akhror's Kingdom Events";

  return (
    <div className="container">
      <Title subtitle="All events well be here" title={title} />

      {showContent && (
        <button onClick={() => setShowContent(false)}>Hide Content</button>
      )}
      {!showContent && (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}

      {showContent && (
        <div>
          {events.length === 0 && <h4>Note Content yet...</h4>}
          {events.map((event) => {
            return (
              <div key={event.id}>
                <h3>{event.title}</h3>
                <button onClick={() => deleteItem(event.id)}>Delete</button>
              </div>
            );
          })}
        </div>
      )}
      {showModal && (
        <Modal closeModal={closeModal}>
          <h2> Akhror Soliev Youtube Channel</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
            pariatur modi neque adipisci explicabo! Debitis.
          </p>
          <a href="#">Subscribe</a>
        </Modal>
      )}
      <br />
      <br />
      <button onClick={() => setShowModal(true)}>Show Modal</button>
    </div>
  );
};

export default App;
