const { EventParser } = require('../../src/features');
const event=require('../data/inputFile.json');

describe('EventParser.parse', () => {
    test('', () => {
        //Arrange
        const expected = {
            sourceBucket: 'pruebas-de-integracion',
            sourceKey: 'big-lambda.jpg',
            targetBucket: 'pruebas-de-integracion-resized',
            targetKey: 'resized-big-lambda.jpg'
        };
        //Act
        const result = EventParser.parse(event);
        //Assert
        expect(result).toBeDefined();
        expect(result.sourceBucket).toBe(expected.sourceBucket);
        expect(result.sourceKey).toBe(expected.sourceKey);
        expect(result.targetBucket).toBe(expected.targetBucket);
        expect(result.targetKey).toBe(expected.targetKey);
    })
})