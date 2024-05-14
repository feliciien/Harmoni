import React from 'react'
import './VideoCaptionGenerator.css';

const VideoCaptionGenerator = () => {
  return (
    <div className='wrapper'>
        <div className='form-box'>
        <form action="">
          <h1>Video Caption Generator</h1>

          <div className='input-box'>
            <label>Path to the input subtitle file:</label>
            <input type='text' placeholder='input_file_path' required />
          </div>

          <div className='input-box'>
          <label>Number of subtitles to process in a batch:</label>
            <input type='text' placeholder='batch_size' required />
          </div>

          <div className='input-box'>
          <label>Source language of the input subtitle file. (Optional, default: 'en' for English):</label>
            <input type='text' placeholder='source_language: en' required />
          </div>

          <div className='input-box'>
          <label>Language to translate to (use language code):</label>
            <input type='text' placeholder='target_language' required />
          </div>

          <div className='input-box'>
          <label>Additional information about the video to improve translation accuracy. (Optional):</label>
            <input type='text' placeholder='video_info' required />
          </div>

          <button type='submit'>Generate</button>

        </form>
      </div>
    </div>
  );
};

export default VideoCaptionGenerator