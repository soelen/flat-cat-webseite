import sharp from 'sharp';

import fs from 'fs/promises';

fs.readdir( './not-really-public-images-lol' ).then( files => {
    // fs.writeFile( 'images.json', JSON.stringify( files, null, 2 ) );
    files.forEach( file => {
        sharp( `./not-really-public-images-lol/${ file }`)
        .composite([{ input: './wasserzeichen.png', gravity: 'center' }])
        .toFile( `./public/images/${ file }` )
    })
})