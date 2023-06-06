import "./ArtGallery.scss"

function ArtGallery() {
  return (
<div className="gallery mt-6">

  <h1 className="title has-text-black">Art Gallery</h1>
  {[
    { src: 'example01.jpg', caption: 'Text im Bild' },
    { src: 'example02.jpg', caption: 'Text im Bild' },
    { src: 'example03.jpg', caption: 'Text im Bild' },
    { src: 'example04.jpg', caption: 'Text im Bild' },
    { src: 'example01.jpg', caption: 'Text im Bild' },
    { src: 'example03.jpg', caption: 'Text im Bild' },
    { src: 'example04.jpg', caption: 'Text im Bild' },
    { src: 'example02.jpg', caption: 'Text im Bild' },
    { src: 'example01.jpg', caption: 'Text im Bild' },

    ].map((item, index) => (
    
    <div className="gallery-item" key={index}>

      <figure>
        <img src={`/img/artgallery/${item.src}`}/>
        <figcaption>{item.caption}</figcaption>
      </figure>

    </div>
  ))}
</div>

  );
}
export default ArtGallery;