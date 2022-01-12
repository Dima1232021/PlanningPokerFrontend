










      <div className="create-game__form">
        <div className="create-game__block block">
          
          <div className="block__row">
            <textarea
              className="block__testarea"
              value={textStory.value}
              onChange={(e) => textStory.onChange(e)}
              placeholder="Enter history"
              onBlur={textStory.outputError}
            ></textarea>
            <button
              className="block__btn-create"
              onClick={() => {
                if (textStory.isValid) {
                  setAddStory((value) => [...value, textStory.value]);
                  return textStory.setValue("");
                }
                return textStory.outputError();
              }}
            >
              Create
            </button>
          </div>
        </div>

        <div className="create-game__block block">
          <p className="block__text">Stories you have created</p>

          {/* <UsersBlock
            value={addStory}
            nameBtn="Remove"
            setValue={deleteStoryState}
          /> */}
        </div>

        <div className="create-game__block block">
          <input
            type="text"
            placeholder="Enter a name for the game"
            value={nameGame.value}
            onChange={(e) => nameGame.onChange(e)}
            onBlur={nameGame.outputError}
            className="block__input"
          />

          <div className="block__container">
            <Cheks justDriving={justDriving} setJustDriving={setJustDriving} />
            <div className="block__row">
              {/* <button
                onClick={() => dispatch(changeActveFormAction(false))}
                className="block__btn-exit"
              >
                Cancel
              </button> */}
              <button className="block__btn-create" onClick={createNewGame}>
                Create a game
              </button>
            </div>
          </div>
        </div>
      </div>

