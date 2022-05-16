import { newRidgeState } from 'react-ridge-state';

export const tokenState = newRidgeState<string | null>(null, {
  onSet: (newState) => {
    if (newState) {
      localStorage.setItem('token', newState);
    } else {
      localStorage.removeItem('token');
    }
  },
});

export const osState = newRidgeState<string>('');

function setInitialState() {
  const token = localStorage.getItem('token');
  tokenState.set(token);
}

setInitialState();
