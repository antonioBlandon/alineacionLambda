const { EventParser, FileService, ImageService } = require('./features');
const ImageReducerService = require('./domain');

exports.handler = (event) => {
    ImageReducerService.imageReducerService(EventParser.parse(event), FileService, ImageService);   
};