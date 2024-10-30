import React from 'react';

interface TextFormatterProps {
    content: any;
}

const TextFormatter: React.FC<TextFormatterProps> = ({content}) => {
    if (typeof content === 'string') {
        return splitPlainTextByNewlines(content);
    } else if (Array.isArray(content)) {
        return <div>{renderStructuredContent(content)}</div>;
    } else {
        return null;
    }
};

const splitPlainTextByNewlines = (text: string) => {
    return <div>
        {
            text.split('\n').map((line, index) => (
                <p key={index}>{line.trim()}</p>
            ))}
    </div>
};

const renderStructuredContent = (nodes: any[]): React.ReactNode => {
    return nodes.map((node, index) => {
        switch (node.type) {
            case 'paragraph':
                return renderParagraph(node, index);
            case 'heading':
                return renderHeading(node, index);
            case 'list':
                return renderUnorderedList(node, index);
            case 'numbered-list':
                return renderOrderedList(node, index);
            default:
                return renderInlineNodes(node.children);
        }
    });
};

const renderParagraph = (node: any, key: number) => {
    return <p key={key}>{renderInlineNodes(node.children)}</p>;
};

const renderHeading = (node: any, key: number) => {
    return <h2 key={key}>{renderInlineNodes(node.children)}</h2>;
};

const renderUnorderedList = (node: any, key: number) => {
    return (
        <ul key={key}>
            {node.children.map((liNode: any, liIndex: number) => (
                <li key={liIndex}>{renderInlineNodes(liNode.children)}</li>
            ))}
        </ul>
    );
};

const renderOrderedList = (node: any, key: number) => {
    return (
        <ol key={key}>
            {node.children.map((liNode: any, liIndex: number) => (
                <li key={liIndex}>{renderInlineNodes(liNode.children)}</li>
            ))}
        </ol>
    );
};

const renderInlineNodes = (nodes: any[]): React.ReactNode => {
    if (!nodes || !Array.isArray(nodes)) return null;

    return nodes.map((node, index) => {
        if (node.type === 'link') {
            return renderLink(node, index);
        } else if (node.bold) {
            return <strong key={index}>{renderInlineNodes(node.children)}</strong>;
        } else if (node.italic) {
            return <em key={index}>{renderInlineNodes(node.children)}</em>;
        } else if (typeof node.text === 'string') {
            return node.text;
        } else if (node.children && Array.isArray(node.children)) {
            return renderInlineNodes(node.children);
        } else {
            return null;
        }
    });
};

const renderLink = (node: any, key: number) => {
    return (
        <a key={key} href={node.url} target="_blank" rel="noopener noreferrer">
            {renderInlineNodes(node.children)}
        </a>
    );
};

export default TextFormatter;
