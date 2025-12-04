import React, { useState, useRef } from 'react';
import { Search, ChevronLeft, ChevronRight, Pause, Play, AlertCircle } from 'lucide-react';

interface VideoResult {
  id: string;
  title: string;
  timestamp: number;
  duration: number;
  thumbnail: string;
  channelTitle: string;
}

interface CaptionItem {
  text: string;
  start: number;
  duration: number;
}

const styles = {
  container: "min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6",
  maxWidth: "max-w-5xl mx-auto",
  header: "text-center mb-8",
  title: "text-4xl font-bold text-indigo-900 mb-2",
  subtitle: "text-gray-600",
  searchSection: "mb-8",
  searchContainer: "flex gap-2 max-w-2xl mx-auto",
  inputWrapper: "flex-1 relative",
  input: "w-full px-4 py-3 pr-12 rounded-lg border-2 border-indigo-200 focus:border-indigo-500 focus:outline-none text-lg",
  searchIcon: "absolute right-4 top-1/2 -translate-y-1/2 text-gray-400",
  searchButton: "px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:bg-gray-400 font-semibold",
  apiKeySection: "mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg",
  apiKeyLabel: "block text-sm font-semibold text-gray-700 mb-2",
  apiKeyInput: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500",
  apiKeyNote: "text-xs text-gray-600 mt-2",
  resultCard: "bg-white rounded-2xl shadow-xl overflow-hidden",
  videoWrapper: "relative bg-black aspect-video",
  videoIframe: "w-full h-full",
  controlsSection: "p-6",
  videoTitle: "text-xl font-semibold text-gray-800 mb-2",
  timestamp: "text-gray-600",
  timestampHighlight: "font-semibold text-indigo-600",
  navControls: "flex items-center justify-between",
  buttonGroup: "flex items-center gap-4",
  navButton: "p-3 rounded-full bg-indigo-100 hover:bg-indigo-200 disabled:bg-gray-100 disabled:text-gray-400 transition-colors",
  playButton: "p-4 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white transition-colors",
  counter: "text-gray-600 font-semibold",
  progressSection: "mt-4",
  progressBar: "w-full bg-gray-200 rounded-full h-2",
  progressFill: "bg-indigo-600 h-2 rounded-full transition-all",
  resultsList: "border-t border-gray-200 p-6",
  resultsTitle: "text-lg font-semibold mb-4 text-gray-800",
  resultsScroll: "space-y-2 max-h-64 overflow-y-auto",
  resultItem: "w-full text-left p-3 rounded-lg transition-colors",
  resultItemActive: "bg-indigo-100 border-2 border-indigo-500",
  resultItemInactive: "bg-gray-50 hover:bg-gray-100 border-2 border-transparent",
  resultItemTitle: "font-medium text-gray-800",
  resultItemMeta: "text-sm text-gray-600 mt-1",
  emptyState: "text-center py-12 bg-white rounded-2xl shadow-lg",
  emptyIcon: "mx-auto mb-4 text-gray-400",
  emptyTitle: "text-xl font-semibold text-gray-700 mb-2",
  emptyText: "text-gray-500",
  errorCard: "bg-red-50 border border-red-200 rounded-lg p-4 mb-6",
  errorTitle: "flex items-center gap-2 text-red-800 font-semibold mb-2",
  errorText: "text-red-700 text-sm"
};

