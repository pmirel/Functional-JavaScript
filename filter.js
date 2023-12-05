function getShortMessages(messages) {
  const array = [];
  let filteredMes = messages.filter((e) => {
    if (e.message.length < 50) array.push(e.message);
  });

  return array;
}

module.exports = getShortMessages;
