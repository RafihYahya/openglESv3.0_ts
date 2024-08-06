

 const pngToBuffer = async () => {
  
    await fetch('https://png.pngtree.com/png-vector/20211023/ourmid/pngtree-salon-logo-png-image_4004444.png').then(r => r.arrayBuffer()).then(
        buffer => {
            let bufferUint8 = new Uint8Array(buffer);
            let imageDecoder = new ImageDecoder({data:buffer,type:'image/png'})
            
            imageDecoder.decode({frameIndex:0}).then((r:ImageDecodeResult) => console.log(r.image))
            console.log(bufferUint8)
        });
}

export const htmlimg = new Image()