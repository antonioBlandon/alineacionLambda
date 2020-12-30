const extractEvent = (sqsMessage) => sqsMessage.Records[0].s3;

exports.parse = (event) => {
    const {bucket, object} = extractEvent(event);
    const sourceBucket = bucket.name;
    const sourceKey    = decodeURIComponent(object.key.replace(/\+/g, " "));
    const targetBucket = sourceBucket + "-resized";
    const targetKey    = "resized-" + sourceKey;
    return {
        sourceBucket,
        sourceKey,
        targetBucket,
        targetKey
    }
}
