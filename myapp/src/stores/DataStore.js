import { makeAutoObservable } from "mobx";

class DataStore {
  data = [];
  isLoading = false;
  error = null;

  constructor() {
    makeAutoObservable(this);
    this.loadData();
  }

  loadData = () => {
    fetch("http://itgirlschool.justmakeit.ru/api/words")
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

  addNewWord = (inputData, setInputData) => {
    fetch("http://itgirlschool.justmakeit.ru/api/words/add", {
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
        setInputData({
          word: " ",
          translation: " ",
          transcription: "",
        });
        if (response.ok) {
          //Проверяем что код ответа 200
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .catch((err) => console.log(err));
  };

  deleteWord = (id) => {
    this.isLoading = true;
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
      .then((response) => (this.data = response));
    this.isLoading = false;
  };

  updateWord = (inputData, id) => {
    fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/update`, {
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

      .then((response) => (this.data = response));
  };
}

export default DataStore;
