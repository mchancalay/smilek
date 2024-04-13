import React, { useRef } from 'react';
import videoFile from '../../assets/Bonklana_rocket1.mp4'; // Ruta relativa al archivo de video

const Video = () => {
    const videoRef = useRef(null);

    const toggleFullScreen = () => {
        if (videoRef.current) {
            if (videoRef.current.requestFullscreen) {
                videoRef.current.requestFullscreen();
            } else if (videoRef.current.mozRequestFullScreen) { /* Firefox */
                videoRef.current.mozRequestFullScreen();
            } else if (videoRef.current.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
                videoRef.current.webkitRequestFullscreen();
            } else if (videoRef.current.msRequestFullscreen) { /* IE/Edge */
                videoRef.current.msRequestFullscreen();
            }
        }
    };

    return (
        <div className='video'>
            <video ref={videoRef} controls width="1200px">
                <source src={videoFile} type="video/mp4" className='video__mp4' />
                Tu navegador no admite la reproducción de videos.
            </video>
        </div>
    );
}

export default Video;
