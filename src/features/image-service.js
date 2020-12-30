const sharp = require('sharp');

exports.inferType = (srcKey) => {
    const typeMatch = srcKey.match(/\.([^.]*)$/);
    if (!typeMatch) {
        console.log("Could not determine the image type.");
        return;
    }
    return typeMatch;
}

exports.isSupported = (typeMatch) => {
    const imageType = typeMatch[1].toLowerCase();
    if (imageType != "jpg" && imageType != "png") {
        console.log(`Unsupported image type: ${imageType}`);
        return false;
    }
    return true;   
}

exports.reducer = async (imageOrigin) => {
    const width  = 200;
    try { 
        console.log(imageOrigin.Body);
        return await sharp(imageOrigin.Body).resize(width).toBuffer();    
    } catch (error) {
        console.log(error);
        return;
    }  
}