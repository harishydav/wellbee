import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function TreatmentsTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Brain {'&'} Nerve Surgery</TableCell>
            <TableCell align="center">Ear Nose Throat (ENT)</TableCell>
            <TableCell align="center">Lungs Surgery </TableCell>
          </TableRow>
        </TableHead>

          <TableRow>
            <TableCell align="center">Eye Treatment / Surgery</TableCell>
            <TableCell align="center">Heart Surgery</TableCell>
            <TableCell align="center">Bone/Joint Surgery </TableCell>
          </TableRow>

          <TableRow>
            <TableCell align="center">Vascular Surgery</TableCell>
            <TableCell align="center">Gastric Surgery</TableCell>
            <TableCell align="center">Kidney {'&'} Urinary </TableCell>
          </TableRow>

          <TableRow>
            <TableCell align="center">Female Specific Surgery</TableCell>
            <TableCell align="center">Skin {'&'} Hair Transplaint</TableCell>
            <TableCell align="center">Dental Treatment </TableCell>
          </TableRow>

          <TableRow>
            <TableCell align="center">Cosmetic Treatment</TableCell>
            <TableCell align="center">Anus {'&'} Rectum Surgery</TableCell>
            <TableCell align="center">Liposuction</TableCell>

          </TableRow>


      </Table>
    </TableContainer>
  );
}