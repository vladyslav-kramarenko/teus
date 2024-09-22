export const formatLinksInText = (text: string): React.ReactNode => {
    const linkRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(linkRegex);

    return parts.map((part, i) =>
        linkRegex.test(part) ? (
            <a href={part} key={i} target="_blank" rel="noopener noreferrer">
                {part.replace(/^https?:\/\//, '')}
            </a>
        ) : (
            part
        )
    );
};
