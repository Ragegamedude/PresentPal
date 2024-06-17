export const ValidationSettings = {
  inputMax1: 2,
  inputMaxHeadline: 64,
  inputMaxDescription: 128,
  inputMaxEvent: 64,
  inputMaxDate: 10,
}

export const dateRegex = new RegExp(
    '(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0,1,2])\.(19|20)\\d{2}');