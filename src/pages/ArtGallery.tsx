import "./ArtGallery.scss"

function ArtGallery() {
  return (
<div className="gallery mt-6">

  <h1 className="title has-text-black">Art Gallery</h1>
  {[
    { src: 'https://picsum.photos/seed/1/200/300', caption: 'Text im Bild' },
    { src: 'https://picsum.photos/seed/2/300/300', caption: 'Text im Bild' },
    { src: 'https://picsum.photos/seed/3/200/200', caption: 'Text im Bild' },
    { src: 'https://picsum.photos/seed/4/200/300', caption: 'Text im Bild' },
    { src: 'https://picsum.photos/seed/5/200/200', caption: 'Text im Bild' },
    { src: 'https://picsum.photos/seed/6/200/300', caption: 'Text im Bild' },
    { src: 'https://picsum.photos/seed/7/200/300', caption: 'Text im Bild' },

    { src: 'bild06.png', caption: 'Dreamy.Mode=on' },
    { src: 'bild07.png', caption: 'UglyUs' },
    { src: 'bild08.png', caption: 'Uga Buga' },
    { src: 'bild09.png', caption: 'Melty Miau' },
    { src: 'bild04.png', caption: 'Meeres-Miau' },

    { src: 'bild11.png', caption: 'Philodentron' },
    { src: 'bild12.png', caption: 'Kinky King' },
    { src: 'bild13.png', caption: 'Us' },
    { src: 'bild14.png', caption: 'Planty Handy' },
    { src: 'bild05.png', caption: 'it tikles!' },
    ].map((item, index) => (
    
    <div className="gallery-item" key={index}>

      <figure>
        <img src={`${item.src}`}/>
        <figcaption>{item.caption}</figcaption>
      </figure>

    </div>
  ))}
</div>

  );
}
export default ArtGallery;