import {Table, TableHead, TableRow, TableCell, TableBody} from "@mui/material";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import type {column, row} from "../../utils/type";

interface Props {
    columns: column[];
    rows: row[];
    maxWidth?: number | string;
}
const TableContainer = ({columns, rows, maxWidth }: Props) => {

    console.log(columns);
    const onEdit = (id) => {
        console.log(id);
    }
    const onDelete = (id) => {
        // Lọc ra các sinh viên có ID khác với ID cần xóa
        const updatedList = studentList.filter(student => student.id !== id);

        // Cập nhật lại state
        setStudentList(updatedList);

        console.log(`Đã xóa sinh viên có ID: ${id}`);
    };

    return (
            <Table sx={{maxWidth, margin: 'auto'}} size={"small"} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {columns.map((column) => (
                            <TableCell key={column.value}>{column.text}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            {columns.map((column) => {
                                if (column.value === 'action') {
                                    return (
                                        <TableCell key={column.value}>
                                            <EditOutlinedIcon
                                                sx={{padding: '0 4px 0 0', cursor: 'pointer'}}
                                                color={"success"}
                                                onClick={() => onEdit(row.id)}
                                            />
                                            <DeleteIcon
                                                sx={{cursor: 'pointer'}}
                                                color={"warning"}
                                                onClick={() => onDelete(row.id)}
                                            />
                                        </TableCell>
                                    );
                                }
                                return (
                                    <TableCell key={column.value} style={column.style}>
                                        {row[column.value]}
                                    </TableCell>
                                );
                            })}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
    );

}

export default TableContainer