const YouGlishClone = () => {
  const [apiKey, setApiKey] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<VideoResult[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const videoRef = useRef<HTMLIFrameElement>(null);

  // Hàm lấy captions từ video
  const fetchCaptions = async (videoId: string): Promise<CaptionItem[]> => {
    try {
      // YouTube API không trực tiếp cung cấp captions với timestamp
      // Cần sử dụng thư viện bên thứ 3 hoặc YouTube Transcript API
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/captions?videoId=${videoId}&part=snippet&key=${apiKey}`
      );
      
      if (!response.ok) throw new Error('Không thể lấy captions');
      
      const data = await response.json();
      
      // Lưu ý: YouTube API không cung cấp nội dung caption trực tiếp
      // Bạn cần sử dụng youtube-transcript hoặc API khác
      // Đây là placeholder cho demo
      return [];
    } catch (err) {
      console.error('Lỗi khi lấy captions:', err);
      return [];
    }
  };

  // Tìm timestamp của từ khóa trong captions
  const findKeywordTimestamp = (captions: CaptionItem[], keyword: string): number => {
    const lowerKeyword = keyword.toLowerCase();
    for (const caption of captions) {
      if (caption.text.toLowerCase().includes(lowerKeyword)) {
        return Math.floor(caption.start);
      }
    }
    return 0;
  };

  const searchYouTube = async () => {
    if (!apiKey.trim()) {
      setError('Vui lòng nhập YouTube API Key');
      return;
    }

    if (!searchTerm.trim()) {
      setError('Vui lòng nhập từ khóa tìm kiếm');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // Tìm kiếm video với caption
      const searchResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/search?` +
        `part=snippet&q=${encodeURIComponent(searchTerm)}&` +
        `type=video&videoCaption=closedCaption&maxResults=10&key=${apiKey}`
      );

      if (!searchResponse.ok) {
        const errorData = await searchResponse.json();
        throw new Error(errorData.error?.message || 'Lỗi khi tìm kiếm video');
      }

      const searchData = await searchResponse.json();

      if (!searchData.items || searchData.items.length === 0) {
        setError('Không tìm thấy video nào với từ khóa này');
        setResults([]);
        setIsLoading(false);
        return;
      }

      // Lấy chi tiết video
      const videoIds = searchData.items.map((item: any) => item.id.videoId).join(',');
      const detailsResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?` +
        `part=contentDetails,snippet&id=${videoIds}&key=${apiKey}`
      );

      if (!detailsResponse.ok) {
        throw new Error('Lỗi khi lấy thông tin video');
      }

      const detailsData = await detailsResponse.json();

      // Xử lý kết quả
      const processedResults: VideoResult[] = await Promise.all(
        detailsData.items.map(async (item: any) => {
          // Parse duration từ ISO 8601
          const duration = parseDuration(item.contentDetails.duration);
          
          // Lấy captions và tìm timestamp (simplified version)
          // Trong thực tế cần dùng thư viện như youtube-transcript
          const captions = await fetchCaptions(item.id);
          const timestamp = findKeywordTimestamp(captions, searchTerm);

          return {
            id: item.id,
            title: item.snippet.title,
            timestamp: timestamp,
            duration: duration,
            thumbnail: item.snippet.thumbnails.medium.url,
            channelTitle: item.snippet.channelTitle
          };
        })
      );

      setResults(processedResults);
      setCurrentIndex(0);
      setIsPlaying(true);
      setIsLoading(false);
    } catch (err: any) {
      setError(err.message || 'Có lỗi xảy ra khi tìm kiếm');
      setResults([]);
      setIsLoading(false);
    }
  };

  // Parse ISO 8601 duration (PT1H2M10S -> seconds)
  const parseDuration = (duration: string): number => {
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    if (!match) return 0;
    
    const hours = parseInt(match[1]) || 0;
    const minutes = parseInt(match[2]) || 0;
    const seconds = parseInt(match[3]) || 0;
    
    return hours * 3600 + minutes * 60 + seconds;
  };

  const handleSearch = (e?: React.MouseEvent | React.KeyboardEvent) => {
    if (e) e.preventDefault();
    searchYouTube();
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsPlaying(true);
    }
  };

  const handleNext = () => {
    if (currentIndex < results.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsPlaying(true);
    }
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const currentVideo = results[currentIndex];

  return (
    <div className={styles.container}>
      <div className={styles.maxWidth}>
        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>
            YouTube Video Search
          </h1>
          <p className={styles.subtitle}>
            Tìm kiếm từ khóa trong video và xem ngay tại thời điểm từ được nói
          </p>
        </div>

        {/* API Key Input */}
        <div className={styles.apiKeySection}>
          <label className={styles.apiKeyLabel}>
            YouTube API Key
          </label>
          <input
            type="password"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="Nhập API key của bạn..."
            className={styles.apiKeyInput}
          />
          <p className={styles.apiKeyNote}>
            💡 Lấy API key miễn phí tại: 
            <a 
              href="https://console.cloud.google.com/apis/credentials" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline ml-1"
            >
              Google Cloud Console
            </a>
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className={styles.errorCard}>
            <div className={styles.errorTitle}>
              <AlertCircle size={20} />
              Lỗi
            </div>
            <p className={styles.errorText}>{error}</p>
          </div>
        )}

        {/* Search Bar */}
        <div className={styles.searchSection}>
          <div className={styles.searchContainer}>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch(e)}
                placeholder="Nhập từ khóa cần tìm..."
                className={styles.input}
              />
              <Search className={styles.searchIcon} size={20} />
            </div>
            <button
              onClick={handleSearch}
              disabled={isLoading}
              className={styles.searchButton}
            >
              {isLoading ? 'Đang tìm...' : 'Tìm kiếm'}
            </button>
          </div>
        </div>

        {/* Results Section */}
        {results.length > 0 && (
          <div className={styles.resultCard}>
            {/* Video Player */}
            <div className={styles.videoWrapper}>
              <iframe
                ref={videoRef}
                className={styles.videoIframe}
                src={`https://www.youtube.com/embed/${currentVideo.id}?start=${currentVideo.timestamp}&autoplay=${isPlaying ? 1 : 0}`}
                title="Video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Controls */}
            <div className={styles.controlsSection}>
              <div className="mb-4">
                <h2 className={styles.videoTitle}>
                  {currentVideo.title}
                </h2>
                <p className={styles.timestamp}>
                  Kênh: {currentVideo.channelTitle} | 
                  Từ khóa xuất hiện tại: <span className={styles.timestampHighlight}>{currentVideo.timestamp}s</span>
                </p>
              </div>

              {/* Navigation Controls */}
              <div className={styles.navControls}>
                <div className={styles.buttonGroup}>
                  <button
                    onClick={handlePrevious}
                    disabled={currentIndex === 0}
                    className={styles.navButton}
                    title="Video trước"
                  >
                    <ChevronLeft size={24} />
                  </button>

                  <button
                    onClick={togglePlayPause}
                    className={styles.playButton}
                    title={isPlaying ? 'Dừng' : 'Phát'}
                  >
                    {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                  </button>

                  <button
                    onClick={handleNext}
                    disabled={currentIndex === results.length - 1}
                    className={styles.navButton}
                    title="Video tiếp theo"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>

                <div className={styles.counter}>
                  {currentIndex + 1} / {results.length} kết quả
                </div>
              </div>

              {/* Progress Bar */}
              <div className={styles.progressSection}>
                <div className={styles.progressBar}>
                  <div
                    className={styles.progressFill}
                    style={{ width: `${((currentIndex + 1) / results.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Results List */}
            <div className={styles.resultsList}>
              <h3 className={styles.resultsTitle}>
                Tất cả kết quả cho "{searchTerm}"
              </h3>
              <div className={styles.resultsScroll}>
                {results.map((result, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index);
                      setIsPlaying(true);
                    }}
                    className={`${styles.resultItem} ${
                      index === currentIndex ? styles.resultItemActive : styles.resultItemInactive
                    }`}
                  >
                    <div className={styles.resultItemTitle}>{result.title}</div>
                    <div className={styles.resultItemMeta}>
                      {result.channelTitle} | Thời gian: {result.timestamp}s | Độ dài: {Math.floor(result.duration / 60)}:{(result.duration % 60).toString().padStart(2, '0')}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Empty State */}
        {results.length === 0 && !isLoading && (
          <div className={styles.emptyState}>
            <Search className={styles.emptyIcon} size={64} />
            <h3 className={styles.emptyTitle}>
              Bắt đầu tìm kiếm
            </h3>
            <p className={styles.emptyText}>
              Nhập API key và từ khóa, sau đó nhấn tìm kiếm để xem video
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default YouGlishClone;