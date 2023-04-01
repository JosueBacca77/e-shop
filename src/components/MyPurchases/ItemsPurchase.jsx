import SortableTableMUI from "../General/SortableTableMUI";


const ItemsPurchaseTable =({rows})=> {

    const purchasesItemsHeadCells = [
        {
            id: 'name',
            numeric: false,
            disablePadding: false,
            label: 'Name',
            align:'left'
        },
        {
            id: 'heading',
            numeric: false,
            disablePadding: false,
            label: 'Heading',
            align:'left'
        },
        {
            id: 'count',
            numeric: true,
            disablePadding: false,
            label: 'Amount',
            align:'right'
        },
        {
            id: 'price',
            numeric: true,
            disablePadding: false,
            label: 'Price',
            align:'right'
        },
        {
            id: 'subtotal',
            numeric: true,
            disablePadding: false,
            label: 'Sub total',
            align:'right'
        }
    ];

    return (
        <SortableTableMUI 
            title={''}
            rows={rows}
            headCells={purchasesItemsHeadCells}
            maxHeight={200}
        />
    );
}

export default ItemsPurchaseTable