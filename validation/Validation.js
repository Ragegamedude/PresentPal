export const Validation = {
  inputMax1: 2,
  inputMaxHeadline: 64,
  inputMaxDescription: 128,
  inputMaxEvent: 64,
  inputMaxDate: 10,
}

const dateRegex = new RegExp(
    '(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0,1,2])\.(19|20)\\d{2}');

export const validateDate = (date) => {
  return dateRegex.test(date)
}

export const validateRequired = (value) => {
  return value.length > 0;
}

export const validateMaxLength = (value, maxLength) => {
  return value.length <= maxLength;
}

export const validateMinLength = (value, minLength) => {
  return value.length >= minLength
}