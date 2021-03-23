const Bilge = {}

/**
 * Sends a `POST` request to `GetParentResourceName()`, invoking `command` with `body` as the request-body.
 *
 * *Body will automatically be `stringified`.*
 *
 * @param {*} command Client "command" to invoke.
 * @param {*} body JavaScript object to be sent to the client.
 * @returns {Promise} Promise with result of `command`.
 */
Bilge.post = (command, body) => {
  return fetch(`https://${GetParentResourceName()}/${command}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(body)
  })
  .then((res) => res.json())
  .catch((err) => console.log(err))
}

export { Bilge }
