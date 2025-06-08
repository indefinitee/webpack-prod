import { Project } from 'ts-morph';
import path from 'path';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

const UI_PATH = path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui');
const sharedUiDirectory = project.getDirectory(UI_PATH);
const componentsDirs = sharedUiDirectory?.getDirectories();

function isAbsolute(value: string) {
    const layers = ['app', 'shared', 'entities', 'features', 'pages', 'widgets'];
    return layers.some((layer) => value.startsWith(layer));
}

function createPublicApi() {
    componentsDirs?.forEach((directory) => {
        const directoryName = directory.getBaseName();
        const indexFilePath = `${directory.getPath()}/index.ts`;
        const indexFile = directory.getSourceFile(indexFilePath);

        if (!indexFile) {
            const sourceCode = `export * from './${directoryName}';`;
            const file = directory.createSourceFile(indexFilePath, sourceCode, { overwrite: true });

            file.save();
        }
    });
}

function updateSharedApiImports() {
    files.forEach((sourceFile) => {
        const importDeclarations = sourceFile.getImportDeclarations();
        importDeclarations.forEach((declaration) => {
            const value = declaration.getModuleSpecifierValue();
            const valueWithoutAlias = value.replace('@/', '');

            const segments = valueWithoutAlias.split('/');

            const isSharedLayer = segments?.[0] === 'shared';
            const isUiSlice = segments?.[1] === 'ui';

            if (isAbsolute(valueWithoutAlias) && isSharedLayer && isUiSlice) {
                const result = valueWithoutAlias.split('/').slice(0, 3).join('/');
                declaration.setModuleSpecifier(`@/${result}`);
            }
        });
    });
}

createPublicApi();
updateSharedApiImports();

project.save();
