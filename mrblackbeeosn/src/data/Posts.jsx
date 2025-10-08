import ProgrammingPosts from './programming/ProgrammingPosts.json';
import FrontEndPosts from './programming/FrontEndPosts.json';
import BackEndPosts from './programming/BackEndPosts.json';
import LapTrinhPosts from './laptrinh/LapTrinhPosts.json';

import SpreadsheetPosts from './spreadsheet/SpreadsheetPosts.json';
import FunctionPosts from './spreadsheet/FunctionPosts.json';

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