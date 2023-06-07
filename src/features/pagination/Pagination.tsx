import React, {useState} from 'react';

type PropsType = {
    totalCount: number;
    pageSize: number;
    currentPage: number;
    selectPage: (page: number) => void
}
export const Pagination = (props: PropsType) => {


    let allPages = Math.ceil(props.totalCount / props.pageSize);

    let ArrayPages: Array<number> = [];

    for (let i = 1; i <= allPages; i++) {
        ArrayPages.push(i)
    }

    let [currentPagesOutput, setCurrentPagesOutput] = useState<number>(1);

    let countPagesOutputInLine = 10;

    const prevCountPageOutput = (currentPagesOutput - 1) * countPagesOutputInLine + 1;
    const nextCountPageOutput = currentPagesOutput * countPagesOutputInLine;

    const prevPortionPages = () => {
        setCurrentPagesOutput(currentPagesOutput - 1)

    }
    const nextPortionPages = () => {
        setCurrentPagesOutput(currentPagesOutput + 1)
    }

    const prevPage = () => {
        props.selectPage(props.currentPage - 1)
    }
    const nextPage = () => {
        props.selectPage(props.currentPage + 1)
    }
    const selectPage = (page: number) => {
        props.selectPage(page);
    }

    return (
        <div>
            <button onClick={prevPortionPages}>{'<<'}</button>
            <button onClick={prevPage}>Prev</button>
            {
                ArrayPages
                    .filter(page => page >= prevCountPageOutput && page <= nextCountPageOutput)
                    .map((page, index) => <button key={index} onClick={() => selectPage(page)}>
                            {page}
                        </button>
                    )
            }
            <button onClick={nextPage}>Next</button>
            <button onClick={nextPortionPages}>{'>>'}</button>
        </div>
    );
};
