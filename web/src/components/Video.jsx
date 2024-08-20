import { Maximize3, Pause, Play, VolumeHigh, VolumeMute } from "iconsax-react";
import { useEffect, useRef, useState } from "react";

export default function Video(props) {
  const videoElementRef = useRef(null);
  const videoBarRef = useRef(null);
  const [videoState, setVideoState] = useState("paused");
  const [videoDuration, setVideoDuration] = useState(null);
  const [videoProgress, setVideoProgress] = useState(0);
  const [volumeMute, setVolumeMute] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  function formatDuration(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  }

  function handleVideo() {
    if (videoElementRef.current) {
      setVideoDuration(videoElementRef.current.duration);
      videoElementRef.current.addEventListener("timeupdate", () =>
        setVideoProgress(videoElementRef.current.currentTime),
      );
      videoElementRef.current.addEventListener("ended", () => {
        setVideoState("paused");
        setVideoProgress(0);
      });
    }
  }

  function pausePlayHandler() {
    if (videoState === "paused") {
      videoElementRef.current.play();
      setVideoState("played");
    } else {
      videoElementRef.current.pause();
      setVideoState("paused");
    }
  }

  function muteUnmuteHandler() {
    setVolumeMute((prevvalue) => !prevvalue);
    if (volumeMute) {
      videoElementRef.current.volume = 0;
    } else {
      videoElementRef.current.volume = 1;
    }
  }

  function changeTimeRangeHandler(e) {
    if (videoElementRef.current) {
      videoElementRef.current.currentTime = e.target.value;
      setVideoProgress(e.target.value);
    }
  }

  function handleFullscreenChange() {
    setIsFullscreen(
      document.fullscreenElement === videoBarRef.current ||
        document.webkitFullscreenElement === videoBarRef.current ||
        document.mozFullScreenElement === videoBarRef.current ||
        document.msFullscreenElement === videoBarRef.current,
    );
  }

  function toggleFullscreen() {
    if (!isFullscreen) {
      if (videoBarRef.current.requestFullscreen) {
        videoBarRef.current.requestFullscreen();
      } else if (videoBarRef.current.webkitRequestFullscreen) {
        videoBarRef.current.webkitRequestFullscreen();
      } else if (videoBarRef.current.mozRequestFullScreen) {
        videoBarRef.current.mozRequestFullScreen();
      } else if (videoBarRef.current.msRequestFullscreen) {
        videoBarRef.current.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  }

  useEffect(() => {
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("mozfullscreenchange", handleFullscreenChange);
    document.addEventListener("MSFullscreenChange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange,
      );
      document.removeEventListener(
        "mozfullscreenchange",
        handleFullscreenChange,
      );
      document.removeEventListener(
        "MSFullscreenChange",
        handleFullscreenChange,
      );
    };
  }, []);

  return (
    <div className="group relative" ref={videoBarRef}>
      <video
        src={props.src}
        ref={videoElementRef}
        onLoadedMetadata={handleVideo}
        className="h-full w-full object-cover"
      />
      <div
        className={`absolute bottom-4 right-1/2 flex translate-x-1/2 flex-nowrap items-center gap-2 rounded-[10px] bg-transparent bg-white p-3 ${isFullscreen && "fixed z-50"} hidden group-hover:flex`}
      >
        <button type="button" onClick={pausePlayHandler}>
          {videoState === "paused" ? <Play /> : <Pause />}
        </button>
        <input
          type="range"
          min={0}
          max={videoDuration}
          value={videoProgress}
          onChange={changeTimeRangeHandler}
          className="relative h-2"
        />
        <p className="text-xs font-medium text-secondary">
          {formatDuration(videoProgress)}/{formatDuration(videoDuration)}
        </p>
        <div className="flex flex-nowrap gap-1">
          <button type="button" onClick={toggleFullscreen}>
            <Maximize3 color="#54577A" />
          </button>
          <button type="button" onClick={muteUnmuteHandler}>
            {volumeMute ? (
              <VolumeHigh color="#54577A" />
            ) : (
              <VolumeMute color="#54577A" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
