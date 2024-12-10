let shiftOption = (leftShifter, rightShifter) => {
  const leftShift = document.querySelector(leftShifter);
  const rightShift = document.querySelector(rightShifter);

  for (let i = leftShift.options.length - 1; i >= 0; i--) {
    const option = leftShift.options[i];

    if (option.selected) {
      leftShift.remove(i);
      rightShift.add(option);
    }
  }
};
