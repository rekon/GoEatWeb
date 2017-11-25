import { actionConstants } from './action_constants'

export function initializeBmr(bmr) {
  return {
    type: actionConstants.INIT_BMR,
    data: bmr
  }
}

export function modifyBmr(bmr) {
  return {
    type: actionConstants.MODIFY_BMR,
    data: bmr
  }
}