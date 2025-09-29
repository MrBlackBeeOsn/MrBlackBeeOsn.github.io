import Programming_Posts from './programming/Programming_Posts';
import Spreadsheet_Posts from './spreadsheet/Spreadsheet_Posts';

export default function Posts() {
  return [
    ...Programming_Posts (),
    ...Spreadsheet_Posts ()
  ];
}