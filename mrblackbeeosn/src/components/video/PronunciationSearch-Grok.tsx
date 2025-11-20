// components/VideoSearch.tsx / BY Claude
// YOUTUBE_API_KEY = 'AIzaSyAOmUMZVxLkKBRqJxHJi89wPoTV6yIcqBE';

'use client';

import React, { useState, useRef, useEffect } from 'react';
import YouTube from 'react-youtube';
import axios from 'axios';
import { Search, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

interface CaptionSegment {
  text: string;
  start: number; // giây
  dur: number;
}

interface VideoResult {
  videoId: string;
  title: string;
  channelTitle: string;
  thumbnail: string;
  captions: CaptionSegment[];
}

export default function YouGlishClone() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<VideoResult[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const playerRef = useRef<any>(null);

  // Thay bằng API key của bạn
  const YOUTUBE_API_KEY = 'AIzaSyAOmUMZVxLkKBRqJxHJi89wPoTV6yIcqBE';

  const searchVideos = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setResults([]);

    try {
      // Bước 1: Tìm video có caption tiếng Anh chứa từ khóa
      const searchRes = await axios.get(
        `https://www.googleapis.com/youtube/v3/search`, {
          params: {
            part: 'snippet',
            q: query,
            type: 'video',
            videoCaption: 'closedCaption',
            maxResults: 20,
            key: YOUTUBE_API_KEY,
            relevanceLanguage: 'en'
          }
        }
      );

      const videos = searchRes.data.items;
      const validVideos: VideoResult[] = [];

      // Bước 2: Với mỗi video, lấy caption và tìm đoạn chứa từ khóa
      for (const video of videos) {
        if (!video.id?.videoId) continue;

        try {
          const captionRes = await axios.get(
            `https://www.googleapis.com/youtube/v3/captions`, {
              params: {
                part: 'snippet',
                videoId: video.id.videoId,
                key: YOUTUBE_API_KEY
              }
            }
          );

          const enCaption = captionRes.data.items.find((c: any) => 
            c.snippet.language === 'en' || c.snippet.language.startsWith('en')
          );

          if (!enCaption) continue;

          // Lấy nội dung caption (dfxp/xml)
          const trackRes = await axios.get(
            `https://www.googleapis.com/youtube/v3/captions/${enCaption.id}`,
            {
              params: { tfmt: 'vtt', key: YOUTUBE_API_KEY },
              headers: { Accept: 'text/vtt' }
            }
          );

          const vttText = trackRes.data;
          const segments = parseVTT(vttText, query.toLowerCase());

          if (segments.length > 0) {
            validVideos.push({
              videoId: video.id.videoId,
              title: video.snippet.title,
              channelTitle: video.snippet.channelTitle,
              thumbnail: video.snippet.thumbnails.high.url,
              captions: segments
            });

            if (validVideos.length >= 10) break; // đủ rồi
          }
        } catch (err) {
          continue; // video không có caption hoặc lỗi
        }
      }

      setResults(validVideos);
      setCurrentIndex(0);
    } catch (err) {
      console.error(err);
      alert('Lỗi tìm kiếm. Kiểm tra API key hoặc quota YouTube.');
    } finally {
      setLoading(false);
    }
  };

  // Parse VTT và tìm các đoạn chứa từ khóa
  const parseVTT = (vtt: string, keyword: string): CaptionSegment[] => {
    const lines = vtt.split('\n');
    const segments: CaptionSegment[] = [];
    let current: Partial<CaptionSegment> = {};

    for (const line of lines) {
      if (line.includes('-->')) {
        const times = line.split(' --> ')[0];
        const start = timeToSeconds(times.split('.')[0]);
        current.start = start;
      } else if (line.trim() && !line.startsWith('NOTE') && !line.includes('WEBVTT')) {
        const text = line.toLowerCase();
        if (text.includes(keyword)) {
          segments.push({
            text: line,
            start: current.start || 0,
            dur: 3
          });
        }
      }
    }
    return segments;
  };

  const timeToSeconds = (time: string): number => {
    const [h, m, s] = time.split(':').map(Number);
    return h * 3600 + m * 60 + s;
  };

  const onPlayerReady = (event: any) => {
    playerRef.current = event.target;
    if (results.length > 0 && results[currentIndex]?.captions.length > 0) {
      const start = results[currentIndex].captions[0].start;
      event.target.seekTo(start, true);
      event.target.playVideo();
      setIsPlaying(true);
    }
  };

  const goToSegment = (segmentIndex: number) => {
    if (!playerRef.current || results.length === 0) return;
    const seg = results[currentIndex].captions[segmentIndex];
    if (seg) {
      playerRef.current.seekTo(seg.start, true);
      playerRef.current.playVideo();
      setIsPlaying(true);
    }
  };

  const nextVideo = () => {
    if (currentIndex < results.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prevVideo = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const togglePlayPause = () => {
    if (!playerRef.current) return;
    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
    setIsPlaying(!isPlaying);
  };

  const currentVideo = results[currentIndex];

  return (
    <>
      <div className="max-w-4xl mx-auto p-6 font-sans">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          YouGlish Clone – Phát âm từ trong video thật
        </h1>

        {/* Search bar */}
        <div className="flex gap-3 mb-8">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && searchVideos()}
            placeholder="Nhập từ hoặc câu cần nghe phát âm (tiếng Anh)"
            className="flex-1 px-5 py-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={searchVideos}
            disabled={loading}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center gap-2"
          >
            {loading ? 'Đang tìm...' : <><Search size={24} /> Tìm</>}
          </button>
        </div>

        {results.length === 0 && !loading && query && (
          <div className="text-center text-gray-500 py-20">
            Không tìm thấy video nào chứa phụ đề cho từ này.
          </div>
        )}

        {currentVideo && (
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            {/* Video player */}
            <div className="relative bg-black aspect-video">
              <YouTube
                videoId={currentVideo.videoId}
                opts={{
                  width: '100%',
                  height: '100%',
                  playerVars: {
                    autoplay: 1,
                    cc_load_policy: 1,
                    cc_lang_pref: 'en',
                    modestbranding: 1,
                  },
                }}
                className="absolute inset-0"
                iframeClassName="w-full h-full"
                onReady={onPlayerReady}
                onStateChange={(e) => setIsPlaying(e.data === 1)}
              />
            </div>

            {/* Controls */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <button
                    onClick={prevVideo}
                    disabled={currentIndex === 0}
                    className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
                  >
                    <ChevronLeft size={28} />
                  </button>

                  <button
                    onClick={togglePlayPause}
                    className="p-4 rounded-full bg-blue-600 text-white hover:bg-blue-700"
                  >
                    {isPlaying ? <Pause size={32} /> : <Play size={32} />}
                  </button>

                  <button
                    onClick={nextVideo}
                    disabled={currentIndex >= results.length - 1}
                    className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
                  >
                    <ChevronRight size={28} />
                  </button>
                </div>

                <div className="text-sm text-gray-600">
                  {currentIndex + 1} / {results.length}
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-2">{currentVideo.title}</h3>
              <p className="text-gray-600 mb-4">{currentVideo.channelTitle}</p>

              {/* Các đoạn phát âm cụ thể */}
              <div className="space-y-2">
                <p className="font-medium text-gray-700">
                  Các lần xuất hiện "<span className="text-blue-600 font-bold">{query}</span>" trong phụ đề:
                </p>
                {currentVideo.captions.map((seg, i) => (
                  <button
                    key={i}
                    onClick={() => goToSegment(i)}
                    className="block w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition"
                  >
                    <span className="text-sm text-gray-500">
                      {new Date(seg.start * 1000).toISOString().substr(11, 8)} →
                    </span>{' '}
                    <span className="ml-3 highlight font-medium">
                      {seg.text.replace(
                        new RegExp(`(${query})`, 'gi'),
                        '<mark class="bg-yellow-300">$1</mark>'
                      )}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Danh sách kết quả nhỏ (tùy chọn) */}
        {results.length > 1 && (
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {results.map((v, i) => (
              <div
                key={v.videoId}
                onClick={() => setCurrentIndex(i)}
                className={`cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition ${
                  i === currentIndex ? 'ring-4 ring-blue-500' : ''
                }`}
              >
                <img src={v.thumbnail} alt="" className="w-full aspect-video object-cover" />
                <div className="p-2 text-xs">
                  <p className="font-medium truncate">{v.title}</p>
                  <p className="text-gray-500 truncate">{v.channelTitle}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        .highlight mark {
          background: #fef3c7 !important;
          padding: 0 4px;
          border-radius: 4px;
        }
      `}</style>
    </>
  );
}