const Bilge = {}

/**
 * Sends a `POST` request to `GetParentResourceName()`, invoking `event` with `body` as the request-body.
 *
 * @param {*} event Client event to invoke.
 * @param {*} body JavaScript object to be sent to the client.
 * @returns {Promise} Promise with result of `command`.
 */
Bilge.post = (event, body) => {
  return fetch(`https://${GetParentResourceName()}/${event}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(body)
  })
  .then((res) => res.json())
  .catch((err) => console.log(err))
}

export default Bilge
