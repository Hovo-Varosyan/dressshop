import { access } from '../chunk/ZV6G25TT.js';
import { mergeProps, createSignal, createMemo } from 'solid-js';

var createRegister = (props) => {
  const defaultedProps = mergeProps(
    {
      initialRegistered: false
    },
    props
  );
  const [isRegistered, setIsRegistered] = createSignal(
    defaultedProps.initialRegistered
  );
  const registerable = createMemo(() => {
    if (!isRegistered()) return void 0;
    return access(defaultedProps.value);
  });
  return [
    registerable,
    () => {
      setIsRegistered(true);
    },
    () => {
      setIsRegistered(false);
    }
  ];
};
var register_default = createRegister;

export { register_default as default };
