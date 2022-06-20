import {func2} from './nested/func2'

export function func1() {
  return 'func1' + func2()
}
