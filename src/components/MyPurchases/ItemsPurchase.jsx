import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Paper from "@material-ui/core/Paper";


const ItemsPurchaseTable =({rows})=> {
    const useStyles = makeStyles({
        table: {
            minWidth: 650,
            margin: '10px',
        },
    });

    const classes = useStyles();

    return (
        <TableContainer className={classes.table} component={Paper}>
            <Table  aria-label="caption table">
                <TableHead>
                    <TableRow>
                        <TableCell>Nombre</TableCell>
                        <TableCell align="right">Rubro</TableCell>
                        <TableCell align="right">Cantidad</TableCell>
                        <TableCell align="right">Precio</TableCell>
                        <TableCell align="right">Subtotal</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell component="th" scope="row">
                                {item.name}
                            </TableCell>
                            <TableCell align="right">{item.heading}</TableCell>
                            <TableCell align="right">{item.count}</TableCell>
                            <TableCell align="right">$&nbsp;{item.price}</TableCell>
                            <TableCell align="right">$&nbsp;{item.subtotal}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ItemsPurchaseTable