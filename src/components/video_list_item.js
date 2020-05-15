import React from 'react';

// video 썸네일, 제목 표시.
// 선택된 비디오 부모 컴포넌트로 전달하는 콜백함수 실행.
const VideoListItem = ({ video, onVideoSelect }) => {
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <li className='list-group-item' onClick={() => onVideoSelect(video)}>
            <div className='video-list media'>
                <div className='media-left'>
                    <img className='media-object' src={imageUrl} alt='video'/>
                </div>
                <div className='media-body'>
                    <div className='media-heading'>{video.snippet.title}</div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;