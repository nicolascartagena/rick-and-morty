const Pagination = ({ numPages, selectPage, previousPage, nextPage, actualPage }) => {
    
    const pages = []
    for (let i = 1; i <= Math.ceil(numPages/ 10); i++) {
        
        if (actualPage === 1) {
            pages.push(i);
        }
        else {
            pages.push(actualPage + i - 3);
        }

        if((actualPage + i - 3) === numPages) {
            break;
        }
    }

    return (
        <div className="container">
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className="page-item" onClick={previousPage}><p className="page-link">Previous</p></li>
                    {pages.map((i) => <li className="page-item" onClick={() => selectPage(i)} key={i}><p className="page-link">{i}</p></li>)}
                    <li className="page-item" onClick={nextPage}><p className="page-link">Next</p></li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination