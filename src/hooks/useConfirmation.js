import React, { useState } from "react";

export default function useConfirmation() {
  const [isActive, setActive] = useState("false");
  return { isActive };
}
