import vps from "../vps";
test.each([
    ['4916740711478632', 'VISA'],
    ['5164214478729666', 'MasterCard'],
    ['371169114210135', 'American Express'],
    ['6763738255593914', 'Maestro'],
    ['2200381427330082', 'Mir'],
  ])('Тест правильности ввыда платежной системы карты %%s', (number, status) => {
    const result = vps(number[0]);
    expect(result).toEqual(status);
  })