import Widget from "./wiget";
import validator from "./validate";
import vps from "./vps";

const wiget  = new Widget(document.querySelector('.card'), vps, validator)
wiget.createWidget()
wiget.addSrcIcon()