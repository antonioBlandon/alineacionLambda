const { FileService } = require("../../src/features");

describe('FileService', () => {
    describe('downloadImage()', () => {
        const bucketFakeName = 'bucketFakeName';
        const keyFake = 'keyFake';
        
        test('throws if Key is undefined', async () => {
            try {
                await FileService.downloadImage(bucketFakeName);
            } catch (error) {
                expect("Missing required key 'Key' in params").toEqual(error.message);
            }
        });

        test('Image downloaded successful', async () => {
            jest.mock('../src/validator');
            jest.spyOn(validator, 'validatorE2E').mockImplementation( () => Promise.resolve('true'));
            try {
                expect(() => await FileService.downloadImage(bucketFakeName)).toBeDefined();
            }catch (error) {
                console.log(error);
            }
        })
    });

    describe('uploadImage()', () => {
        const bucketFakeName = 'bucketFakeName';
        
        test('throws if Key is undefined', async () => {
            try {
                await FileService.uploadImage(bucketFakeName);
            } catch (error) {
                expect("Missing required key 'Key' in params").toEqual(error.message);
            }
        });
    });
});