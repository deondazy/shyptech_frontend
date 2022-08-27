import React from 'react';
import { classnames } from 'utils';

export const OfficialHeaderBlock: React.FC<Props> = ({ title, version }) => {

    return (
        <div className={"official-header mt-5"}>

            <h1> {title} </h1>
            {version && <h2> {version} </h2>}

        </div>
    )

}

interface Props {
    title: string,
    version?: string
}

export const OfficialParagraph: React.FC<ParagraphProps> = ({ title, content, className, items, dangerousContent, listClass , value }) => {

    return (
        <div className={classnames("official-paragraph", className)}>

            {title && <h1> {title} </h1>}

            {value && <p> {value} </p>}

            {content && <p> {content} </p>}

            {items ?
                <ul className={classnames(listClass)}>
                    {items.map((entry, index_) =>

                        <li
                            className={classnames(listClass)}
                            key={`unique-entry-for-${title}-${index_}`}>

                            <>

                                {typeof entry === "string" ?

                                    <p className={classnames(listClass)}> {entry} </p>

                                    :

                                    Array.isArray(entry) ?


                                        entry.map((entry, index) =>

                                            <p
                                                className={'mt-1'}
                                                key={`subclass-item-${index_}-${index}`}>

                                                {entry}

                                            </p>
                                        )

                                        :

                                        <span>

                                            {title && <b> {entry.title}: </b>}

                                            {entry.value && <p> {entry.value} </p>}

                                            {entry?.content && <p> {entry.content }</p>}

                                            {entry.items ?

                                                <ul className={entry.itemsClass}>

                                                    {entry.items.map((item, index) =>

                                                        <li key={`subclass-item-${index_}-${index}`}>
                                                            <p
                                                                className={"mt-2"}
                                                            >
                                                                {item}
                                                            </p>
                                                        </li>
                                                    )}

                                                </ul>

                                                : <></>

                                            }

                                        </span>


                                }
                            </>

                        </li>

                    )}
                </ul>
                : <></>
            }

            {dangerousContent && <p dangerouslySetInnerHTML={{ __html: dangerousContent }} />}

        </div>
    )

}

interface ParagraphProps {
    title?: string,
    content?: string,
    value?: string,
    className?: string,
    items?: Array<string | { title?: string, value?: string, content?: string, itemsClass?: string, items?: Array<string> } | Array<string>>,
    dangerousContent?: string,
    listClass?: string,
    tableContent?: {
        heading: string[],
        data: Array<Array<string | any >>
    }
}
