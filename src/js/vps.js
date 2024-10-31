export default function vps (index) {
    const paySystem = {'2':'Mir', '3':'American Express', '4':'VISA', '5':'MasterCard', '6':'Maestro'}
    return paySystem[index]
}