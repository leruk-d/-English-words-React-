import { action, observable } from "mobx";

class DataStore {
  @observable data = [];
  @observable isLoading = false;
  @observable error = null;

  loadData = () => {
    fetch("/api/words")
      .then((response) => {
        if (response.ok) {
          //Проверяем что код ответа 200
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then((response) => (this.data = response));
  };

  @action
  addNewWord = (inputData) => {
    fetch("/api/words/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        english: inputData.word,
        russian: inputData.translation,
        transcription: inputData.transcription,
        tags: [],
      }),
    })
      .then((response) => {
        if (response.ok) {
          //Проверяем что код ответа 200
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then(() => {
        this.loadData();
      });
  };

  @action deleteWord = (id) => {
    fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/delete`, {
      method: "POST",
    })
      .then((response) => {
        if (response.ok) {
          //Проверяем что код ответа 200
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then(() => {
        this.loadData();
      });
  };

  @action updateWord = (inputData) => {
    fetch(`/api/words/${inputData.id}/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(inputData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })

      .then(() => {
        this.loadData();
      });
  };
}

export default DataStore;
