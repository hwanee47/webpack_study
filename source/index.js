// Entry 파일
import hello_word from "./hello.js";
import world_word from "./world.js";
import _ from 'lodash'; //node_modules에서 찾아서 import 함
import css from "./style.css";

document.querySelector("#root").innerHTML = _.join([hello_word, world_word], ' ');

console.log('css', css);