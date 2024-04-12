var ExposedFn;
(function (ExposedFn) {
  ExposedFn['OnMessage'] = 'onMessage';
})(ExposedFn || (ExposedFn = {}));
/**
 * Exposes [OnMessage] function
 */
WAPI.waitNewMessages(false, function (data) {
  console.log('gizim', 9723954, { data });

  data.forEach(function (message) {
    window[ExposedFn.OnMessage](message);
  });
});
