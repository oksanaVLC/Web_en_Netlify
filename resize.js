/*const sharp = require('sharp');

const inputPath = 'src\\img\\arrowyeallow.png';

function resizeAndConvert() {
    const sizes = [
      { width: 320, output: 'src\\img\\arrowyeallow_320w.webp', format: 'webp' },
      { width: 640, output: 'src\\img\\arrowyeallow_640w.webp', format: 'webp' },
      { width: 1200, output: 'src\\img\\arrowyeallow_1200w.webp', format: 'webp' },
      { width: 320, output: 'src\\img\\arrowyeallow_320w.avif', format: 'avif' },
      { width: 640, output: 'src\\img\\arrowyeallow_640w.avif', format: 'avif' },
      { width: 1200, output: 'src\\img\\arrowyeallow_1200w.avif', format: 'avif' },
    ];
  
    sizes.forEach((size) => {
        sharp(inputPath)
        .resize({ width: size.width }) 
        .toFormat(size.format) 
        .toFile(size.output) 
        .then(() => {
            console.log(`Imagen redimensionada a ${size.width}px y convertida a ${size.format}, guardada como ${size.output}`);
        })
        .catch((err) => {
             console.error('Error al procesar la imagen:', err);
         });
     });
}

resizeAndConvert();




const sharp = require('sharp');

const inputPath = 'src\\img\\homemade-newyork-cheesecake-with-lemon-mint-healthy-organic-dessert-top-view.jpg';

function resizeAndConvert() {
    const formats = [
      { output: 'src\\img\\cheesecake.webp', format: 'webp' },
      { output: 'src\\img\\cheesecake.avif', format: 'avif' },
    ];
  
    formats.forEach((format) => {
        sharp(inputPath)
        .toFormat(format.format) 
        .toFile(format.output) 
        .then(() => {
            console.log(`Imagen convertida a ${format.format}, guardada como ${format.output}`);
        })
        .catch((err) => {
             console.error('Error al procesar la imagen:', err);
         });
     });
}

resizeAndConvert();






const sharp = require('sharp');

const images = [
  { inputPath: 'src\\img\\vecteezy_slice-of-vegetarian-lasagna-garnished-with-fresh-ingredients_49788410.jpg', outputBaseName: 'vegetarian-lasagna' },
  { inputPath: 'src\\img\\traditional-russian-pelmeni-dumplings-with-meat.jpg', outputBaseName: 'pelmeni' },
  { inputPath: 'src\\img\\vecteezy_a-fresh-mediterranean-salad-bowl-with-vegetables-olives_49007155.jpg', outputBaseName: 'mediterranean-salad' },
  { inputPath: 'src\\img\\high-angle-asian-dish-with-salad-eggs.jpg', outputBaseName: 'ramen' },
  { inputPath: 'src\\img\\vecteezy_classic-lasagna-with-bolognese-sauce_7238319.jpg', outputBaseName: 'lasagna-bolognese' },
  { inputPath: 'src\\img\\travel-mediterranean-aegean-traditional-architecture.jpg', outputBaseName: 'greece' },
  { inputPath: 'src\\img\\Spain.jpeg', outputBaseName: 'spain' },
  { inputPath: 'src\\img\\Russia.jpg', outputBaseName: 'russia' },
  { inputPath: 'src\\img\\Japan.jpg', outputBaseName: 'japan' },
  { inputPath: 'src\\img\\France.jpg', outputBaseName: 'france' },
  { inputPath: 'src\\img\\Turkey.jpg', outputBaseName: 'turkey' },
];

function resizeAndConvert() {
  images.forEach((image) => {
    const sizes = [
      { height: 300, output: `src\\img\\${image.outputBaseName}_300h.webp`, format: 'webp' },
      { height: 300, output: `src\\img\\${image.outputBaseName}_300h.avif`, format: 'avif' },
    ];

    sizes.forEach((size) => {
      sharp(image.inputPath)
        .resize({ height: size.height })
        .toFormat(size.format)
        .toFile(size.output)
        .then(() => {
          console.log(`Imagen redimensionada a ${size.height}px de altura y convertida a ${size.format}, guardada como ${size.output}`);
        })
        .catch((err) => {
          console.error('Error al procesar la imagen:', err);
        });
    });
  });
}

resizeAndConvert();




const sharp = require('sharp');

const inputPath = 'src\\img\\vecteezy_slice-of-vegetarian-lasagna-garnished-with-fresh-ingredients_49788410.jpg';

function resizeAndConvert() {
    const formats = [
        { output: 'src\\img\\vegetarian-lasagna.webp', format: 'webp' },
        { output: 'src\\img\\vegetarian-lasagna.avif', format: 'avif' },
    ];
  
    formats.forEach((format) => {
        sharp(inputPath)
            .toFormat(format.format) 
            .toFile(format.output) 
            .then(() => {
                console.log(`Imagen convertida a ${format.format}, guardada como ${format.output}`);
            })
            .catch((err) => {
                console.error('Error al procesar la imagen:', err);
            });
    });
}

resizeAndConvert();



const sharp = require('sharp');

const inputPath = 'src\\img\\traditional-russian-pelmeni-dumplings-with-meat.jpg';

function resizeAndConvert() {
    const formats = [
        { output: 'src\\img\\pelmeni.webp', format: 'webp' },
        { output: 'src\\img\\pelmeni.avif', format: 'avif' },
    ];

    formats.forEach((format) => {
        sharp(inputPath)
            .toFormat(format.format)
            .toFile(format.output)
            .then(() => {
                console.log(`Imagen convertida a ${format.format}, guardada como ${format.output}`);
            })
            .catch((err) => {
                console.error('Error al procesar la imagen:', err);
            });
    });
}

resizeAndConvert();




const sharp = require('sharp');

const inputPath = 'src\\img\\vecteezy_a-fresh-mediterranean-salad-bowl-with-vegetables-olives_49007155.jpg';

function resizeAndConvert() {
    const formats = [
        { output: 'src\\img\\mediterranean-salad.webp', format: 'webp' },
        { output: 'src\\img\\mediterranean-salad.avif', format: 'avif' },
    ];

    formats.forEach((format) => {
        sharp(inputPath)
            .toFormat(format.format)
            .toFile(format.output)
            .then(() => {
                console.log(`Imagen convertida a ${format.format}, guardada como ${format.output}`);
            })
            .catch((err) => {
                console.error('Error al procesar la imagen:', err);
            });
    });
}

resizeAndConvert();



const sharp = require('sharp');

const inputPath = 'src\\img\\high-angle-asian-dish-with-salad-eggs.jpg';

function resizeAndConvert() {
    const formats = [
        { output: 'src\\img\\ramen.webp', format: 'webp' },
        { output: 'src\\img\\ramen.avif', format: 'avif' },
    ];

    formats.forEach((format) => {
        sharp(inputPath)
            .toFormat(format.format)
            .toFile(format.output)
            .then(() => {
                console.log(`Imagen convertida a ${format.format}, guardada como ${format.output}`);
            })
            .catch((err) => {
                console.error('Error al procesar la imagen:', err);
            });
    });
}

resizeAndConvert();




const sharp = require('sharp');

const inputPath = 'src\\img\\delicious-ramen-dark-surface.jpg';

function resizeAndConvert() {
    const formats = [
        { output: 'src\\img\\ramen.webp', format: 'webp' },
        { output: 'src\\img\\ramen.avif', format: 'avif' },
    ];
  
    formats.forEach((format) => {
        sharp(inputPath)
        .toFormat(format.format)
        .toFile(format.output)
        .then(() => {
            console.log(`Imagen convertida a ${format.format}, guardada como ${format.output}`);
        })
        .catch((err) => {
            console.error('Error al procesar la imagen:', err);
        });
    });
}

resizeAndConvert();




const sharp = require('sharp');

const inputPath = 'src\\img\\vecteezy_classic-lasagna-with-bolognese-sauce_7238513.jpg';

function resizeAndConvert() {
    const formats = [
        { output: 'src\\img\\lasagna-bolognese.webp', format: 'webp' },
        { output: 'src\\img\\lasagna-bolognese.avif', format: 'avif' },
    ];
  
    formats.forEach((format) => {
        sharp(inputPath)
        .toFormat(format.format)
        .toFile(format.output)
        .then(() => {
            console.log(`Imagen convertida a ${format.format}, guardada como ${format.output}`);
        })
        .catch((err) => {
            console.error('Error al procesar la imagen:', err);
        });
    });
}

resizeAndConvert();


const sharp = require('sharp');

const inputPath = 'src\\img\\travel-mediterranean-aegean-traditional-architecture.jpg';

function resizeAndConvert() {
    const formats = [
        { output: 'src\\img\\greece.webp', format: 'webp' },
        { output: 'src\\img\\greece.avif', format: 'avif' },
    ];
  
    formats.forEach((format) => {
        sharp(inputPath)
        .toFormat(format.format)
        .toFile(format.output)
        .then(() => {
            console.log(`Imagen convertida a ${format.format}, guardada como ${format.output}`);
        })
        .catch((err) => {
            console.error('Error al procesar la imagen:', err);
        });
    });
}

resizeAndConvert();


const sharp = require('sharp');

const inputPath = 'src\\img\\Spain.jpeg';

function resizeAndConvert() {
    const formats = [
        { output: 'src\\img\\spain.webp', format: 'webp' },
        { output: 'src\\img\\spain.avif', format: 'avif' },
    ];
  
    formats.forEach((format) => {
        sharp(inputPath)
        .toFormat(format.format)
        .toFile(format.output)
        .then(() => {
            console.log(`Imagen convertida a ${format.format}, guardada como ${format.output}`);
        })
        .catch((err) => {
            console.error('Error al procesar la imagen:', err);
        });
    });
}

resizeAndConvert();




const sharp = require('sharp');

const inputPath = 'src\\img\\Russia.jpg';

function resizeAndConvert() {
    const formats = [
        { output: 'src\\img\\russia.webp', format: 'webp' },
        { output: 'src\\img\\russia.avif', format: 'avif' },
    ];
  
    formats.forEach((format) => {
        sharp(inputPath)
        .toFormat(format.format)
        .toFile(format.output)
        .then(() => {
            console.log(`Imagen convertida a ${format.format}, guardada como ${format.output}`);
        })
        .catch((err) => {
            console.error('Error al procesar la imagen:', err);
        });
    });
}

resizeAndConvert();


const sharp = require('sharp');

const inputPath = 'src\\img\\Japan.jpg';

function resizeAndConvert() {
    const formats = [
        { output: 'src\\img\\japan.webp', format: 'webp' },
        { output: 'src\\img\\japan.avif', format: 'avif' },
    ];
  
    formats.forEach((format) => {
        sharp(inputPath)
        .toFormat(format.format)
        .toFile(format.output)
        .then(() => {
            console.log(`Imagen convertida a ${format.format}, guardada como ${format.output}`);
        })
        .catch((err) => {
            console.error('Error al procesar la imagen:', err);
        });
    });
}

resizeAndConvert();


const sharp = require('sharp');

const inputPath = 'src\\img\\eiffel-tower-view.jpg';

function resizeAndConvert() {
    const formats = [
        { output: 'src\\img\\eiffel-tower-view.webp', format: 'webp' },
        { output: 'src\\img\\eiffel-tower-view.avif', format: 'avif' },
    ];
  
    formats.forEach((format) => {
        sharp(inputPath)
        .toFormat(format.format)
        .toFile(format.output)
        .then(() => {
            console.log(`Imagen convertida a ${format.format}, guardada como ${format.output}`);
        })
        .catch((err) => {
            console.error('Error al procesar la imagen:', err);
        });
    });
}

resizeAndConvert();


const sharp = require('sharp');

const inputPath = 'src\\img\\Turkey.jpg';

function resizeAndConvert() {
    const formats = [
      { output: 'src\\img\\turkey.webp', format: 'webp' },
      { output: 'src\\img\\turkey.avif', format: 'avif' },
    ];
  
    formats.forEach((format) => {
        sharp(inputPath)
        .toFormat(format.format)
        .toFile(format.output) 
        .then(() => {
            console.log(`Imagen convertida a ${format.format}, guardada como ${format.output}`);
        })
        .catch((err) => {
             console.error('Error al procesar la imagen:', err);
         });
     });
}

resizeAndConvert();


const sharp = require('sharp');

const inputPath = 'src\\img\\vecteezy_lucky-clover-leaf_13713853.png';

function resizeAndConvert() {
  const formats = [
    { output: 'src\\img\\lucky-clover.webp', format: 'webp' },
    { output: 'src\\img\\lucky-clover.avif', format: 'avif' },
  ];

  formats.forEach((format) => {
    sharp(inputPath)
      .toFormat(format.format)
      .toFile(format.output)
      .then(() => {
        console.log(`Imagen convertida a ${format.format}, guardada como ${format.output}`);
      })
      .catch((err) => {
        console.error('Error al procesar la imagen:', err);
      });
  });
}

resizeAndConvert();


const sharp = require('sharp');

sharp("src\\img\\favourite.png")
  .toFile("src\\img\\favourite.webp", (err, info) => {
    if (err) {
      console.error(err);
    } else {
      console.log(info);
    }
  });




const sharp = require('sharp');

sharp("src\\img\\cook.png")
  .toFile("src\\img\\cook.webp", (err, info) => {
    if (err) {
      console.error(err);
    } else {
      console.log(info);
    }
  });


const sharp = require('sharp');

sharp("src\\img\\picnic-french-alps-with-lake-panoramic-view.jpg")
  .toFile("src\\img\\picnic-french-alps-with-lake-panoramic-view.webp", (err, info) => {
    if (err) {
      console.error(err);
    } else {
      console.log(info);
    }
  });



const sharp = require('sharp');

sharp("src\\img\\picnic-cropped.jpg")
  .toFile("src\\img\\picnic-cropped.webp", (err, info) => {
    if (err) {
      console.error(err);
    } else {
      console.log(info);
    }
  });



const sharp = require('sharp');

sharp("src\\img\\homemade-newyork-cheesecake-with-lemon-mint-healthy-organic-dessert-top-view.jpg")
  .resize({ width: 3120 }) 
  .toFile("src\\img\\homemade-newyork-cheesecake-3120px.jpg", (err, info) => {
    if (err) {
      console.error("Error al procesar la imagen:", err);
    } else {
      console.log("Imagen procesada con éxito:", info);
    }
  });
  

  const sharp = require('sharp');

sharp("src\\img\\vecteezy_south-korean-food_.jpg")
  .toFile("src\\img\\vecteezy_south-korean-food_.webp", (err, info) => {
    if (err) {
      console.error("Error al convertir la imagen:", err);
    } else {
      console.log("Imagen convertida con éxito:", info);
    }
  });


const sharp = require('sharp');

sharp("src\\img\\vecteezy_fresh-vegetables-cartoon_44766741.png")
  .toFile("src\\img\\vecteezy_fresh-vegetables-cartoon_44766741.webp", (err, info) => {
    if (err) {
      console.error("Error al convertir la imagen:", err);
    } else {
      console.log("Imagen convertida con éxito:", info);
    }
  });

  sharp("src\\img\\vecteezy_global-international-food-menu-restaurant-logo-global_11516427.jpg")
  .toFile("src\\img\\vecteezy_global-international-food-menu-restaurant-logo-global_11516427.webp", (err, info) => {
    if (err) {
      console.error("Error al convertir la imagen:", err);
    } else {
      console.log("Imagen convertida con éxito:", info);
    }
  });

  sharp("src\\img\\vecteezy_delicious-creamy-mushroom-soup-served-in-a-rustic-bowl_53812793.png")
  .toFile("src\\img\\vecteezy_delicious-creamy-mushroom-soup-served-in-a-rustic-bowl_53812793.webp", (err, info) => {
    if (err) {
      console.error("Error al convertir la imagen:", err);
    } else {
      console.log("Imagen convertida con éxito:", info);
    }
  });

  sharp("src\\img\\vecteezy_a-fresh-mediterranean-salad-bowl-with-vegetables-olives_49007155.jpg")
  .toFile("src\\img\\vecteezy_a-fresh-mediterranean-salad-bowl-with-vegetables-olives_49007155.webp", (err, info) => {
    if (err) {
      console.error("Error al convertir la imagen:", err);
    } else {
      console.log("Imagen convertida con éxito:", info);
    }
  });

  sharp("src\\img\\vecteezy_tiramisu-dessert-and-coffee-cup-on-light-background_21174408.jpg")
  .toFile("src\\img\\vecteezy_tiramisu-dessert-and-coffee-cup-on-light-background_21174408.webp", (err, info) => {
    if (err) {
      console.error("Error al convertir la imagen:", err);
    } else {
      console.log("Imagen convertida con éxito:", info);
    }
  });

  


   const sharp = require('sharp');

sharp("src\\img\\close-up-crepes-with-cream-strawberries.jpg")
  .toFile("src\\img\\close-up-crepes-with-cream-strawberries.webp", (err, info) => {
    if (err) {
      console.error("Error al convertir la imagen:", err);
    } else {
      console.log("Imagen convertida con éxito:", info);
    }
  });


  */

const sharp = require('sharp');

// Ruta de entrada y salida con barras invertidas
const inputPath = "src\\img\\close-up-crepes-with-cream-strawberries.webp";
const outputPath = "src\\img\\close-up-crepes-with-cream-strawberries-800px.webp";

// Redimensionar la imagen
sharp(inputPath)
  .resize({ width: 800 }) // Redimensionar a 800 px de ancho
  .toFile(outputPath, (err, info) => {
    if (err) {
      console.error("Error al procesar la imagen:", err);
    } else {
      console.log("Imagen procesada con éxito:", info);
    }
  });
