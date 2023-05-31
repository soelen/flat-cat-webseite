import "./ArtGallery.scss"

function ArtGallery() {

  return (

<div className="gallery">
  {[
    { src: './public/img/artgallery/example01.jpg', caption: 'Text im Bild' },
    { src: './public/img/artgallery/example02.jpg', caption: 'Text im Bild' },
    { src: './public/img/artgallery/example03.jpg', caption: 'Text im Bild' },
    { src: './public/img/artgallery/example04.jpg', caption: 'Text im Bild' },
    { src: './public/img/artgallery/example01.jpg', caption: 'Text im Bild' },
    { src: './public/img/artgallery/example03.jpg', caption: 'Text im Bild' },
    { src: './public/img/artgallery/example04.jpg', caption: 'Text im Bild' },
    { src: './public/img/artgallery/example02.jpg', caption: 'Text im Bild' },
    { src: './public/img/artgallery/example01.jpg', caption: 'Text im Bild' },
    ]
.map((item, index) => (
    
    <div className="gallery-item" key={index}>

      <figure>
        <img src={item.src}/>
        <figcaption>{item.caption}</figcaption>
      </figure>
      
    </div>
  ))}
</div>

  );
}
export default ArtGallery;