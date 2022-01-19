import React from "react";

function ShowUsers() {
  return (
    <div className="game-menu__row">
      <div className="game-menu__header">
        <h3 className="game-menu__title-2">Users</h3>
      </div>

      {/* <ul className="game-menu__list">
        {stories.map((story, index) => {
          return (
            <li key={story.id} className="game-menu__link">
              <div className="game-menu__header">
                <span>Story {index + 1}</span>

                <div>
                  <button className="game-menu__btn-icon btn" onClick={() => modalEditStory(story)}>
                    <img src={edit} className="icon" alt="" />
                  </button>
                  <button className="game-menu__btn-icon btn" onClick={() => removeStory(story.id)}>
                    <img src={deleteIcon} className="icon" alt="" />
                  </button>
                </div>
              </div>

              <p className="game-menu__text">{story.body}</p>
            </li>
          );
        })}
      </ul> */}
    </div>
  );
}

export default ShowUsers;
