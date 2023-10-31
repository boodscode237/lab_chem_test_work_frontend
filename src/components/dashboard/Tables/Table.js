function createDataNanoParticle(id, nanoparticles, article_id, size, mep_id, user_id) {
    return { id, nanoparticles, article_id, size, mep_id, user_id };
}
const rows = [
    createDataNanoParticle('1', 159, 6.0, 24, 4.0, 56, ),
    createDataNanoParticle('2', 237, 9.0, 37, 4.3, 63, ),
    createDataNanoParticle('3', 262, 16.0, 24, 6.0, 21,),
    createDataNanoParticle('4', 305, 3.7, 67, 4.3, 42,),
    createDataNanoParticle('5', 356, 16.0, 49, 3.9, 74,),
];

const TableHeader = () => {
    return (
        <thead className="table-header-group">
        <tr>
            <th scope="col" className="table-cell">NPs ID</th>
            <th scope="col" className="table-cell">Nanoparticles</th>
            <th scope="col" className="table-cell">Article Id</th>
            <th scope="col" className="table-cell">Size</th>
            <th scope="col" className="table-cell">MEP Id</th>
            <th scope="col" className="table-cell">User Id</th>
        </tr>
        </thead>
    );
};

const TableBody = ({ rows }) => {
    return (
        <tbody className="table-row-group">
        {rows.map((row) => (
            <tr key={row.id}>
                <td className="table-cell">{row.id}</td>
                <td className="table-cell">{row.nanoparticles}</td>
                <td className="table-cell">{row.article_id}</td>
                <td className="table-cell">{row.size}</td>
                <td className="table-cell">{row.mep_id}</td>
                <td className="table-cell">{row.user_id}</td>
            </tr>
        ))}
        </tbody>
    );
};


export default function Table() {
    return(
        <table className="table">
            <TableHeader />
            <TableBody rows={rows} />
        </table>
    )
}