export function addOnStream() {
  let initialized = false;
  const getData = () => {
    return {
      displayInfo: window.Store.Stream.displayInfo,
      mode: window.Store.Stream.mode,
      info: window.Store.Stream.info
    };
  };

  window.WAPI.onInterfaceChange = (callback) => {
    window.WAPI.waitForStore('Stream', () => {
      console.log(
        'gizim',
        4466204,
        'waitForStore - here we were able to detect disconnections and recover from',
        { initialized },
        { getData: getData() }
      );

      window.Store.Stream.on(
        'change:info change:displayInfo change:mode',
        () =>
          console.log(
            'gizim',
            4466264,
            'onInterfaceChange - here we were able to detect disconnections and recover from',
            { initialized },
            { getData: getData() }
          ) || callback(getData())
      );
      if (initialized === false) {
        initialized = true;
        callback(getData());
      }
    });
    return true;
  };
}
