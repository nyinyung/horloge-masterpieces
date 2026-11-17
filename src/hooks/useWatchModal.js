import { useState } from "react";

export function useWatchModal() {
  const [selectedWatch, setSelectedWatch] = useState(null);

  const openModal = (watch) => {
    setSelectedWatch(watch);
  };

  const closeModal = () => {
    setSelectedWatch(null);
  };

  return {
    selectedWatch,
    openModal,
    closeModal,
  };
}