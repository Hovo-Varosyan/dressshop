// src/primitives/create-register-id/create-register-id.ts
function createRegisterId(setter) {
  return (id) => {
    setter(id);
    return () => setter(void 0);
  };
}

export {
  createRegisterId
};
