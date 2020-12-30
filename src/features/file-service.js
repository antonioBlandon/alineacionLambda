const Aws = require('aws-sdk');
exports.s3 = new Aws.S3();

exports.downloadImage = async (srcBucket, srcKey) => {
    try {
        return await exports.s3.getObject({Bucket: srcBucket,Key: srcKey}).promise();
    } catch (error) {
        throw new Error(error.message);
    }  
}

exports.uploadImage = async (dstBucket, dstKey, buffer) => {
    try {
        const destparams = {
            Bucket: dstBucket,
            Key: dstKey,
            Body: buffer,
            ContentType: "image"
        };
        return await exports.s3.putObject(destparams).promise(); 
    } catch (error) {
        throw new Error(error.message);
    } 
}