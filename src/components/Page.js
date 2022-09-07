const Page = ({page, selectPage}) => {

    return (
        <li className="page-item" onClick={() => selectPage(page)} key={page}><p className="page-link">{page}</p></li>
    )
}

export default Page