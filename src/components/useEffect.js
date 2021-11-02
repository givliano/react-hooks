import React from 'react';

function UseEffectApp() {
  const [isOn, setIsOn] = React.useState(false);
  const [timer, setTimer] = React.useState(0);

  // The second argument will take a variable to compare and run the effect if it changes;
  // if empty, it will run on mount/unmount
  React.useEffect(() => {
    let interval;
    if (isOn) {
      // uses the state to update the new state, otherwise it's reference it the starting one
      // another solution would be to pass `timer` as a dependency in the array, with isOn
      interval = setInterval(() => setTimer(timer => timer + 1), 1000);
    }

    return () => clearInterval(interval);
  }, [isOn]);

  const onReset = () => {
    setIsOn(false);
    setTimer(0);
  }

  return (
    <div>
      <h1>Use Effect</h1>

      <p>{timer}</p>

      {!isOn && (
        <button type="button" onClick={() => setIsOn(true)}>
          Start
        </button>
      )}

      {isOn && (
        <button type="button" onClick={() => setIsOn(false)}>
          Stop
        </button>
      )}

      <button type="button" onClick={onReset}>
        Reset
      </button>
    </div>
  );
}

export default UseEffectApp;
