import { PluginItem } from '@babel/core';

export default function (): PluginItem {
    return {
        visitor: {
            Program(path, state) {
                const forbidden = state.opts.props || [];

                path.traverse({
                    JSXIdentifier(current) {
                        const nodeName = current.node.name;

                        const isNodeNameForbidden = forbidden.includes(nodeName);
                        if (isNodeNameForbidden) {
                            current.parentPath.remove();
                        }
                    },
                });
            },
        },
    };
}
