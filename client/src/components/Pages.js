import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Pagination } from 'react-bootstrap';
import {Context} from '../index';

const Pages = observer(() => {
    const {tour} = useContext(Context)
    const pageCount = Math.ceil(tour.totalCount / tour.limit)
    const pages = [];
    

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1);
    }

    return (
        <Pagination className="mt-5">
            {pages.map(page =>
                    <Pagination.Item
                        key={page}
                        active={tour.page === page}
                        onClick={() => tour.setPage(page)}
                    >
                        {page}
                    </Pagination.Item>
                )}
        </Pagination>
    );
});

export default Pages;