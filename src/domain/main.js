exports.imageReducerService = async (event, FileService, ImageService) => {
    try {
        const { sourceBucket, sourceKey, targetBucket, targetKey } = event;
        const imageType = ImageService.inferType(sourceKey);
        const imageIsSupported = ImageService.isSupported(imageType);
        
        if(imageIsSupported) {
            const imageOrigin = await FileService.downloadImage(sourceBucket, sourceKey)
            const imageResult = await ImageService.reducer(imageOrigin);
            await FileService.uploadImage(targetBucket, targetKey, imageResult);
            console.log(`Finished imageReducerService succesfully`);
        }else {
            console.log(`Finished imageReducerService failed`);
        }
    }
    catch (error) {
        console.error(`Thrown imageReducerService`);
        throw error;
    }
}; 