import Widget from "../wiget";
import validator from "../validate";
import vps from "../vps";

test.each([
    ['4916740711478632', 'true'],
    ['4539249732915262', 'false'],
    ['5164214478729666', 'true'],
    ['5116543229432312', 'false'],
    ['371169114210135', 'true'],
    ['340692352514208', 'false'],
    ['6763738255593914', 'true'],
    ['6763738255393914', 'false'],
    ['2202202156793204', 'true'],
    ['2202202154793204', 'false'],
  ])('e2e тест правильности ввода номера карты %s', (number, status) => {
    document.body.innerHTML = '<div class="card"></div>'
    const div = document.querySelector('.card')
    const widget = new Widget(div, vps, validator)
    widget.createWidget()
    widget.input.value = number
    widget.button.click()
    expect(document.querySelector('.message').classList.contains(status)).toBe(true);
  })