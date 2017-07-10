// @flow
import React from 'react';

type Track = {
    id: number,
    title: string
};

type Props = {
    tracks: Array<Track>
};

// eslint-disable-next-line react/prefer-stateless-function
function Stream(props: Props) {
    return (
        <div>
            {props.tracks.map(track =>
                <div className="track" key={track.id}>{track.title}</div>
            )}
        </div>
    );
}

export default Stream;
