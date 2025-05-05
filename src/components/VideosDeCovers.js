import React from 'react';
import Header from './Header'; 
import '../App.css';

const videosData = [
  {
    id: 1,
    title: 'Linkin Park “Numb” (Acoustic Cover)',
    description: 'Cover of “Numb” by Linkin Park. This is definitely one of my favorite songs by one of my favorite bands ever.',
    videoID: 'vICkDDghu5g',
    videoLink: 'https://www.youtube.com/watch?v=vICkDDghu5g',
    channelLink: 'https://www.youtube.com/channel/UCsUr4EPxn-2M5SQnC0GrOeA',
  },
  {
    id: 2,
    title: 'NEW DIVIDE (Cover by Matt Se7en)',
    description: 'Cover video of  "New Divide" by Linkin Park from Transformers: Revenge Of The Fallen',
    videoID: '9Ws2UdgxqHc',
    videoLink: 'https://www.youtube.com/watch?v=9Ws2UdgxqHc',
    channelLink: 'https://www.youtube.com/channel/UCSmkO_s27N221ht7CC6yCjQ',
  },
  {
    id: 3,
    title: 'Cover - Crawling (by bobbyamaru)',
    description: 'Excelente dúo!',
    videoID: 'YOhExB_HGYw',
    videoLink: 'https://www.youtube.com/shorts/YOhExB_HGYw',
    channelLink: 'https://www.youtube.com/@bobbyamaru',
  },
  {
    id: 4,
    title: 'Crawling (Acoustic Cover by Dave Winkler)',
    description: ' “Crawling“ - Linkin Park - Acoustic Version by Dave Winkler',
    videoID: 'Kv3UfIZsS6A',
    videoLink: 'https://www.youtube.com/watch?v=Kv3UfIZsS6A',
    channelLink: 'https://www.youtube.com/channel/UCyogxd8ZEKBzkkOUfB3ZvUw',
  },
  {
    id: 5,
    title: 'Burn It Down (Acoustic Cover by Lincoln Park)',
    description: 'Linkin Park tribute band from the Republic of Belarus (Minsk city)',
    videoID: 'UWUhKlCGIVw',
    videoLink: 'https://www.youtube.com/watch?v=UWUhKlCGIVw',
    channelLink: 'https://www.youtube.com/@lincoln_park',
  },
  {
    id: 6,
    title: 'IN THE END (Acoustic Cover by HYBRID THEORY)',
    description: 'The Best Song Of The Linkin Park ',
    videoID: 'omIKpZYq66M',
    videoLink: 'https://www.youtube.com/watch?v=omIKpZYq66M',
    channelLink: 'https://www.youtube.com/@HYBRIDTHEORYPT',
  },
  // Agrega más objetos de datos para más videos según sea necesario
];

const VideosDeCovers = () => {
  return (
    <section id="videos-de-covers">
      <Header />
      <div className='Videos-Container'>
        <h1 className='Videos-título'>Covers</h1>
        {videosData.map((video) => (
          <div key={video.id} className="video">
            <a href={video.videoLink} target="_blank" rel="noopener noreferrer">
              <img src={`https://img.youtube.com/vi/${video.videoID}/maxresdefault.jpg`} alt={video.title} className="video-thumbnail" />
            </a>
            <div className="video-content">
              <h3>{video.title}</h3>
              <p>{video.description}</p>
              <div className="video-links">
                <a href={video.channelLink} target="_blank" rel="noopener noreferrer">Ver canal del artista</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideosDeCovers;
