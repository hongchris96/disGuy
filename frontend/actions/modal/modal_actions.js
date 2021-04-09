

export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const openModal = componentName => ({
  type: OPEN_MODAL,
  componentName
});

export const closeModal = componentName => ({
  type: CLOSE_MODAL
});

