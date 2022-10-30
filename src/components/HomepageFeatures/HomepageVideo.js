import React from 'react';
import PropTypes from "prop-types";


const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive p-20 rounded-xl bg-orange-100 flex flex-col gap-8">
    <iframe
      className="w-full h-144"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />

    <div className="text-center text-xl font-semibold bg-white rounded-full m-auto width-full px-5 py-2 inline-flex">
      Watch the video (2:40 min)
    </div>
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default function HomepageVideo() {

  return (
    <section className="relative">
      <div className="container px-32 mb-40">
        <YoutubeEmbed embedId="i_9-gN5SbL0" />
      </div>
    </section>
  );

}
