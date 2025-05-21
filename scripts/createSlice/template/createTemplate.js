const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot');
const createModel = require('./createModel');
const createUI = require('./createUI');
const createPublicApi = require('./createPublicApi');

module.exports = async (layer, sliceName) => {
    try {
        await fs.mkdir(resolveRoot(layer, sliceName));

        await createModel(layer, sliceName);
        await createUI(layer, sliceName);
        await createPublicApi(layer, sliceName);

        console.log(`Слайс ${sliceName} создан`);
    } catch (err) {
        console.error(`Не удалось создать директорию слайса ${sliceName}`);
    }
};
