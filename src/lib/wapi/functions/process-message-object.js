export async function processMessageObj(
  messageObj,
  includeMe,
  includeNotifications
) {
  console.log('gizim', 4072349, { messageObj });

  if (messageObj.isNotification) {
    if (includeNotifications) {
      return await WAPI._serializeMessageObj(messageObj);
    } else {
      return;
    }
  } else if (messageObj.id?.fromMe === false || includeMe) {
    return await WAPI._serializeMessageObj(messageObj);
  }
  return;
}
