const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot');
const reduxSliceTemplate = require('./reduxSliceTemplate');
const schemaTypeTemplate = require('./schemaTypeTemplate');

module.exports = async (layer, sliceName) => {
    const resolveModelPath = (...segments) => resolveRoot(layer, sliceName, 'model', ...segments);

    const createModelStructure = async () => {
        try {
            await fs.mkdir(resolveModelPath());
            await fs.mkdir(resolveModelPath('types'));
            await fs.mkdir(resolveModelPath('services'));
            await fs.mkdir(resolveModelPath('selectors'));
            await fs.mkdir(resolveModelPath('slices'));
        } catch (err) {
            console.error(`Не удалось создать сегмент model в слайсе ${sliceName}`, err);
        }
    };

    const createReduxSlice = async () => {
        try {
            await fs.writeFile(
                resolveModelPath('slices', `${sliceName}Slice.ts`),
                reduxSliceTemplate(sliceName),
            );
        } catch (err) {
            console.error(`Не удалось создать redux slice в слайсе ${sliceName}`, err);
        }
    };

    const createSchemaType = async () => {
        try {
            await fs.writeFile(
                resolveModelPath('types', `${sliceName}Schema.ts`),
                schemaTypeTemplate(sliceName),
            );
        } catch (err) {
            console.error(`Не удалось создать тип схемы для стейса слайса ${sliceName}`, err);
        }
    };

    await createModelStructure();
    await createReduxSlice();
    await createSchemaType();
};
