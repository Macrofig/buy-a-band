import DOMPurify from 'dompurify'

export const DangerousHtml = ({content}) => (
    <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(content)}} />
)