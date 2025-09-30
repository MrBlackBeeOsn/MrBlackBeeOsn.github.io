import Programming_Posts from './programming/Programming_Posts';
import Frontend_Posts from './programming/Frontend_Posts';
import Backend_Posts from './programming/Backend_Posts';

import Spreadsheet_Posts from './spreadsheet/Spreadsheet_Posts';
import Function_Posts from './spreadsheet/Function_Posts';

import Laptrinh_Posts from './laptrinh/Laptrinh_Posts';

export default function Posts() {
  return [
    ...Programming_Posts (),
    ...Frontend_Posts (),
    ...Backend_Posts (),

    ...Spreadsheet_Posts (),
    ...Function_Posts (),
    
    ...Laptrinh_Posts ()
  ];
}