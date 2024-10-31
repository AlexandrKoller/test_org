export default function validator (number) {
        number = number.toString()
        let sum = 0
        const controll = number[number.length - 1]
        let variator = true
        for (let index = number.length - 2; index >= 0; index--) {
          let actual = Number(number[index])
          if (variator) {
            actual *= 2
            if (actual > 9) {
              actual = (actual % 10) + Math.trunc(actual / 10)
            }
            variator = false
            sum = sum + actual
          } else {
            sum = sum + actual
            variator = true
          }    
        }
        sum = sum + Number(controll)
        if (sum % 10 === 0) {
            return true
        } else { return false }
    }