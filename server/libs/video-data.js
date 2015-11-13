const videoData = (video, size) => {
    // group the renditions by codecs
    const codecGroups = video.renditions
        .reduce((codecGroups, rendition) => {
            if (codecGroups[rendition.videoCodec]) {
                codecGroups[rendition.videoCodec].push(rendition);
            } else {
                codecGroups[rendition.videoCodec] = [rendition];
            }
            return codecGroups
        }, {});
    // get the appropriate size for each codec
    const renditions = Object.keys(codecGroups)
        .map(codec => codecGroups[codec])
        .map(renditions => {
            // sort by width
            return renditions
                .sort((renditionOne, renditionTwo) => renditionTwo.frameWidth - renditionOne.frameWidth)
                .reduce((previousRendition, rendition) => {
                    if (rendition.frameWidth >= size) {
                        return rendition;
                    } else {
                        return previousRendition;
                    }
                });
        });
    const data = {
        videoStillURL: video.image.rawSrc,
        renditions
    };
    return JSON.stringify(data);
};

export default videoData;
