import React from 'react';
import {Pagination} from "react-bootstrap";
import {observer} from "mobx-react-lite";

const Pages = observer(({currentPage, click, totalPage, gap}) => {
    const pages = []

    for (let i = 0; i < totalPage; i++) {
        pages.push(i + 1)
    }

    return (
        <Pagination className="mt-2">
            <Pagination.First
                disabled={currentPage === 1}
                onClick={() => click(1)}
            />
            <Pagination.Prev
                disabled={currentPage === 1}
                onClick={() => click(currentPage-1)}
            />
            {pages.map(page => {
                if (page === 1 || page === totalPage || (currentPage + gap >= page && currentPage - gap <= page)) {
                    return (<Pagination.Item
                        key={page}
                        active={currentPage === page}
                        onClick={() => click(page)}
                    >
                        {page}
                    </Pagination.Item>)
                }
                if (currentPage - gap > 1 && page === 2) {
                    return (<Pagination.Ellipsis
                        key={page}
                    />)
                }
                if (currentPage + gap < totalPage && page === totalPage - 1) {
                    return (<Pagination.Ellipsis
                        key={page}
                    />)
                }
            })}
            <Pagination.Next
                disabled={currentPage === totalPage}
                onClick={() => click(currentPage+1)}
            />
            <Pagination.Last
                disabled={currentPage === totalPage}
                onClick={() => click(totalPage)}
            />
        </Pagination>
    );
});

export default Pages;
