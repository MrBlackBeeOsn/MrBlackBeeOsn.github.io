import ProgrammingPosts from './programming/ProgrammingPosts';
import FrontEndPosts from './programming/FrontEndPosts';
import BackEndPosts from './programming/BackEndPosts';
import LapTrinhPosts from './laptrinh/LapTrinhPosts';

import SpreadsheetPosts from './spreadsheet/SpreadsheetPosts';
import FunctionPosts from './spreadsheet/FunctionPosts';

export default function Posts() {
  return [
    ...ProgrammingPosts (),
    ...FrontEndPosts (),
    ...BackEndPosts (),

    ...SpreadsheetPosts (),
    ...FunctionPosts (),
    
    ...LapTrinhPosts ()
  ];
}