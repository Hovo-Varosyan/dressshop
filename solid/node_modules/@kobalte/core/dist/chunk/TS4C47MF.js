import { Polymorphic } from './6Y7B2NEO.js';
import { __export } from './5ZKAE4VZ.js';
import { createComponent, mergeProps } from 'solid-js/web';

// src/alert/index.tsx
var alert_exports = {};
__export(alert_exports, {
  Alert: () => Alert,
  Root: () => AlertRoot
});
function AlertRoot(props) {
  return createComponent(Polymorphic, mergeProps({
    as: "div",
    role: "alert"
  }, props));
}

// src/alert/index.tsx
var Alert = AlertRoot;

export { Alert, AlertRoot, alert_exports };
