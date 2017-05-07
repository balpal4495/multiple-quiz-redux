export const questions = () => {
  const localEndpoint = `/data/questions.json`;
  return fetch(localEndpoint)
    .then(response => {
      return response.json()
    })
    .then(json => {
      return json;
    });
};

export const answers = () => {
  const localEndpoint = `/api/answers.json`;
  return fetch(localEndpoint)
    .then(response => {
      return response.json()
    })
    .then(json => {
      return json;
    });
};