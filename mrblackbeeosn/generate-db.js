// generate-db.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Để thay thế __dirname trong ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function readJSONFile(filePath) {
  const absolutePath = path.join(process.cwd(), filePath);
  const data = fs.readFileSync(absolutePath, 'utf8');
  const parsed = JSON.parse(data);
  
  if (parsed.posts && Array.isArray(parsed.posts)) {
    return parsed.posts;
  }
  if (Array.isArray(parsed)) {
    return parsed;
  }
  
  console.log('⚠️  Cấu trúc không xác định trong:', filePath);
  return [];
}

function generateDB() {
  // Đọc db.json hiện tại để giữ views/likes
  let existingDB = { posts: [] };
  try {
    existingDB = JSON.parse(fs.readFileSync('./src/data/db.json', 'utf8'));
    console.log('📊 Đã tìm thấy db.json cũ với', existingDB.posts.length, 'bài viết');
  } catch (error) {
    // Sử dụng biến error thay vì bỏ qua
    console.log('🆕 Tạo db.json mới do:', error.message);
  }

  // Đọc files mới
  const MrBeeOsn = readJSONFile('./src/data/mrbeeosn/MrBeeOsn.json');
  const ProgrammingPosts = readJSONFile('./src/data/programming/ProgrammingPosts.json');
  const FrontEndPosts = readJSONFile('./src/data/programming/FrontEndPosts.json');
  const BackEndPosts = readJSONFile('./src/data/programming/BackEndPosts.json');
  const LearningPosts = readJSONFile('./src/data/learning/LearningPosts.json');
  const LapTrinhPosts = readJSONFile('./src/data/laptrinh/LapTrinhPosts.json');
  const SpreadsheetPosts = readJSONFile('./src/data/spreadsheet/SpreadsheetPosts.json');
  const FunctionPosts = readJSONFile('./src/data/spreadsheet/FunctionPosts.json');

  // Combine posts mới
  const newPosts = [
    ...MrBeeOsn,
    ...ProgrammingPosts,
    ...FrontEndPosts,
    ...BackEndPosts,
    ...LearningPosts,
    ...SpreadsheetPosts,
    ...FunctionPosts,
    ...LapTrinhPosts
  ];

  // Merge: giữ views/likes cũ, thêm posts mới
  const mergedPosts = newPosts.map(newPost => {
    const existingPost = existingDB.posts.find(p => p.id === newPost.id);
    
    if (existingPost) {
      // Giữ nguyên views/likes từ post cũ
      return {
        ...newPost,           // Cập nhật content mới
        views: existingPost.views || 0,
        likes: existingPost.likes || 0
      };
    }
    
    // Post mới - thêm views/likes mặc định
    return {
      ...newPost,
      views: 0,
      likes: 0
    };
  });

  // Create db.json
  const dbJson = { posts: mergedPosts };
  const outputPath = path.join(process.cwd(), 'src/data/db.json');
  
  fs.writeFileSync(outputPath, JSON.stringify(dbJson, null, 2));
  console.log('✅ Đã merge db.json với', mergedPosts.length, 'bài viết');
  console.log('💾 Giữ nguyên views/likes từ data cũ');
}

generateDB();