from flask import Flask, request, jsonify
import json

app = Flask(__name__)

# Đọc dữ liệu từ file data.json
with open('data.json', 'r', encoding='utf-8') as f:
    articles = json.load(f)

# Định nghĩa một route (đường dẫn) cho chức năng tìm kiếm
@app.route('/search')
def search():
    query = request.args.get('q', '').lower()
    
    # Tạo danh sách rỗng để lưu kết quả
    results = []
    
    # Lặp qua từng bài viết để tìm kiếm
    for article in articles:
        # Kiểm tra xem từ khóa có trong tiêu đề hoặc nội dung không
        if query in article['title'].lower() or query in article['content'].lower():
            results.append(article)
    
    # Trả về kết quả dưới dạng JSON
    return jsonify(results)

if __name__ == '__main__':
    # Chạy server ở chế độ debug để dễ dàng kiểm tra
    app.run(debug=True)
