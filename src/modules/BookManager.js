const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/books/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/books`).then(result => result.json())
  },
  delete(id) {
    return fetch (`${remoteURL}/books/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        available: false
      }),
    })
  },
  getReviews(ISBN) {
    return fetch(
      `https://www.goodreads.com/book/isbn/${ISBN}?callback=myCallback&format=json&user_id=f8DXs2jYGQLBW6V8igQj5g`
    )
  }
}