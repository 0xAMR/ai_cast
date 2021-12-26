// Styling
import styled from 'styled-components';
import 'react-h5-audio-player/lib/styles.css';

// Comps
import AudioPlayer from 'react-h5-audio-player';

const StListen = styled.div`
  & .audio__player {
    background-color: #99c0c9;
    border-radius: 5px;
    margin: 0.75em 0;

    & button {
      color: #1e3c59;
    }

    & .rhap_progress-indicator,
    & .rhap_volume-indicator,
    & .rhap_progress-filled {
      background-color: #1e3c59;
    }
  }
`;

export default function Listen({ ...props }) {
  return (
    <StListen>
      <h2>Listen</h2>
      <h3>Episode 1: The End Is Near</h3>
      <AudioPlayer className="audio__player" src="/audio/ep1.mp3" />
      <h3>Episode 2: Lorem Ipsum</h3>
      <AudioPlayer className="audio__player" src="x" />
      <h3>Episode 3: Dolor Sit</h3>
      <AudioPlayer className="audio__player" src="x" />
    </StListen>
  );
}
