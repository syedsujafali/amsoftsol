const { Project, SyntaxKind } = require('ts-morph');
const fs = require('fs');

const project = new Project();
project.addSourceFilesAtPaths("c:/Users/DELL/Desktop/projects/amsoftwrelive/src/**/*.tsx");
project.addSourceFilesAtPaths("c:/Users/DELL/Desktop/projects/amsoftwrelive/src/**/*.ts");

const propsToRemove = new Set([
    'initial', 'animate', 'whileInView', 'whileHover', 'whileTap',
    'viewport', 'transition', 'variants', 'exit', 'layoutId', 'layout',
    'features'
]);

const files = project.getSourceFiles();
console.log(`Found ${files.length} files to process.`);

let modifiedFiles = 0;

for (const sourceFile of files) {
    let modified = false;

    // 1. Remove framer-motion imports
    const imports = sourceFile.getImportDeclarations();
    for (const imp of imports) {
        if (imp.getModuleSpecifierValue() === 'framer-motion') {
            imp.remove();
            modified = true;
        }
    }

    // 2. Process JSX Elements
    const processElement = (element) => {
        const tagNameNode = element.getTagNameNode();
        const tagName = tagNameNode.getText();

        if (tagName.startsWith('motion.') || tagName.startsWith('m.')) {
            const newTagName = tagName.split('.')[1];
            tagNameNode.replaceWithText(newTagName);
            modified = true;
        }

        // Remove props
        for (const attr of element.getAttributes()) {
            if (attr.getKind() === SyntaxKind.JsxAttribute) {
                if (propsToRemove.has(attr.getNameNode().getText())) {
                    attr.remove();
                    modified = true;
                }
            }
        }
    };

    sourceFile.getDescendantsOfKind(SyntaxKind.JsxOpeningElement).forEach(processElement);
    sourceFile.getDescendantsOfKind(SyntaxKind.JsxSelfClosingElement).forEach(processElement);

    sourceFile.getDescendantsOfKind(SyntaxKind.JsxClosingElement).forEach(element => {
        const tagNameNode = element.getTagNameNode();
        const tagName = tagNameNode.getText();
        if (tagName.startsWith('motion.') || tagName.startsWith('m.')) {
            const newTagName = tagName.split('.')[1];
            tagNameNode.replaceWithText(newTagName);
            modified = true;
        }
    });

    if (modified) {
        sourceFile.saveSync();
        modifiedFiles++;

        // Second pass: Regex to replace <LazyMotion ...> and <AnimatePresence ...> with <>
        let text = fs.readFileSync(sourceFile.getFilePath(), 'utf8');
        let newText = text.replace(/<LazyMotion[^>]*>/g, '<>').replace(/<\/LazyMotion>/g, '</>');
        newText = newText.replace(/<AnimatePresence[^>]*>/g, '<>').replace(/<\/AnimatePresence>/g, '</>');

        if (text !== newText) {
            fs.writeFileSync(sourceFile.getFilePath(), newText);
        }
        console.log(`Updated ${sourceFile.getFilePath()}`);
    }
}

console.log(`Done processing. Modified ${modifiedFiles} files.`);
